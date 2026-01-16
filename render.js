let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const tileSize = 50;

const menu = document.querySelector('.menu');

const fullscreen = {
    ratio: 9 / 16,
    zoom: 1200,
}
let renderScale = 1;

function resize(){
    const dpi = window.devicePixelRatio;
    canvas.style.width = Math.ceil(window.innerWidth) + 'px';
    canvas.style.height = Math.ceil(window.innerHeight) + 'px';
    canvas.width = Math.ceil(window.innerWidth) * dpi;
    canvas.height = Math.ceil(window.innerHeight) * dpi;
    canvas.zoom = Math.max(0.1, Math.round((Math.max(canvas.height, canvas.width * fullscreen.ratio) / fullscreen.zoom * renderScale) * 100) / 100);
    // w and h are calced with zoom
    canvas.w = canvas.width / canvas.zoom;
    canvas.h = canvas.height / canvas.zoom;
    // ctx.translate(canvas.width/2, canvas.height/2);
    ctx.scale(canvas.zoom, canvas.zoom);
    // ctx.translate(-canvas.width/2, -canvas.height/2);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    // ctx.imageSmoothingEnabled = false;

    // also scaling the menu
    menu.style.width = Math.ceil(window.innerWidth) / canvas.zoom * dpi / 1.65 + 'px';
    menu.style.height = Math.ceil(window.innerHeight) / canvas.zoom * dpi / 1.65 + 'px';
    menu.style.transform = `scale(${canvas.zoom / dpi * 1.65})`;
    menu.style.transformOrigin = `0px 0px`;

    // also scaling the login menu if applicable
    if(window.state === "account"){
        const loginMenu = document.querySelector('.login-menu');
        loginMenu.style.width = Math.ceil(window.innerWidth) / canvas.zoom * dpi / 1.65 + 'px';
        loginMenu.style.height = Math.ceil(window.innerHeight) / canvas.zoom * dpi / 1.65 + 'px';
        loginMenu.style.transform = `scale(${canvas.zoom / dpi * 1.65})`;
        loginMenu.style.transformOrigin = `0px 0px`;
    }

    menuInventory.positionPetalSlots();
    inventory.positionPetalSlots();
    levelBar.calculateDimensions();
    GraceBar.calculateDimensions("grace");
    TimeBar.calculateDimensions("time");
    DivergenceBar.calculateDimensions("divergence");
    
    biomeManager.updateArrowDimensions();
    globalInventory.resizeScroll();
    changelog.resizeScroll();

    if(window.is3D === true) window.resize3D();
}
  
window.addEventListener('resize', function () {
    resize();
});

const menuEnemyIncrementRadii = [3.6, 4.8, 6.6, 7.2, 8, 12, 18];

let lastTime = performance.now();
dt = 0;
let time = performance.now();

window.fps = 0;
window.interpolateCalls = 0;
window.framesRendered = 0;
window.lastFramesRenderedResetTime = performance.now();
// window.toRenderHitboxes = false;

window.clicks = 0;
window.clickLoc = {};
window.activeClicks = [];

function render(){
    requestAnimationFrame(render);

    draw();
    if (window.flowrMod) if(window.flowrMod.rarities) window.flowrMod.rarities = Colors.rarities
}

function draw(){
    time = performance.now();
    dt = time - lastTime;
    lastTime = time;

    if (dt > 1000){
        // dt = 1000;
        dt = 0;
    }

    if(window.state === "account"){
        renderAccountMenu(dt);
    } else if(window.state === "menu"){
        renderMenu(dt);
    } else {
        renderGame(dt);
        if(window.state === "disconnected" && window.connectOtherServerId == undefined){
            renderDisconnectedText(dt);
        }
    }

    if(window.toRenderDebug === true){
        window.framesRendered++;
        if(window.framesRendered > 10){
            const now = performance.now();
            window.fps = Math.floor(window.framesRendered / (now - window.lastFramesRenderedResetTime) * 1000);
            window.lastFramesRenderedResetTime = now;
            window.framesRendered = 0;
            // console.log(window.interpolateCalls)
            // window.interpolateCalls = 0;
        }
        renderDebug();
    }
}

const globalInventory = new GlobalInventory();
let maxRarityObtained = 0;

const menuInventory = new Inventory(savedSlotAmount);
menuInventory.initChangePetalsQueue();
let squadUI = new SquadUI();

const craftingMenu = new CraftingMenu();

let connectingTextAnimationCompletion = 1;

let particles = []

function renderMenu(dt){
    // getCurrentBiomeData(){
    //     return {
    //         ratio: this.transitionAnimationTimer / this.transitionTime,
    //         last: this.biomeOrder[this.lastBiome],
    //         current: this.biomeOrder[this.currentBiome]
    //     }
    // }
    const {ratio, last, current, direction} = biomeManager.getCurrentBiomeData();
    // ctx.fillStyle = '#1ea761';
    // ctx.strokeStyle = "#1c8c54";
    
    if(ratio !== 1){
        if(direction === 'right'){
            ctx.fillStyle = Colors.biomes[last].background;
            ctx.strokeStyle = Colors.biomes[last].grid;
        } else {
            ctx.fillStyle = Colors.biomes[current].background;
            ctx.strokeStyle = Colors.biomes[current].grid;
        }
        
        renderBg();

        ctx.save();
        ctx.beginPath();
        if(direction === 'right'){
            ctx.rect(0,0,smoothstep(smoothstep(ratio)) * canvas.w, canvas.h);
        } else {
            ctx.rect(0,0,(1 - smoothstep(smoothstep(ratio))) * canvas.w, canvas.h);
        }
        ctx.clip();
        ctx.closePath();

        if(direction === 'right'){
            ctx.fillStyle = Colors.biomes[current].background;
            ctx.strokeStyle = Colors.biomes[current].grid;
        } else {
            ctx.fillStyle = Colors.biomes[last].background;
            ctx.strokeStyle = Colors.biomes[last].grid;
        }
        renderBg();

        ctx.restore();

        for(let i = 0; i < menuEnemies.length; i++){
            if(menuEnemies[i].updatedBiome === undefined){
                continue;
            }
            if((direction === 'right' && menuEnemies[i].render.x <= smoothstep(smoothstep(ratio)) * canvas.w) || (direction === 'left' && menuEnemies[i].render.x >= (1 - smoothstep(smoothstep(ratio))) * canvas.w)){
                delete menuEnemies[i].updatedBiome;
                const biomeTypes = biomeEnemyMap[current] ?? [];
                menuEnemies[i].type = biomeTypes[Math.floor(Math.random() * biomeTypes.length)];
                menuEnemies[i] = new Enemy(menuEnemies[i]);
            }
        }
    } else {
        ctx.fillStyle = Colors.biomes[current].background;
        ctx.strokeStyle = Colors.biomes[current].grid;
        renderBg();
        // ctx.fillRect(0,0,canvas.w,canvas.h);

        // // tiles
        // const timeOffset = (-time/20) % 50;

        // ctx.lineWidth = 2;
        // ctx.globalAlpha = 0.6;
        // for(let x = timeOffset-ctx.lineWidth; x <= canvas.w+ctx.lineWidth; x+=tileSize){
        //     ctx.beginPath();
        //     ctx.moveTo(x, 0);
        //     ctx.lineTo(x, canvas.h);
        //     ctx.stroke();
        //     ctx.closePath();
        // }

        // for(let y = -timeOffset-ctx.lineWidth; y <= canvas.h+ctx.lineWidth; y+=tileSize){
        //     ctx.beginPath();
        //     ctx.moveTo(0, y);
        //     ctx.lineTo(canvas.w, y);
        //     ctx.stroke();
        //     ctx.closePath();
        // }
    }

    biomeManager.draw();

    renderMenuEnemies();

    // CHRISTMAS SNOW

    // if (Math.random() < dt/16){
    //     for (let i = 0; i < 3; i++) {
    //         let snowflake = {
    //             x: Math.random() * canvas.w,
    //             y: -10,
    //             yVel: Math.random() * 5 + 5,
    //             sin: Math.random() * 5 - 2.5,
    //             radius: Math.random() * 4 + 4
    //         }
    //         particles.push(snowflake)
    //     }
    // }

    // ctx.fillStyle = "#fff"

    // for (let particle of particles) {

    //     ctx.globalAlpha = Math.max(0, 0.75 - (particle.y / (canvas.h + 500)))
    //     ctx.beginPath();
    //     ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    //     ctx.fill();
    //     ctx.closePath();

    //     ctx.globalAlpha/=2
    //     ctx.beginPath();
    //     ctx.arc(particle.x, particle.y, particle.radius*1.75, 0, Math.PI * 2);
    //     ctx.fill();
    //     ctx.globalAlpha*=2
    //     ctx.closePath();

    //     ctx.globalAlpha = 1

    //     particle.x += particle.sin * Math.sin(particle.y / 250) * dt/16
    //     particle.y += particle.yVel * dt/16

    //     if (particle.y > canvas.h) particle.toDelete = true
    // }

    /////////////////////////////////////////////////////////////////

    // NEW YEARS FIREWORKS

    // if (!window.fireworks) window.fireworks = []

    // if (Math.random() < (dt/16) * 0.06){
    //         let radius = Math.random() * 5 + 5
    //         let firework = {
    //             x: Math.random() * canvas.w,
    //             y: canvas.h,
    //             yVel: -Math.random() * 10 - 55,
    //             xVel: Math.random() * 50 - 25,
    //             radius,
    //             maxRadius: radius,
    //             main: true,
    //             color: [
    //                 "#5ccefa", 
    //                 "#f4a9b7",
    //                 "#ffffff",
    //                 "#ff0000",
    //                 "#00ff00",
    //                 "#0000ff",
    //                 "#ffff00",
    //                 "#00ffff",
    //                 "#ff00ff"
    //             ][Math.random() * 9 | 0]
    //         }
    //         window.fireworks.push(firework)
    // }

    // for (let firework of window.fireworks) {

    //     if (Math.random() < (dt/16)){
    //         particles.push({
    //         x: firework.x,
    //         y: firework.y,
    //         radius: firework.radius,
    //         maxRadius: firework.maxRadius,
    //         main: firework.main,
    //         color: firework.main ? "#555555" : firework.color
    //     })
    // }

    //     if (firework.main && firework.y < canvas.h - (canvas.h / 1.25)) {
    //         let c = (Math.random() * 4 + 5) | 0
    //         for (let i = 0; i < c; i++) {
    //             let angle = i * Math.PI * 2 / c
    //             let radius = Math.random() * 5 + 2
    //             let blast = {
    //                 x: firework.x,
    //                 y: firework.y,
    //                 yVel: Math.sin(angle) * (Math.random() * 10 + 10),
    //                 xVel: Math.cos(angle) * (Math.random() * 10 + 10),
    //                 radius,
    //                 maxRadius: radius,
    //                 color: firework.color
    //             }
    //             window.fireworks.push(blast)
    //         }
    //     }

    //     firework.x += firework.xVel * (dt/16)
    //     firework.y += firework.yVel * (dt/16)

    //     firework.yVel += 0.98 * (dt/16)

    //     firework.radius -= firework.radius * 0.03 * (dt / 16)

    //     if (firework.radius / firework.maxRadius < 0.5) firework.toDelete = true
    // }

    // for (let particle of particles) {

    //     ctx.fillStyle = particle.color

    //     ctx.globalAlpha = Math.max(0, particle.radius/particle.maxRadius)
    //     ctx.beginPath();
    //     ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    //     ctx.fill();
    //     ctx.closePath();
        
    //     ctx.globalAlpha /= 2
    //     ctx.beginPath();
    //     ctx.arc(particle.x, particle.y, particle.radius * 1.75, 0, Math.PI * 2);
    //     ctx.fill();
    //     ctx.globalAlpha *= 2
    //     ctx.closePath();

    //     ctx.globalAlpha = 1

    //     particle.radius -= particle.radius * (particle.main ? 0.1 : 0.03) * (dt / 16)

    //     if (particle.radius / particle.maxRadius < 0.1) particle.toDelete = true
    // }

    // window.fireworks = window.fireworks.filter((s) => { if (!s.toDelete) return true })

    // particles = particles.filter((s) => { if (!s.toDelete) return true })

    settingsMenu.draw();

    changelog.draw();

    if(window.connected === false || time - window.connectedTime < 800){
        if(window.connected === false){
            connectingTextAnimationCompletion = 1;
        } else {
            connectingTextAnimationCompletion = 1 - easeOutCubic((time - window.connectedTime)/800);
        }
        ctx.globalAlpha = 1;
        ctx.font = "900 42px 'Ubuntu'";
        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black'//"#1c8c54";
        ctx.lineWidth = 5;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.strokeText("Connecting...", canvas.w / 2, canvas.h * 0.5 * connectingTextAnimationCompletion - canvas.h * 0.03);
        ctx.fillText("Connecting...", canvas.w / 2, canvas.h * 0.5 * connectingTextAnimationCompletion - canvas.h * 0.03);
    }

    let toTranslate = false;
    if(time - window.connectedTime < 1000){
        toTranslate = true;
        const animationCompletion = easeOutCubic(smoothstep((time - window.connectedTime) / 1000));
        var positionToTranslate = (0) * animationCompletion + (1-animationCompletion) * (-canvas.h/2-140);
        ctx.translate(0, positionToTranslate);
    }   

    // Title text
    ctx.font = "900 91px Ubuntu";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = "-1px";

    ctx.lineWidth = 10;
    ctx.strokeStyle = 'black'//"#1c8c54";
    ctx.strokeText("flowr.fun", canvas.w / 2, canvas.h / 2 - 140);

    ctx.fillStyle = 'white';
    ctx.fillText("flowr.fun", canvas.w / 2, canvas.h / 2 - 140);

    let dotLoc = canvas.w / 2 - ctx.measureText("flowr.fun").width/2 + ctx.measureText("flowr").width + ctx.measureText(".").width/2;
    ctx.strokeStyle = 'black'//"#1c8c54";
    ctx.strokeText(".", dotLoc, canvas.h / 2 - 140);
    
    if(window.clicks > 0) ctx.fillStyle = `hsl(${(window.clicks * 10) % 360} 100 50)`;
    else ctx.fillStyle = "white";
    ctx.fillText(".", dotLoc, canvas.h / 2 - 140);

    window.clickLoc = {x: dotLoc, y: canvas.h/2 - 130};

    window.activeClicks = window.activeClicks.filter((click)=>click.t <= 500);

    ctx.save();
    ctx.translate(window.clickLoc.x, window.clickLoc.y);
    let scl = 1 + (window.clicks ** 0.5)/10
    ctx.scale(scl, scl);
    for(let i = 0; i < window.activeClicks.length; i++) {
        window.activeClicks[i].t += dt;
        window.activeClicks[i].x += window.activeClicks[i].xv * dt;
        window.activeClicks[i].y += window.activeClicks[i].yv * dt;
        window.activeClicks[i].yv += 0.001 * dt;
        renderClickCounter({radius: 50, timeAlive: window.activeClicks[i].t, totalDamage:  window.activeClicks[i].n, x: window.activeClicks[i].x, y: window.activeClicks[i].y});
    }
    ctx.restore();


    ctx.letterSpacing = "0px";

    if(toTranslate === true){
        ctx.translate(0, -positionToTranslate);
    }
    
    levelBar.draw();

    // ctx.lineWidth = 6;
    // ctx.strokeStyle = 'white';
    // ctx.lineCap = 'round';
    // ctx.strokeText("Flowr.io", canvas.w / 2, canvas.h / 3);

    // ctx.font = "600 124px Fredoka One";
    // ctx.fillStyle = '#f0f0f0';
    // ctx.strokeStyle = 'black'//"#1c8c54";
    // ctx.lineWidth = 8;
    // ctx.textAlign = 'center';
    // ctx.textBaseline = 'middle';
    // ctx.strokeText("Flowr.io", canvas.w / 2, canvas.h / 3);
    // ctx.fillText("Flowr.io", canvas.w / 2, canvas.h / 3);

    if(window.connected === true){
        const topPetalSlotSize = menuInventory.topPetalSlots[0].size;// global size for all petal slots
        const bottomPetalSlotSize = menuInventory.bottomPetalSlots[0].size;

        const initialDisplacement = topPetalSlotSize + topPetalSlotSize * paddingRatio + bottomPetalSlotSize + bottomPetalSlotSize * paddingRatio - 2;
        const finalDisplacement = -canvas.h / 2 + initialDisplacement * 1.5;

        if(time - window.connectedTime < 1000){
            const animationCompletion = easeOutCubic(smoothstep((time - window.connectedTime) / 1000));
            const positionToTranslate = finalDisplacement * animationCompletion + (1-animationCompletion) * initialDisplacement;
            menuInventory.translateY = positionToTranslate;
            //ctx.translate(0, positionToTranslate);
            menuInventory.draw(animationCompletion);
            //ctx.translate(0, -positionToTranslate);
        } else {
            if(window.squadUIEnabled === true){
                menuInventory.translateY = finalDisplacement + squadUI.h * 0.95;
                //ctx.translate(0, finalDisplacement + squadUI.h * 0.95);
                menuInventory.draw();
                //ctx.translate(0, -finalDisplacement - squadUI.h * 0.95);
                squadUI.render(dt);
            } else {
                menuInventory.translateY = finalDisplacement;
                //ctx.translate(0, finalDisplacement);
                menuInventory.draw();
                //ctx.translate(0, -finalDisplacement);
            }
        }
        
        if(draggingPetalContainer !== null){
            draggingPetalContainer.draw();
        }
    }

    craftingMenu.drawIcon();
    globalInventory.drawIcon();
    mobGallery.drawIcon();
    // shop.drawIcon();

    craftingMenu.draw();
    globalInventory.draw();
    mobGallery.draw();
    // shop.draw();

    if(window.ascendUI !== undefined && !disableAscendedAsk){
        window.ascendUI.draw();
    }
    if(window.characterSelector !== undefined){
        window.characterSelector.draw();
    }

    streakMenu.draw();
}

function renderBg(){
    ctx.fillRect(0,0,canvas.w,canvas.h);

    if (window.noGrid !== true) {
        // tiles
        const timeOffset = (-time / 20) % 50;

        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.6;
        for (let x = timeOffset - ctx.lineWidth; x <= canvas.w + ctx.lineWidth; x += tileSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.h);
            ctx.stroke();
            ctx.closePath();
        }

        for (let y = -timeOffset - ctx.lineWidth; y <= canvas.h + ctx.lineWidth; y += tileSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.w, y);
            ctx.stroke();
            ctx.closePath();
        }
    }
    ctx.globalAlpha = 1;
}

function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}

function renderAccountMenu(dt){
    // just render the grid, and 2 buttons, one toggling between creating account and logging into an account, and the other saying create account/ login to account depending on toggle. 
    ctx.fillStyle = '#1ea761';
    ctx.fillRect(0,0,canvas.w,canvas.h);

    if (window.noGrid !== true) {
        // tiles
        const timeOffset = (-time / 20) % 50;

        ctx.strokeStyle = "#1c8c54";
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.6;
        for (let x = timeOffset - ctx.lineWidth; x <= canvas.w + ctx.lineWidth; x += tileSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.h);
            ctx.stroke();
            ctx.closePath();
        }

        for (let y = -timeOffset - ctx.lineWidth; y <= canvas.h + ctx.lineWidth; y += tileSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.w, y);
            ctx.stroke();
            ctx.closePath();
        }
    }

    if(window.loginMessage !== undefined){
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.font = `900 28px 'Ubuntu'`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.lineWidth = 5;
        ctx.globalAlpha = 1;
        if(performance.now() - window.lastLoginMessageChangeTime < 500){
            ctx.globalAlpha = (performance.now() - window.lastLoginMessageChangeTime) / 500;
        }
        ctx.strokeText(window.loginMessage, canvas.w/2, canvas.h - 40);
        ctx.fillText(window.loginMessage, canvas.w/2, canvas.h - 40);
        ctx.globalAlpha = 1;
        ctx.textBaseline = "middle";
    }
}

// those little enemies that float by
const enemyTypes = Object.keys(enemyRenderMap).filter(e => e !== 'Square' && e !== 'default' && noRenderingUi.includes(e) === false);
//['Ladybug', 'Dark Ladybug', 'Shiny Ladybug', 'Rock', 'Dandelion', 'Baby Ant', 'Worker Ant', 'Soldier Ant', "Soldier Fire Ant", 'Hornet', 'Bee', 'Spider', 'Centipede', 'Evil Centipede', 'Desert Centipede', 'Beetle', 'Scorpion', 'Sandstorm', 'Cactus', 'Fire Ant Burrow', 'Locust', 'Bubble'
const biomeEnemyMap = {
    garden: ['Hornet','Bee','Centipede','Evil Centipede','Ant Burrow','Dandelion','DandelionMissile','Ladybug','Rock','Spider','Worker Ant','Baby Ant','Soldier Ant','Dark Ladybug','Queen Ant','Missile',"DandelionMissile","Tree","Root"],
    desert: ['Scorpion', 'Fire Ant Burrow', 'Beetle', 'Desert Centipede','Shiny Ladybug',"Soldier Fire Ant",'Sandstorm','Cactus','Locust','Queen Fire Ant','Desert Moth','Sandstone','Tarantula','Moonlit Frog','Sunlit Frog','ScorpionMissile',"Worker Fire Ant", "Baby Fire Ant"],
    ocean: ['Bubble','Shell','Jellyfish','Starfish','Leech','Crab','Sponge','Sea Urchin','UrchinMissile','Sea Floor Burrow','Coral','Electric Eel'],
    '1v1': ['1v1text', "Agar.io Cell"]
};

const rareBiomeEnemyMap = {
    garden: ['Soil'],
    desert: ['FireMissile','Shiny Ant Burrow', "Shiny Beetle", "Shiny Cactus"],
    ocean: ['Plastic', "Ocean Ladybug",'Dark Electric Eel', "Shiny Electric Eel"]
}

const secretBiomeEnemyMap = {
    //Does not spawn on the menu
    desert: ["Evil Desert Centipede","Queen Shiny Ant","Soldier Shiny Ant","Ruby Frog", "Termite Mound", "Queen Termite", "Soldier Termite", "Worker Termite", "Baby Termite", "Tick", "Whirlpool", "Grasshopper", "Stickbug",'Mushroom'],
    ocean: ["Shiny Plastic", "Lilypad", "Shiny Lilypad", "Carrion Spire", "Flowering Lilypad", "Poison Dart Frog", "Fly", "Firefly", "Whirlpool", "Dark Beetle", 'Pufferfish','Brisingida','Neuroflare', "Swampy Moth", "Dauber",'Gloomcrawler','Gnat','Gnat Swarm'],
    garden: ["Termite Mound", "Queen Termite", "Carrion Spire", "Soldier Termite", "Worker Termite", "Baby Termite", "Tick", "Soldier Shiny Ant", "Lilypad", "Shiny Lilypad", "Flowering Lilypad", "Poison Dart Frog", "Fly", "Firefly", "Grasshopper", "Stickbug", "Swampy Moth", "Dauber",'Gloomcrawler','Gnat','Gnat Swarm','Mushroom']
}

window.enemyStats = {};
let menuEnemies = [];
function initMenuEnemies(){
    for(let i = 0; i < 26+(6*maxRarityObtained/8); i++){
        spawnMenuEnemy();
        menuEnemies[menuEnemies.length-1].x = Math.random() * window.innerHeight;
    }
}
// initMenuEnemies();

let menuEnemyTimer = 400;
function renderMenuEnemies(){
    if(Math.random() < 0.02+(0.005*maxRarityObtained/8)*dt/16.67){
        spawnMenuEnemy();
    }
    // draw and simulate menu enemies
    const now = time;
    for(let i = 0; i < menuEnemies.length; i++){
        const e = menuEnemies[i];

        const mouseX = mouse.canvasX; const mouseY = mouse.canvasY;
        if(Math.sqrt((mouseX - e.render.x) ** 2 + (mouseY - e.render.y) ** 2) < e.radius * 2 + 100 && e.dead !== true){
            e.isHovered = true;
        } else {
            e.isHovered = false;
        }

        e.draw();

        e.sinTimer+=dt/16.67;
        e.angle += e.angleVel * 1 + Math.abs(Math.sin(now / 10000)) / 200*dt/16.67;
        e.x += e.xVel*dt/16.67;
        e.y += (e.yVel + Math.sin(e.sinTimer / e.maxSinTimer * 2 * Math.PI) * e.sinVel)*dt/16.67;
        if(e.x > canvas.w + e.radius * 2 + 100){
            // remove
            e.toRemove = true;
        }
    }
    menuEnemies = menuEnemies.filter(e => e.toRemove !== true);

    ctx.lastTransform7 = ctx.getTransform();
    // for(let i = 0; i < menuEnemies.length; i++){
    //     menuEnemies[i].drawStatsBox();
    // }
    ctx.setTransform(ctx.lastTransform7);
    delete ctx.lastTransform7;
}

function spawnMenuEnemy(){
    if(typeof biomeManager === 'undefined'){
        // setTimeout(() => {
        //     spawnMenuEnemy();
        // }, 200)
        return;
    }
    const currentBiomeName = biomeManager.getCurrentBiomeData().current;
    const biomeTypes = (rareBiomeEnemyMap[currentBiomeName] !== undefined && Math.random() < 0.01) ? rareBiomeEnemyMap[currentBiomeName] : biomeEnemyMap[currentBiomeName] ?? [];
    const radius = Math.random() < 0.0001 ? 360 : Math.sqrt(menuEnemyIncrementRadii[Math.floor(Math.random() * menuEnemyIncrementRadii.length)] * (Math.random() * 0.1 + 0.95)) * 8.7;
    menuEnemies.push(new Enemy({
        x: - radius * 3,
        y: - radius + Math.random() * (canvas.h + radius * 2),
        radius,
        hp: 100,
        maxHp: 100,
        id: Math.random(),
        type: biomeTypes[Math.floor(Math.random() * biomeTypes.length)],//enemyTypes[Math.floor(Math.random() * enemyTypes.length)],
        rarity: 0,
        angle: Math.random() * Math.PI * 2,
        angleVel: Math.random() * 0.04 - 0.04 / 2,
        xVel: Math.random() < 0.001 ? 20 : (5.8 + (Math.random() ** 3) * 1.5) / 2,// not using xv or yv so that i dont mess anything up
        yVel: (Math.random() > 0.5 ? 1 : -1) * (Math.random() ** 3) * 1,
        sinTimer: (212 + Math.random() * 46) * Math.random(),
        sinVel: Math.random() * .8,
        maxSinTimer: 212 + Math.random() * 46,
        toRenderUi: false,
        isMenuEnemy: true
    }))
}

function renderClickCounter({
	radius,
	timeAlive,
	totalDamage,
    x,
    y
}) {
	let fallTime = 500;
	if (timeAlive < 500 && totalDamage !== 0) {
		ctx.fillStyle = `hsl(${(window.clicks * 10) % 360} 100 50)`;
		ctx.strokeStyle = `hsl(${(window.clicks * 10) % 360} 100 20)`;
		ctx.lineWidth = 7;
		if (radius * 0.4 < 25) {
			ctx.font = `600 ${25}px 'Ubuntu'`;
		} else if (radius * 0.4 > 100) {
			ctx.font = `600 ${100}px 'Ubuntu'`;
		} else {
			ctx.font = `600 ${radius * 0.4}px 'Ubuntu'`;
		}
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.globalAlpha = 0.7 * (1 - timeAlive / fallTime);
		ctx.strokeText(totalDamage, x,y);
		ctx.fillText(totalDamage, x,y);
		ctx.globalAlpha = 1
		ctx.letterSpacing = "0px";
	}
};

requestAnimationFrame(render);

function renderDebug(){
	ctx.font = "900 15px 'Ubuntu'";
	ctx.textAlign = "right";
	ctx.textBaseline = "bottom";
	ctx.fillStyle = "white";
	ctx.strokeStyle = "black";
	ctx.lineWidth = 2;

    let debugText = '';
	
    if (window.state == 'game') {
        debugText = `Room: ${Object.keys(room.enemies).length} enemies, ${Object.keys(window.enemiesSent ?? {}).length} server enemies, ${Object.keys(room.flowers).length} flowers, ${Object.keys(room.petalContainers).length} petal containers`;
        ctx.strokeText(debugText, canvas.w - 2, canvas.h - 17);
        ctx.fillText(debugText, canvas.w - 2, canvas.h - 17);
    }

    debugText = `FPS: ${window.fps}, Client Version: ${ver ? ver : 'undetected'}, Server: ${servers[ws.url]}`;
	ctx.strokeText(debugText, canvas.w - 2, canvas.h - 2);
	ctx.fillText(debugText, canvas.w - 2, canvas.h - 2);
}