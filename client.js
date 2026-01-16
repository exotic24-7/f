let ver = document.scripts[0].src.split("v=")[1];
if (!ver && location.host == 'localhost:3000') ver = 'Developer'
let servers = {
  "wss://flowr.fun/": "Server 1",
  "wss://server2.flowr.fun/": "Server 2",
  "ws://localhost:3000/": "Local"
}

console.log(`Client version ${ver} (this is not going to be updated every update probably)`)

HOST = location.origin.replace(/^http/, 'ws')
if(location.origin === 'https://flowrclient.serum0017.repl.co'){
  HOST = 'wss://flowr.fun'.replace(/^http/, 'ws')
}
let ws;


window.state = localStorage.getItem("hashedPassword") === null ? "account" : "menu";
window.skipLogin = window.state === 'account' ? false : true;
window.connected = false;
window.spectating = false;

window.reconnectTries = 20;
window.reconnecting = false;
window.lastMessageTimeReceived = performance.now();

window.keepAlive = [];

function initWS(){
  ws = new WebSocket(HOST);
  console.log("Initiating WebSocket connection!")
  ws.binaryType = "arraybuffer";

  ws.onopen = handleOpen;
  ws.onmessage = handleMessage;
  ws.onclose = handleClose;

  // ws.onclose = async (event) => {
  //   
  // }
}

function startKeepAlive(){
  window.keepAlive = [setInterval(() => {
    if(window.state !== 'game'){
      send({ping: true});
    } 
  }, 20000), setInterval(() => {

    if(window.state == 'game' && performance.now() - window.lastMessageTimeReceived > 5000){
      //we DC'ed. Try reconnecting!
      console.log("DISCONNECT DETECTED! Closing WebSocket to attempt reconnect.")
      ws.onopen = null;
      ws.onmessage = null;
      ws.onclose = null;
      ws.onerror = null;
      ws.close(1000, "manual reconnection");
      handleClose();
      
      //ws.onclose();
      window.lastMessageTimeReceived = performance.now();
    }
  }, 1000)];
}

function stopKeepAlive(){
  window.keepAlive.forEach(v=>clearInterval(v));
}


function handleOpen(){

  startKeepAlive();

  if(window.reconnecting === true && !window.connectBackMainServ) {
      const obj = {reconnect: true, id: window.reconnectId};

      if(window.connectOtherServerId !== undefined){
        obj.connectOtherServerId = window.connectOtherServerId;
        delete window.connectOtherServerId;

        window.state = 'menu';
        console.log('Connect Other Server Packet Sent!');
      } else {
        window.state = 'game';
        console.log('Reconnect Packet Sent!')
      }

      ws.send(msgpackr.pack(obj));
      wsMsgQueue = [];
      //give the server a chance to process
      setTimeout(sendQueuedMessages, 100);
      window.reconnectTries = 20;
      
    }
  ws.onerror = ()=>{};
  window.reconnecting = false;

    if(window.connectBackMainServ) {
      window.state = 'menu';
      delete window.connectBackMainServ;
    }

  ws.binaryType = "arraybuffer";
  console.log('connected to server!');
  window.connected = true;
  window.connectedTime = window.time;
  document.querySelector('.grid').classList.add('show');
  
  if(window.skipLogin === true && window.reconnecting !== true){
    send({login: true, username, hashedPassword, hashedPassword2/*, betakey*/});
  }
  

}

function handleMessage(data){
  window.lastMessageTimeReceived = performance.now();
  if(window.state === 'game'){
    try {
      let msg = msgpackr.unpack(data.data);//msgpack.decode(new Uint8Array(data.data));
      processGameMessage(msg);
    } catch(e){
      const decoded = new Float32Array(data.data);
      // console.log({[decoded[0]]: decoded});
      processRawMessage[/*type*/decoded[0]](decoded);
    }
  } else {
    let msg = msgpackr.unpack(data.data);//msgpack.decode(new Uint8Array(data.data));
    processMenuMessage(msg);
  }
}

function handleClose(event){
  stopKeepAlive();
  delete window.connectedTime;
  console.log(`WebSocket closed for`, event, event ? event.reason : "unknown reason");
  window.state = "disconnected";
  if(event && (event.reason) && event.reason != '') {
    window.connected = false;
    return;
  }
  
  if(!['game', 'disconnected'].includes(window.state) && window.connectOtherServerId === undefined){
    window.connected = false;
  } else {

    
    // try to reconnect and send reconnect msg 
    if(window.reconnectTries > 0){
      wsMsgQueue.length = 0;
      send = (msg) => {
        wsMsgQueue.push(msg);
      };
      console.log(`trying to reconnect in ${timeBetweenReconnects(window.reconnectTries)}`);
      window.reconnecting = true;
      setTimeout(attemptReconnect, timeBetweenReconnects(window.reconnectTries));  

    }
  }
  
}

function attemptReconnect(){
  
  
  initWS();
  ws.onerror = (e)=>{
    console.log("WS INIT FAILED", e)
    /*console.log(`WS INIT FAILED, TRYING AGAIN: ${timeBetweenReconnects(window.reconnectTries)}`)
    setTimeout(attemptReconnect, timeBetweenReconnects(window.reconnectTries)); */
  }
  
  console.log(`Reconnect Attempt; ${window.reconnectTries} tries left`);
  window.reconnectTries--;

}

function timeBetweenReconnects(triesleft){
  return 500 + 1000 * (20 - triesleft);
}


// Initialize WebSocket only when not running singleplayer LocalServer
if (!window.LocalServer) initWS();

//END OF WS CONNECTION LOGIC

window.onload = () => {
  resize();
  document.querySelector('.loader').style.animation = 'fadeOut .2s';
  setTimeout(() => {
    document.querySelector('.loader').remove();
  }, 200 - 1000 / 60 * 2)

  for(let i = 0; i < onLoadFunctions.length; i++){
    onLoadFunctions[i]();
  }
  onLoadFunctions.length = 0;

  window.loaded = true;

  if (window.LocalServer) {
    // route messages to LocalServer instead of WebSocket
    send = (msg) => {
      if (msg.play) {
        LocalServer.startGame();
        window.state = 'game';
        return;
      }
      if (msg.move || msg.fire) {
        LocalServer.handleInput(msg);
      }
      // other message types can be handled as needed
    };
    for (let i = 0; i < wsMsgQueue.length; i++) {
      send(wsMsgQueue[i]);
    }
  } else {
    send = (msg, forceSend) => {
      if (forceSend || !window.reconnecting) {
        ws.send(/*msgpack.encode(msg)*/msgpackr.pack(msg));
      }
    }
    for (let i = 0; i < wsMsgQueue.length; i++) {
      send(wsMsgQueue[i]);
    }
  }
}

const customCodeBiomeNames = ["Rainforest_cc", "petri_dish", "Slime", "Mutated_Garden", "Freshwater_Lake"];

const playButton = document.querySelector('.play-btn');

const playText = document.querySelector('.play-text');


let lastAttempt = Date.now();

playButton.onclick = (e) => {
  const biome = biomeManager.getCurrentBiome();
  const isCustomCodeBiome = customCodeBiomeNames.includes(biome);

  squadUI.isCustomCode = isCustomCodeBiome;
  if(isCustomCodeBiome === true){
    processMenuMessage({
      squadInit: true,
      clients: [{name: "", id: 1, ready: false, sw: 200, maxSW: 200, petals: [], username: ""}],
      public: false,
      selfId: 1,
      biome,
    })
  }

  if(playText.getAttribute("stroke") === "Ready"){
    // the first time the user clicks ready this will trigger. Otherwise it wont ever (unless user changes biome).
    if(isCustomCodeBiome === true){
      loadCustomCodeBiome(biome);
      return;
    }

    // toggle ready
    changeReady(!window.ready);
  } else {
    // open menu for the first time (play)
    if (!window.connected) return;
    if (window.captchaStatus == true && Date.now() > lastAttempt + 1500){
      const hcaptchaElem = document.querySelector('.h-captcha');
      const captchaDiv = document.querySelector(".captcha");
      captchaDiv.classList.remove("hidden");
      const hcaptchaIframe = hcaptchaElem.firstChild;
      const solveInterval = setInterval(() => {
          const captchaResponse = hcaptchaIframe.getAttribute('data-hcaptcha-response');
          // console.log(captchaResponse)
          if(captchaResponse.length > 0){
              clearInterval(solveInterval);
              captchaDiv.classList.add("hidden");
              send({captchaVerify: true, captchaResponse});
              lastAttempt = Date.now();
              hcaptcha.reset();
          }
      }, 100)
      return;
    }
    squadUI.reset();
    window.squadUIEnabled = true;

    playText.setAttribute("stroke", "Ready");
    
    changeReady(false);
  }
}

function loadCustomCodeBiome(biome){
  const iframe = document.createElement('iframe');
  iframe.src = `${location.origin}/customBiome/${biome}`;
  const menu = document.querySelector('.menu');
  iframe.style.position = "fixed";
  iframe.style.top = 0;
  iframe.style.left = 0;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.zIndex = "99999999999999999";
  menu.appendChild(iframe);
  window.addEventListener('message', (event) => {
    unloadCustomCodeBiome(iframe);
  });
  iframe.onload = () => {
    iframe.contentWindow.postMessage([menuInventory.pack().top, Math.round(squadUI.startingWaveSlider * 200 + 1)]);
  }
}

function unloadCustomCodeBiome(iframe){
  iframe.remove();
  squadUI.reset();
  closeSquadUI();
}

let wsMsgQueue = [];
let send = (msg) => {
  wsMsgQueue.push(msg);
};

function sendQueuedMessages(){
  let int = setInterval(()=>{
    if(wsMsgQueue.length == 0){
      clearInterval(int);
      send = (msg) => {
        ws.send(/*msgpack.encode(msg)*/msgpackr.pack(msg));
      }
      return;
    }
    ws.send(msgpackr.pack(wsMsgQueue.shift()));
  }, 100);
  
  
}


// mainWS.onclose = (e) => {
//   // intentional closing
//   if(window.state === 'game'){
//     return;
//   }

//   console.log('closed ws, try to reconnect');
//   mainWS = new WebSocket(HOST);
//   mainWS.binaryType = "arraybuffer"
//   window.connected = false;
// }

// mainWS.onerror = (e) => {
//   console.log("ws error");
// }

// let reconnectInterval = setInterval(() => {
//   tryReconnect();
// }, 5000)

// function tryReconnect(){
//   if(window.state === "game"){
//     return;
//   }
//   // if(mainWS.readyState === 1 && window.connected === false){
//   //   initMainWS();
//   //   mainWS.onopen();
//   //   return;
//   // }
//   if(window.connected === false){
//     // console.log('closed ws, try to reconnect');
//     setTimeout(() => {
//       globalInventory.initInventory([]);
//       menuInventory.clear();
//       mainWS = new WebSocket(HOST);
//       mainWS.binaryType = "arraybuffer"
//       window.connected = false; 
//       initMainWS();
//     }, 2000);
//     // setTimeout(() => {
//     //   window.location.reload();
//     // }, 2000)
//   }
// }

// 3d
if(location.href.endsWith('/3d')){
  window.is3D = true;

  // appending scripts
  // const s = document.createElement("script");
  // s.type = "text/javascript";
  // s.src = "systems/three.js";
  // document.body.append(s);

  const t = document.createElement("script");
  t.type = "module";
  t.src = "systems/3d.js";
  document.body.append(t);
}

// If running in singleplayer (LocalServer available), ensure Play button starts local game
try {
  const playBtn = document.querySelector('.play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', (e) => {
      if (window.LocalServer && window.state !== 'game') {
        LocalServer.startGame();
        window.state = 'game';
        const menu = document.querySelector('.menu');
        if (menu) menu.style.display = 'none';
      }
    });
  }
} catch (e) {}