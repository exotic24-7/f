const savedSlotAmount = localStorage.getItem("savedSlotAmount") ?? 5;

let petalReloadData = {};
let petalHpData = {};
let bosses = [];
var totalBossHealth = 0;
let bossCount = 0;

let augmentedBiomes = ["trench"]

function darkenColor(hex, factor) {
	const num = parseInt(hex.slice(1), 16);
	let r = ((num >> 16) & 255) * factor;
	let g = ((num >> 8) & 255) * factor;
	let b = (num & 255) * factor;
	return `rgb(${r}, ${g}, ${b})`;
}

let inventory = new Inventory(savedSlotAmount);
let deadMenu = new DeadMenu();
let mobileControls = new MobileControls();
let draggingPetalContainer = null;
let waveBarY = 85;

let enemyBoxSize = 75;
let enemyBoxBoundSize = 80;
let enemyBoxOverlapSize = 20
let enemyBoxBaseX = 0;
let enemyBoxBaseY = 105

function waveLengthFunc(x) { // in seconds
	if (x < 10) {
		return x ** 0.2 * 18.9287 + 30;
	} else {
		return 60;
	}
}

// const chatMsgTime = 30 * 1000;
// const chatMsgFadeTime = chatMsgTime + 3 * 1000;
// function renderChatMessages(){
// 	const textHeight = 15;
// 	let currentHeight = canvas.h - 30;
// 	for(let i = window.chatMessages.length-1; i >= 0; i--){
// 		const text = window.chatMessages[i];

// 		ctx.font = `900 14px 'Ubuntu`;
// 		ctx.fillStyle = '#f0f0f0';
// 		ctx.strokeStyle = 'black'//"#1c8c54";
// 		ctx.lineWidth = 1.5;
// 		ctx.textAlign = 'left';
// 		ctx.textBaseline = 'bottom';

// 		const fadeTime = window.chatMsgFadeTimes[i];

// 		if(fadeTime > chatMsgTime){
// 			const alpha = (chatMsgFadeTime - fadeTime) / (chatMsgFadeTime - chatMsgTime);
// 			if(alpha < 0){
// 				window.chatMessages.splice(i,1);
// 				window.chatMsgFadeTimes.splice(i,1);
// 				continue;
// 			} else {
// 				ctx.globalAlpha = alpha;
// 			}
// 		}
// 		window.chatMsgFadeTimes[i] += dt;

// 		ctx.strokeText(text, 3, currentHeight);
// 		ctx.fillText(text, 3, currentHeight);

// 		ctx.globalAlpha = 1;
// 		currentHeight -= textHeight;
// 	}
// }

function renderConnectingText() {
	connectingTextSizeMult *= 1.003;
	if (connectingTextSizeMult > 4.2) {
		connectingTextSizeMult = 1;
	}
	ctx.font = `900 ${38 * connectingTextSizeMult}px 'Ubuntu`;
	ctx.fillStyle = '#f0f0f0';
	ctx.strokeStyle = 'black' //"#1c8c54";
	ctx.lineWidth = 6 * connectingTextSizeMult;
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.translate(canvas.w / 2, canvas.h / 2);
	const now = time;
	ctx.globalAlpha = 1;
	ctx.rotate(Math.sin(now / 300) * 0.18);
	ctx.strokeText("Connecting...", 0, 0);
	ctx.fillText("Connecting...", 0, 0);
	ctx.rotate(-Math.sin(now / 300) * 0.18);
	ctx.translate(-canvas.w / 2, -canvas.h / 2);

	// ctx.font = "600 64px Fredoka One";
	// ctx.fillStyle = '#f0f0f0';
	// ctx.strokeStyle = 'black'//"#1c8c54";
	// ctx.lineWidth = 8;
	// ctx.textAlign = 'center';
	// ctx.textBaseline = 'middle';
	// for(let i = 0; i < 5; i++){
	// 	const angle = Math.PI * 2 * i / 5 + time / 2200;
	// 	const pos = {
	// 		x: canvas.w / 2 + Math.cos(angle) * 3 * (120 * Math.sin(time / 1100)),
	// 		y: canvas.h / 2 + Math.sin(angle) * 3 * (120 * Math.sin(time / 1100))
	// 	}
	// 	ctx.translate(pos.x, pos.y);
	// 	const now = (time) / 10 + angle * 100;
	// 	ctx.rotate(Math.sin(now / 300) * 0.18);
	// 	ctx.strokeText("Connecting...", 0,0);
	// 	ctx.fillText("Connecting...", 0,0);
	// 	ctx.rotate(-Math.sin(now / 300) * 0.18);
	// 	ctx.translate(-pos.x, -pos.y);
	// }
}

let disconnectedText;

function renderDisconnectedText() {
	ctx.font = '900 46px Ubuntu';
	if (disconnectedText === undefined) {
		disconnectedText = {
			x: Math.random() * canvas.w,
			y: Math.random() * canvas.h,
		};
		const angle = Math.random() * Math.PI * 2;
		disconnectedText.xv = Math.cos(angle) * 3 * 165 / 60;
		disconnectedText.yv = Math.sin(angle) * 3 * 165 / 60;
		const measurements = ctx.measureText('Disconnected');
		disconnectedText.w = measurements.width;
		disconnectedText.h = measurements.actualBoundingBoxAscent + measurements.actualBoundingBoxDescent;
	}
	disconnectedText.x += disconnectedText.xv;
	disconnectedText.y += disconnectedText.yv;
	if (disconnectedText.x < 0) {
		disconnectedText.x = 0;
		disconnectedText.xv *= -1;
	} else if (disconnectedText.x + disconnectedText.w > canvas.w) {
		disconnectedText.x = canvas.w - disconnectedText.w;
		disconnectedText.xv *= -1;
	}
	if (disconnectedText.y < 0) {
		disconnectedText.y = 0;
		disconnectedText.yv *= -1;
	} else if (disconnectedText.y + disconnectedText.h > canvas.h) {
		disconnectedText.y = canvas.h - disconnectedText.h;
		disconnectedText.yv *= -1;
	}

	ctx.fillStyle = '#f0f0f0';
	ctx.strokeStyle = 'black' //"#1c8c54";
	ctx.lineWidth = 5;

	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.strokeText("Disconnected", disconnectedText.x, disconnectedText.y);
	ctx.fillText("Disconnected", disconnectedText.x, disconnectedText.y);
	
}

window.camera = {
	x: 'pass',
	y: 0
}; //the first parameter being pass means that the culling function will automatically allow everything to be drawn
// let dandelionMissileEnemies = [];
let connectingTextSizeMult = 1;




let renderGame = (dt) => {
	if ((window.selfId === null || room.flowers[window.selfId] === undefined) && window.isDead !== true && window.spectating !== true) {
		if (window.state === 'disconnected' && typeof biomeManager !== 'undefined') {
			const {
				ratio,
				last,
				current,
				direction
			} = biomeManager.getCurrentBiomeData();

				ctx.fillStyle = Colors.biomes[current].background;
				ctx.strokeStyle = Colors.biomes[current].grid;


		} else if (room && typeof Colors !== 'undefined') {
			if (!room.biome) room.biome = '1v1'
			ctx.fillStyle = Colors.biomes[room.biome].background;
			ctx.strokeStyle = Colors.biomes[room.biome].grid;
		} else {
			ctx.fillStyle = "white";
			ctx.strokeStyle = "#1c8c54"
		}
		ctx.fillRect(0, 0, canvas.w, canvas.h);

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

		renderMenuEnemies();

		// renderChatMessages();

		renderConnectingText();
		return;
	} else {
		menuEnemies = [];
		connectingTextSizeMult = 1;
	}

	ctx.fillStyle = Colors.biomes[room.biome].background;

	
		// Darken over time if augmented biome
		if (
			room && 
			room.waveTimer != undefined && 
			augmentedBiomes.includes(room.biome)
		) {
			const darkness = Math.min(room.waveTimer / 36000, 1);
			const darkenFactor = 1 - 0.8 * darkness;
			ctx.fillStyle = darkenColor(ctx.fillStyle, darkenFactor);
			ctx.strokeStyle = darkenColor(ctx.strokeStyle, darkenFactor);
		}

	ctx.fillRect(0, 0, canvas.w, canvas.h);

	const me = (window.isDead || window.selfId === null || room.flowers[window.selfId] === undefined || window.spectating == true) ? (() => {
		let closestFlower = null;
		let lowestId = 1E99;
		for (let id in room.flowers) {
			if (id < lowestId) {
				lowestId = id;
				closestFlower = room.flowers[id];
			}
		}
		return closestFlower === null ? {
			render: {
				headX: 0,
				headY: 0,
				x: 0,
				y: 0
			}
		} : closestFlower;
	})() : room.flowers[window.selfId];

	if (window.isDead !== true && window.spectating == false) {
		me.updateInterpolate();
	} else {
		petalReloadData = {};
		petalHpData = {};
	}

	// wtf we already do this in input.js??
	// if (time > lastSentInput + minimumInputTime){
	// 	if (!arrayEquals(latestInput, previousInput)){
	// 		send(latestInput);
	// 		previousInput = window.structuredClone(latestInput);
	// 		lastSentInput = time;// window.structuredclone
	// 	}
	// }

	renderFov = interpolate(renderFov, fov, 0.04);

	//window.camera = {x: (room.flowers[window.selfId] ?? {render: {headX: 'pass'}}).render.headX, y: (room.flowers[window.selfId] ?? {render: {headY: 0}}).render.headY};
	window.camera = {
		x: me.render.headX,
		y: me.render.headY - (window.isDead === true ? 24 / renderFov : 0)
	}

	ctx.lineWidth = canvas.w * 2 + canvas.h * 2;
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.globalAlpha = 0.08;
	ctx.arc(canvas.w / 2 - me.render.headX * renderFov, canvas.h / 2 - me.render.headY * renderFov, room.radius * renderFov + ctx.lineWidth / 2, 0, Math.PI * 2);
	ctx.stroke();
	ctx.closePath();

	ctx.globalAlpha = 1;

	if (window.noGrid !== true) {
		const tileOffset = {
			x: (-me.render.headX + canvas.w / 2 / renderFov) % tileSize,
			y: (-me.render.headY + canvas.h / 2 / renderFov) % tileSize
		};
		ctx.strokeStyle = Colors.biomes[room.biome].grid;

				// Darken over time if augmented biome
		if (
			room && 
			room.waveTimer != undefined && 
			augmentedBiomes.includes(room.biome)
		) {
			const darkness = Math.min(room.waveTimer / 36000, 1);
			const darkenFactor = 1 - 0.8 * darkness;
			ctx.fillStyle = darkenColor(ctx.fillStyle, darkenFactor);
			ctx.strokeStyle = darkenColor(ctx.strokeStyle, darkenFactor);
		}

		ctx.lineWidth = renderFov;
		ctx.globalAlpha = 1;
		for (let x = (tileOffset.x - ctx.lineWidth) * renderFov; x <= canvas.w + ctx.lineWidth; x += tileSize * renderFov) {
			ctx.beginPath();
			ctx.moveTo(x, 0);
			ctx.lineTo(x, canvas.h);
			ctx.stroke();
			ctx.closePath();
		}

		for (let y = (tileOffset.y - ctx.lineWidth) * renderFov; y <= canvas.h + ctx.lineWidth; y += tileSize * renderFov) {
			ctx.beginPath();
			ctx.moveTo(0, y);
			ctx.lineTo(canvas.w, y);
			ctx.stroke();
			ctx.closePath();
		}
	}

	ctx.globalAlpha = 1;

	// const camera = {x: canvas.w/2-me.render.headX, y: canvas.h/2-me.render.headY};

	if (window.camera.x !== 'pass') {
		ctx.translate(canvas.w / 2 - camera.x * renderFov, canvas.h / 2 - camera.y * renderFov);
	}
	ctx.scale(renderFov, renderFov);

	if (biomeManager !== undefined && biomeManager.getCurrentBiome() === '1v1' && window.inMainPvpRoom !== true) {
		if (Object.keys(room.flowers).length >= 2) {
			window.canWinPvp = true;
		}
		else if (Object.keys(room.flowers).length === 1 && window.isDead !== true && window.canWinPvp) {
			window.hasWonPvp = true;
			delete window.canWinPvp;
		}
	}
	if (window.hasWonPvp === true) {
		ctx.fillStyle = 'white';
		ctx.strokeStyle = 'black';
		ctx.globalAlpha = 0.3;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.lineWidth = room.radius * 1.55 / 20;
		ctx.font = `600 ${room.radius * 1.55}px Ubuntu`;
		const metrics = ctx.measureText('W');
		const yOff = (metrics.actualBoundingBoxDescent - metrics.actualBoundingBoxAscent) / 2;
		ctx.fillText('W', 0, -yOff);
		ctx.strokeText('W', 0, -yOff);
		ctx.globalAlpha = 1;
	}

	// if(window.arenaGradient === undefined){
	//     window.arenaGradient = ctx.createRadialGradient(0, 0, room.radius- 20, 0, 0, room.radius+20);

	//     // Add three color stops
	//     window.arenaGradient.addColorStop(0, "rgba(0,0,0,0)");
	//     window.arenaGradient.addColorStop(1, "rgba(0,0,0,.22)");
	// }

	// ctx.fillStyle = window.arenaGradient;

	// ctx.fillRect(-(canvas.w/2-me.x), -(canvas.h/2-me.y), canvas.w, canvas.h);


	// ctx.font = "600 124px Fredoka One";
	// ctx.fillStyle = '#f0f0f0';
	// ctx.strokeStyle = 'black'//"#1c8c54";
	// ctx.lineWidth = 8;
	// ctx.textAlign = 'center';
	// ctx.textBaseline = 'middle';
	// ctx.strokeText("Game is being rendered!", canvas.w / 2 + Math.sin(time / 1000) * 100, canvas.h / 2);
	// ctx.fillText("Game is being rendered!", canvas.w / 2+ Math.sin(time / 1000) * 100, canvas.h / 2);

	// drawing all the entities
	for (let id in room.petalContainers) {
		room.petalContainers[id].draw();
	}

	// Draw LocalServer enemies when in singleplayer
	if (window.LocalServer && LocalServer.state === 'game') {
		for (const e of LocalServer.enemies) {
			try { if (e && !e.dead && typeof e.draw === 'function') e.draw(); } catch (err) {}
		}
	}

	for (let id in room.flowers) {
		room.flowers[id].drawProjectiles();
	}
	for (let id in room.flowers) {
		room.flowers[id].drawPets();
	}
	// for(let i = 0; i < dandelionMissileEnemies.length; i++){
	// 	dandelionMissileEnemies[i].draw();
	// }
	// dandelionMissileEnemies = [];


	for (let id in room.enemies) {
		// if(room.enemies[id].type === "DandelionMissile"){
		// 	dandelionMissileEnemies.push(room.enemies[id]);
		// 	continue;
		// }
		room.enemies[id].draw();
	}

	for (let id in room.flowers) {
		room.flowers[id].draw();
	}


	if(window.toRenderDebug === true){
		for(let id in room.flowers){
			if(room.flowers[id].dead === true)continue;
			renderHitbox({x: room.flowers[id].x, y: room.flowers[id].y, radius: room.flowers[id].radius, angle: room.flowers[id].angle, rarity: 36})

			for(let i = 0; i < room.flowers[id].petals.length; i++){
				if(room.flowers[id].petals[i].dead === true)continue;
				renderHitbox(room.flowers[id].petals[i]);
			}

			for(let i = 0; i < room.flowers[id].projectiles.length; i++){
				if(room.flowers[id].projectiles[i].dead === true)continue;
				renderHitbox(room.flowers[id].projectiles[i]);
			}

			for(let i = 0; i < room.flowers[id].pets.length; i++){
				if(room.flowers[id].pets[i].dead === true)continue;
				renderHitbox(room.flowers[id].pets[i]);
			}
		}
		for(let id in room.enemies){
			if(room.enemies[id].dead === true)continue;
			renderHitbox(room.enemies[id]);
		}
	}

	ctx.scale(1 / renderFov, 1 / renderFov)
	if (window.camera.x !== 'pass') {
		ctx.translate(-(canvas.w / 2 - camera.x * renderFov), -(canvas.h / 2 - camera.y * renderFov));
	}
	ctx.globalAlpha = 1;

	if (room.globalWeb > 0) {
		ctx.beginPath()
		ctx.globalAlpha *= 0.25 * (room.globalWeb/1800)
		ctx.fillStyle = "#2200ff"
		ctx.rect(0, 0, canvas.w, canvas.h)
		ctx.fill()
		ctx.globalAlpha /= 0.25 * (room.globalWeb/1800)
		ctx.closePath();
	}
		if (
		room && 
		room.waveTimer != undefined && 
		augmentedBiomes.includes(room.biome)
	) {
		let savedAlpha = ctx.globalAlpha;
		const darkness = Math.min(room.waveTimer / 36000, 1);
		ctx.globalAlpha = 0.4 * darkness;
		ctx.fillStyle = "#000000";
		ctx.rect(0, 0, canvas.w, canvas.h);
		ctx.fill();
		ctx.globalAlpha = savedAlpha;
	}

	ctx.translate(canvas.w / 2, 0);
	// if(window.tutorial === true){
	// 	ctx.translate(0, -canvas.h/11.2);
	// }
	for (let i = 0; i < room.enemyBoxes.length; i++) {
		let enemyBox = room.enemyBoxes[i];
		enemyBox.update();

		if (!window.hiEnemyBoxRarities) window.hiEnemyBoxRarities = {}
		if (!window.hiEnemyBoxRarities[enemyBox.type]) window.hiEnemyBoxRarities[enemyBox.type] = enemyBox.rarity
		window.hiEnemyBoxRarities[enemyBox.type] = Math.max(window.hiEnemyBoxRarities[enemyBox.type], enemyBox.rarity)

		if (enemyBox.isBoss) {
			ctx.strokeStyle = `hsl(${(time / 10) % 360}, 50%, 40%)`
		}
		else {
			ctx.strokeStyle = Colors.rarities[enemyBox.rarity].border;
			if (window.hqp == true) if (Colors.rarities[enemyBox.rarity].fancy !== undefined) ctx.strokeStyle = Colors.rarities[enemyBox.rarity].fancy.border;
		}

		if (enemyBox.isBoss) {
			ctx.fillStyle = `hsl(${(time / 10) % 360}, 30%, 60%)`
		}
		else {
			ctx.fillStyle = Colors.rarities[enemyBox.rarity].color;
			
			if (staticGradients[enemyBox.rarity+"_"]) ctx.fillStyle = staticGradients[enemyBox.rarity+"_"];

			if (window.hqp == true) if (Colors.rarities[enemyBox.rarity].fancy !== undefined && window.hqp == true) {
				let gradientFill;
				if (enemyBox.rarity <= 23){
					gradientFill = ctx.createLinearGradient(enemyBox.x - enemyBox.w / 2, enemyBox.y, enemyBox.x + enemyBox.w / 2, enemyBox.y + enemyBox.h);
				}
				else if (enemyBox.rarity <= 25){
					gradientFill = ctx.createLinearGradient(enemyBox.x + enemyBox.w / 2, enemyBox.y + enemyBox.h, enemyBox.x - enemyBox.w / 2, enemyBox.y);
				}
				else if (enemyBox.rarity <= 29){
					gradientFill = ctx.createRadialGradient(enemyBox.x, enemyBox.y + enemyBox.h / 2, 0, enemyBox.x, enemyBox.y + enemyBox.h / 2, enemyBox.w / 2);
				}
				else{
					gradientFill = ctx.createRadialGradient(enemyBox.x, enemyBox.y + enemyBox.h / 2, enemyBox.w / 2, enemyBox.x, enemyBox.y + enemyBox.h / 2, 0);
				}
				
				createFancyGradient(gradientFill, enemyBox.rarity);
				//ctx.fillStyle = `hsl(${Math.cos(Date.now()/400)*35 + 285}, 100%, 15%)`
				ctx.fillStyle = gradientFill;

			}
		}

		let coef = 0.92;
		let miniCoef = (1 - coef) / 2;

		ctx.translate(enemyBox.x - enemyBox.w / 2 + enemyBox.w * miniCoef, enemyBox.y + enemyBox.h * miniCoef)

		ctx.beginPath()
		ctx.roundRect(0, 0, enemyBox.w * coef, enemyBox.h * coef, 2.5);
		ctx.fill()
		ctx.closePath()

		ctx.translate(-(enemyBox.x - enemyBox.w / 2 + enemyBox.w * miniCoef), -(enemyBox.y + enemyBox.h * miniCoef))

		if (window.hqp == true && !enemyBox.isBoss) if (Colors.rarities[enemyBox.rarity].fancy !== undefined && Colors.rarities[enemyBox.rarity].fancy.stars !== undefined && window.hqp == true) {
			ctx.save();
			ctx.translate(enemyBox.x, enemyBox.y + enemyBox.h / 2);
			//scale to size of enemyBox (originally 50, now enemyBox.w)
			ctx.scale(enemyBox.w / 50, enemyBox.w / 50);
			//shiny stars & stuff
			if (!enemyBox.stars) {
				enemyBox.stars = [];
				for (let starnum = 0; starnum < Colors.rarities[enemyBox.rarity].fancy.stars; starnum++) {
					enemyBox.stars.push({ x: Math.random() * 50 - 25, y: Math.random() * 50 - 25 })
				}
			}
			ctx.fillStyle = "#ffffff";
			for (let star of enemyBox.stars) {
				star.x += 0.1;
				star.y += 0.1;
				if (star.x > 30 || star.y > 30) {
					star.x = Math.random() * 800 - 20 - 30;
					star.y = -30;

				}

				if (star.x < -30 || star.x > 30 || star.y < -30 || star.y > 30) {
					//don't draw;
					continue;
				}
				ctx.beginPath();

				var grad = ctx.createRadialGradient(star.x, star.y, 15, star.x, star.y, 0);
				grad.addColorStop(0, "transparent");
				grad.addColorStop(0.8, `rgba(255,255,255,${(Math.cos(Date.now() / 600 + star.x / 30 + star.y / 30) + 1) * 0.8})`);
				grad.addColorStop(1, "white");

				ctx.fillStyle = grad;
				ctx.globalAlpha = 0.3;

				ctx.fillRect(-20.5, -20.5, 41, 41);
				ctx.globalAlpha = 1;
				if (star.x < 20.5 && star.x > -20.5 && star.y < 20.5 && star.y > -20.5) {

					ctx.fillStyle = "#fff";

					ctx.arc(star.x, star.y, 1, 0, 2 * Math.PI);
					ctx.fill();
				}
				ctx.closePath();
			}
			ctx.restore();
		}

		if (!cachedImages.enemies[`${enemyBox.type}`]) {
			const pc = new PetalContainer({}, {
				x: 0,
				y: 0,
				w: 1,
				h: 1
			})
			pc.type = enemyBox.type
			pc.generateEnemyImage()
		}

		ctx.beginPath();
		ctx.roundRect(enemyBox.x - enemyBox.w / 2 + enemyBox.w * miniCoef, enemyBox.y + enemyBox.h * miniCoef, enemyBox.w * coef, enemyBox.h * coef, 2.5);
		ctx.lineWidth = 5.25;
		ctx.stroke();
		ctx.closePath();

		if (window.hqp == true) {
			ctx.save()
			ctx.beginPath()
			ctx.globalAlpha = .5
			ctx.roundRect(enemyBox.x - enemyBox.w / 2 + enemyBox.w * miniCoef - 2.625, enemyBox.y + enemyBox.h * miniCoef - 2.625, enemyBox.w * coef + 5.25, enemyBox.h * coef + 5.25, 5)
			ctx.fill()
			ctx.closePath()
			ctx.restore()
		}

		if (!enemyBox.image) enemyBox.image = cachedImages.enemies[`${enemyBox.type}`];

		if (enemyBox.image) {
			if (!enemyBox.imageScale) enemyBox.imageScale = enemyBox.w * (82.5 / enemyBox.w) / (enemyBox.image.width * 1.15);

			let t = ctx.getTransform();

			ctx.translate(enemyBox.x, enemyBox.y + enemyBox.w / 2);
			ctx.scale(enemyBox.imageScale, enemyBox.imageScale);
			ctx.drawImage(enemyBox.image, -enemyBox.image.width / 2, -enemyBox.image.width / 2);
			
			ctx.setTransform(t);
		}

		if (enemyBox.isBoss) {
			ctx.strokeStyle = `hsl(${(time / 10) % 360}, 50%, 40%)`
		}
		else {
			ctx.strokeStyle = Colors.rarities[enemyBox.rarity].border;
			if (Colors.rarities[enemyBox.rarity].fancy !== undefined) ctx.strokeStyle = Colors.rarities[enemyBox.rarity].fancy.border;
		}

		if (enemyBox.amount > 1) {
			if (time - enemyBox.lastAmountChangedTime < 100) {
				ctx.globalAlpha = smoothstep((time - enemyBox.lastAmountChangedTime) / 100)
			}
			ctx.lineWidth = 3;
			ctx.font = "900 16px 'Ubuntu'";
			ctx.textAlign = "right";
			ctx.textBaseline = "middle";
			ctx.fillStyle = "white";
			ctx.strokeStyle = "black";
			ctx.translate(enemyBox.x + enemyBox.w / 2 - 7, enemyBox.y + 18);
			ctx.rotate(0.34);
			ctx.strokeText("x" + enemyBox.amount, 0, 0)
			ctx.fillText("x" + enemyBox.amount, 0, 0)
			ctx.rotate(-0.34);
			ctx.translate(-(enemyBox.x + enemyBox.w / 2 - 7), -(enemyBox.y + 18))
			ctx.globalAlpha = 1;
		}

		if (enemyBox.delete == true) {
			let typeStillExists = false;
			for (let j = 0; j < room.enemyBoxes.length; j++) {
				let otherBox = room.enemyBoxes[j];
				if (otherBox.type == enemyBox.type && otherBox.rarity != enemyBox.rarity) {
					typeStillExists = true;
				}
			}
			if (typeStillExists) {
				for (let j = 0; j < room.enemyBoxes.length; j++) {
					let otherBox = room.enemyBoxes[j];
					if (otherBox.type == enemyBox.type) {
						if (otherBox.rarity > enemyBox.rarity) {
							otherBox.targetY -= enemyBoxOverlapSize;
						}
					}
				}
			} else {
				alignEnemyBoxes(enemyBox);
			}
			window.hiEnemyBoxRarities = {};
		}
	}

	ctx.translate(-canvas.w / 2, 0);

	for (let enemyBox of room.enemyBoxes) {
		if (enemyBox.isBoss) continue;
		//Draw stats if hovering over enemy box
		const mouseX = mouse.x * canvas.w / window.innerWidth;
		const mouseY = mouse.y * canvas.h / window.innerHeight;

		//ctx.translate(enemyBox.x, enemyBox.y + enemyBox.w / 2)

		if (mouseInBox({
			x: mouseX,
			y: mouseY
		}, {
			x: enemyBox.x - enemyBox.w / 2 + canvas.w / 2,
			y: enemyBox.y,
			w: enemyBox.w,
			h: enemyBox.rarity !== window.hiEnemyBoxRarities[enemyBox.type] ? enemyBox.w / 5 : enemyBox.w
		})) {
			if (!enemyBox.ec) {
				enemyBox.ec = mobGallery.generateEnemyPc(
					enemyBox.type,
					enemyBox.rarity,
					1
				)
			}
			if (!Stats.enemies[enemyBox.type]) {
				calculateStats()
			} else {
				enemyBox.ec.isHovered = true
				//if (enemyBox.rarity === window.hiEnemyBoxRarities[enemyBox.type]) ctx.translate(0, 3*enemyBox.w/5)
				enemyBox.ec.drawStatsBox(true, true, canvas.w / 2 + enemyBox.x, (enemyBox.y + enemyBox.w / 2) + 3*enemyBox.w/5)
				//if (enemyBox.rarity === window.hiEnemyBoxRarities[enemyBox.type]) ctx.translate(0, -3*enemyBox.w/5)
			}
		}

		//ctx.translate(-enemyBox.x, -(enemyBox.y + enemyBox.w / 2))
	}

	// if(window.tutorial === true){
	// 	ctx.translate(0, canvas.h/11.2);
	// }
	room.enemyBoxes = room.enemyBoxes.filter((e) => !e.delete)

	//if(window.tutorial !== true){
	//room.waveTimer ++;


	let text = (biomeManager !== undefined && biomeManager.getCurrentBiome() === '1v1') ? "Fight!" : "Wave " + room.wave;
	
	if (augmentedBiomes.includes(room.biome)){
		let depth = room.waveTimer / (60 * 30);

		text += " • Depth: " + formatAmountHighPrecision(depth * 1000) + "m";
		ctx.lineWidth = 24;
		ctx.lineCap = "round";
		ctx.strokeStyle = "black";
		ctx.beginPath();
		ctx.lineTo(canvas.w / 2 - 140, waveBarY);
		ctx.lineTo(canvas.w / 2 + 140, waveBarY);
		ctx.stroke();
	}
	else if (bosses.length > 0) {
		let health = 0;
		for (let i of bosses) {
			if (room.enemies[i.id]) {
				health += Math.max(Math.min((room.enemies[i.id].render.hp), room.enemies[i.id].maxHp), 0);
			} else {
				bosses = bosses.filter((id) => id.id !== i.id);
			}
		}

		let firstDivide = 1;
		let secondDivide = 1;
		let end = "";

		const thresholds = [
			{ limit: 1e3, first: 1, second: 1, suffix: "" },
			{ limit: 1e4, first: 10, second: 100, suffix: "k" },
			{ limit: 1e5, first: 100, second: 10, suffix: "k" },
			{ limit: 1e6, first: 1000, second: 1, suffix: "k" },
			{ limit: 1e7, first: 10000, second: 100, suffix: "m" },
			{ limit: 1e8, first: 100000, second: 10, suffix: "m" },
			{ limit: 1e9, first: 1000000, second: 1, suffix: "m" },
			{ limit: 1e10, first: 10000000, second: 100, suffix: "b" },
			{ limit: 1e11, first: 100000000, second: 10, suffix: "b" },
			{ limit: 1e12, first: 1000000000, second: 1, suffix: "b" },
			{ limit: 1e13, first: 1e10, second: 100, suffix: "t" },
			{ limit: 1e14, first: 1e11, second: 10, suffix: "t" },
			{ limit: 1e15, first: 1e12, second: 1, suffix: "t" },
			{ limit: 1e16, first: 1e13, second: 100, suffix: "Qd" },
			{ limit: 1e17, first: 1e14, second: 10, suffix: "Qd" },
			{ limit: 1e18, first: 1e15, second: 1, suffix: "Qd" },
			{ limit: 1e19, first: 1e16, second: 100, suffix: "Qt" },
			{ limit: 1e20, first: 1e17, second: 10, suffix: "Qt" },
			{ limit: 1e21, first: 1e18, second: 1, suffix: "Qt" },

		];

		for (const t of thresholds) {
			if (totalBossHealth < t.limit) {
				firstDivide = t.first;
				secondDivide = t.second;
				end = t.suffix;
				break;
			}
		}

		text += " • " + Math.round(health / firstDivide) / secondDivide + end + "/" + Math.round(totalBossHealth / firstDivide) / secondDivide + end;
		ctx.lineWidth = 24;
		ctx.lineCap = "round";
		ctx.strokeStyle = "black";
		ctx.beginPath();
		ctx.lineTo(canvas.w / 2 - 140, waveBarY);
		ctx.lineTo(canvas.w / 2 + 140, waveBarY);
		ctx.stroke();
		if (health > 0) {
			ctx.lineWidth = 18;
			ctx.lineCap = "round";
			ctx.strokeStyle = "#75dd34";
			ctx.beginPath();
			ctx.lineTo(canvas.w / 2 - 140, waveBarY);
			ctx.lineTo(canvas.w / 2 - 140 + 280 * (health / totalBossHealth), waveBarY);
			ctx.stroke();
		}
	} else {
		let maxSpawnTime = waveLengthFunc(room.wave) * 30;
		if (room.waveTimer < maxSpawnTime) {
			ctx.lineWidth = 24;
			ctx.lineCap = "round";
			ctx.strokeStyle = "black";
			ctx.beginPath();
			ctx.lineTo(canvas.w / 2 - 140, waveBarY);
			ctx.lineTo(canvas.w / 2 + 140, waveBarY);
			ctx.stroke();
			ctx.lineCap = "round";
			ctx.lineWidth = 18 * Math.min(1, (room.waveTimer / maxSpawnTime) * 10);
			if (biomeManager === undefined || biomeManager.getCurrentBiome() !== '1v1') {
				if (room.shinyWave) {
					ctx.strokeStyle = `hsl(${(Date.now() / 5) % 360}, 50%, 50%)`;
				}
				else {
					ctx.strokeStyle = blendColor(Colors.biomes[room.biome].background, "#ffffff", 0.4);
				}
				ctx.beginPath();
				ctx.lineTo(canvas.w / 2 - 140, waveBarY);
				ctx.lineTo(canvas.w / 2 - 140 + 280 * (room.waveTimer / maxSpawnTime), waveBarY);
				ctx.stroke();
			}
		} else {
			ctx.lineWidth = 24;
			ctx.lineCap = "round";
			ctx.strokeStyle = "black";
			ctx.beginPath();
			ctx.lineTo(canvas.w / 2 - 140, waveBarY);
			ctx.lineTo(canvas.w / 2 + 140, waveBarY);
			ctx.stroke();
			if (biomeManager === undefined || biomeManager.getCurrentBiome() !== '1v1') {
				ctx.lineWidth = 18;
				ctx.strokeStyle = blendColor(Colors.biomes[room.biome].background, "#ffffff", 0.4);
				ctx.beginPath();
				ctx.lineTo(canvas.w / 2 - 140, waveBarY);
				ctx.lineTo(canvas.w / 2 + 140, waveBarY);
				ctx.stroke();
				ctx.lineWidth = 15.5 * Math.min(1, ((room.waveTimer - maxSpawnTime) / maxSpawnTime) * 10);
				ctx.globalAlpha = Math.min((room.waveTimer / maxSpawnTime) / 1.5, 1);
				ctx.strokeStyle = "red";
				ctx.beginPath();
				ctx.lineTo(canvas.w / 2 - 140, waveBarY);
				ctx.lineTo(canvas.w / 2 - 140 + 280 * Math.min(1, ((room.waveTimer - maxSpawnTime) / (maxSpawnTime * 2))), waveBarY);
				ctx.stroke();
			}
			ctx.globalAlpha = 1;
		}
	}

	let displayMania = false;
	if (window.mania) {
		if (room.tick < window.mania.timeLimit) {
			displayMania = true;
		}
	}

	if (displayMania) {
		if (window.mania.passed == true) {
			ctx.letterSpacing = "1px";
			ctx.strokeStyle = "black";
			ctx.fillStyle = `#03fc49`
			ctx.lineWidth = 6;
			ctx.font = "900 37px 'Ubuntu'";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.strokeText("Mania • " + window.mania.message + " • Passed!", canvas.w / 2, 50)
			ctx.fillText("Mania • " + window.mania.message + " • Passed!", canvas.w / 2, 50)
		}
		else {
			ctx.letterSpacing = "1px";
			ctx.strokeStyle = "black";
			ctx.fillStyle = `#ed5c81`
			ctx.lineWidth = 6;
			ctx.font = "900 37px 'Ubuntu'";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.strokeText("Mania • " + window.mania.message + " • " + Math.round((window.mania.timeLimit - room.tick) / 3) / 10 + "s", canvas.w / 2, 50)
			ctx.fillText("Mania • " + window.mania.message + " • " + Math.round((window.mania.timeLimit - room.tick) / 3) / 10 + "s", canvas.w / 2, 50)
		}
	}
	else if (window.killTime){
		if (room.tick < window.killTime.timeLimit){
			ctx.letterSpacing = "1px";
			ctx.strokeStyle = "black";
			ctx.fillStyle = `#e3365f`
			ctx.lineWidth = 6;
			ctx.font = "900 37px 'Ubuntu'";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.strokeText("Kill the boss within " + Math.floor((window.killTime.timeLimit - room.tick)/3)/10 + " seconds or die!", canvas.w / 2, 50)
			ctx.fillText("Kill the boss within " + Math.floor((window.killTime.timeLimit - room.tick)/3)/10 + " seconds or die!", canvas.w / 2, 50)
		}
	}
	else {
		ctx.letterSpacing = "1px";
		ctx.strokeStyle = "black";
		ctx.fillStyle = "white";
		ctx.lineWidth = 6;
		ctx.font = "900 37px 'Ubuntu'";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.strokeText(room.biomeDisplay, canvas.w / 2, 50)
		ctx.fillText(room.biomeDisplay, canvas.w / 2, 50)
	}

	if (room.shinyWave) {
		ctx.fillStyle = `hsl(${(Date.now() / 5) % 360}, 60%, 80%)`;
		if (room.shinyWave > 1){
			text = "Super ".repeat(room.shinyWave-1) + "Lucky " + text;
		}
		else{
			text = "Lucky " + text;
		}
	}
	else {
		ctx.fillStyle = "white";
	}
	ctx.lineWidth = 3;
	ctx.letterSpacing = "0.5px";
	ctx.font = "900 17px 'Ubuntu'";
	ctx.textAlign = "center";
	ctx.textBaseline = "top";
	ctx.strokeText(text, canvas.w / 2, waveBarY - 8)
	ctx.fillText(text, canvas.w / 2, waveBarY - 8)
	ctx.letterSpacing = "0px";
	ctx.textBaseline = "middle";

	let globalIndicationY = 100;
	let globalIndicationX = 65;

	let self = room.flowers[window.selfId];
	let indicationY = globalIndicationY;

	if (!self && spectating) indicationY -= 90

	for (let id in room.squadMembers) {
		let flower;
		if (room.flowers[id] && !room.flowers[id].dead) {
			flower = room.flowers[id];
		} else {

			//dead flower
			flower = room.squadMembers[id];
			flower.render = { hp: 0, shield: 0, beforeStreakHp: 0 };
			flower.maxHp = 100;
			flower.drawFlower = Flower.drawDeadFlower;
		}

		if (id == window.selfId && spectating !== true) {
			let indicationSize = 35;
			renderHpBar({
				x: globalIndicationX + indicationSize * 4,
				y: globalIndicationY - indicationSize * 3.6,
				radius: indicationSize * 1.8,
				hp: flower.render.hp,
				maxHp: flower.maxHp,
				shield: flower.render.shield,
				beforeStreakHp: flower.render.beforeStreakHp,
				givenAlpha: 1
			}, flower);
			flower.drawFlower(globalIndicationX, globalIndicationY, indicationSize, flower.character);
			ctx.font = `900 ${indicationSize * 0.75}px Ubuntu`;
			ctx.strokeStyle = "black";
			ctx.fillStyle = "white";
			ctx.textBaseline = "middle";
			ctx.textAlign = "center";
			ctx.strokeText(flower.name, globalIndicationX + indicationSize * 4, globalIndicationY);
			ctx.fillText(flower.name, globalIndicationX + indicationSize * 4, globalIndicationY);

			ctx.font = `900 ${indicationSize * 0.5}px Ubuntu`;
			ctx.strokeStyle = "black";
			ctx.fillStyle = "#aaaaaa";
			ctx.textBaseline = "middle";
			ctx.textAlign = "left";
			ctx.lineWidth = 3;
			ctx.strokeText(flower.username, globalIndicationX + indicationSize, globalIndicationY + indicationSize * 0.75);
			ctx.fillText(flower.username, globalIndicationX + indicationSize, globalIndicationY + indicationSize * 0.75);

			if (flower.mana) {
				let manaCount = 0;
				let i = 0;
				for (let type in (flower.mana)) {
					if (flower.mana[type] > 0) manaCount ++
				}

				for (let type in (flower.mana)) {
					if (flower.mana[type] > 0) {
						let size = (indicationSize * 6.5 - indicationSize * 0.5 * manaCount) / manaCount

						ctx.lineWidth = indicationSize * 0.35
						ctx.strokeStyle = "#333333"

						ctx.beginPath();
						ctx.moveTo(globalIndicationX + indicationSize + i * size + indicationSize * 0.5 * i, globalIndicationY - indicationSize * 0.75)
						ctx.lineTo(globalIndicationX + indicationSize + (i + 1) * size + indicationSize * 0.5 * i, globalIndicationY - indicationSize * 0.75)
						ctx.stroke();
						ctx.closePath();

						ctx.lineWidth = indicationSize * 0.25
						ctx.strokeStyle = Colors.mana[type]

						ctx.beginPath();
						ctx.moveTo(globalIndicationX + indicationSize + i * size + indicationSize * 0.5 * i, globalIndicationY - indicationSize * 0.75)
						ctx.lineTo(globalIndicationX + indicationSize + (i + (flower.mana[type] / flower.maxMana[type])) * size + indicationSize * 0.5 * i, globalIndicationY - indicationSize * 0.75)
						ctx.stroke();
						ctx.closePath();
						i++
					}
				}
			}
		} else if (room.biome !== '1v1')  {
			let indicationSize = 30;
			indicationY += 90;
			renderHpBar({
				x: globalIndicationX + indicationSize * 4,
				y: indicationY - indicationSize * 3.6,
				radius: indicationSize * 1.8,
				hp: flower.render.hp,
				maxHp: flower.maxHp,
				shield: flower.render.shield,
				beforeStreakHp: flower.render.beforeStreakHp,
				givenAlpha: 1
			}, flower);
			flower.drawFlower(globalIndicationX, indicationY, indicationSize, flower.character);
			ctx.font = `900 ${indicationSize * 0.75}px Ubuntu`;
			ctx.strokeStyle = "black";
			ctx.fillStyle = "white";
			ctx.textBaseline = "middle";
			ctx.textAlign = "center";
			ctx.strokeText(flower.name, globalIndicationX + indicationSize * 4, indicationY);
			ctx.fillText(flower.name, globalIndicationX + indicationSize * 4, indicationY);

			ctx.font = `900 ${indicationSize * 0.5}px Ubuntu`;
			ctx.strokeStyle = "black";
			ctx.fillStyle = "#aaaaaa";
			ctx.textBaseline = "middle";
			ctx.textAlign = "left";
			ctx.lineWidth = 3;
			ctx.strokeText(flower.username, globalIndicationX + indicationSize, indicationY + indicationSize * 0.75);
			ctx.fillText(flower.username, globalIndicationX + indicationSize, indicationY + indicationSize * 0.75);

			ctx.lineWidth = 1

			if (self && room.flowers[id]) {
				ctx.lineWidth = indicationSize / 7;
				let angle = Math.atan2(flower.render.headY - self.render.headY, flower.render.headX - self.render.headX);
				ctx.translate(globalIndicationX, indicationY);
				ctx.strokeStyle = "black";
				ctx.fillStyle = "white";
				ctx.rotate(angle);
				ctx.beginPath();
				ctx.lineTo(indicationSize * 1.15, -indicationSize * 0.4);
				ctx.lineTo(indicationSize * 1.45, 0);
				ctx.lineTo(indicationSize * 1.15, indicationSize * 0.4);
				ctx.lineTo(indicationSize * 1.15, -indicationSize * 0.4);
				ctx.stroke();
				ctx.fill();
				ctx.rotate(-angle);
				ctx.translate(-globalIndicationX, -indicationY);
			}

			if (flower.mana) {
				let manaCount = 0;
				let i = 0;
				for (let type in (flower.mana)) {
					if (flower.mana[type] > 0) manaCount ++
				}

				for (let type in (flower.mana)) {
					if (flower.mana[type] > 0) {
						let size = (indicationSize * 6.5 - indicationSize * 0.5 * manaCount) / manaCount

						ctx.lineWidth = indicationSize * 0.35
						ctx.strokeStyle = "#333333"

						ctx.beginPath();
						ctx.moveTo(globalIndicationX + indicationSize + i * size + indicationSize * 0.5 * i, indicationY - indicationSize * 0.75)
						ctx.lineTo(globalIndicationX + indicationSize + (i + 1) * size + indicationSize * 0.5 * i, indicationY - indicationSize * 0.75)
						ctx.stroke();
						ctx.closePath();

						ctx.lineWidth = indicationSize * 0.25
						ctx.strokeStyle = Colors.mana[type]

						ctx.beginPath();
						ctx.moveTo(globalIndicationX + indicationSize + i * size + indicationSize * 0.5 * i, indicationY - indicationSize * 0.75)
						ctx.lineTo(globalIndicationX + indicationSize + (i + (flower.mana[type] / flower.maxMana[type])) * size + indicationSize * 0.5 * i, indicationY - indicationSize * 0.75)
						ctx.stroke();
						ctx.closePath();
						i++
					}
				}
			}
		}
	}

	if (globalInventory.fadingOut === true) {
		globalInventory.draw();
	}
	if (mobGallery.fadingOut === true) {
		mobGallery.draw();
	}

	inventory.draw();
	if (window.mobile) {
		mobileControls.draw();
	}


	levelBar.draw();
	//}

	// Mana
	if (GraceBar.maxMana > 0){
		GraceBar.draw(room.wave, room.waveTimer / (30 * waveLengthFunc(room.wave)));
	}
	if (TimeBar.maxMana > 0){
		TimeBar.draw(room.wave, room.waveTimer / (30 * waveLengthFunc(room.wave)));
	}
	if (DivergenceBar.maxMana > 0){
		DivergenceBar.draw(room.wave, room.waveTimer / (30 * waveLengthFunc(room.wave)));
	}


	// renderChatMessages();

	if (window.isDead === true) {
		window.deadMenuTime += dt;
		deadMenu.draw();
	}
	else {
		window.deadMenuTime = 0;
		if (room.biome == "1v1") {
			ctx.translate(canvas.w - 320, 20)

			ctx.fillStyle = "#333333"
			ctx.strokeStyle = "#292929"
			ctx.lineWidth = 10

			ctx.beginPath();
			ctx.roundRect(0, 0, 300, 430, 2)
			ctx.fill();
			ctx.stroke();
			ctx.closePath();

			ctx.fillStyle = "#39b54a"
			ctx.strokeStyle = "#2e933c"

			ctx.beginPath();
			ctx.roundRect(0, 0, 300, 50, 2)
			ctx.fill();
			ctx.stroke();
			ctx.closePath();

			ctx.textAlign = 'center'
			ctx.textBaseline = 'middle'

			ctx.font = `900 25px 'Ubuntu'`;
			ctx.lineWidth = 4;

			ctx.fillStyle = "#ffffff"
			ctx.strokeStyle = "#000000"

			ctx.strokeText("Leaderboard", 150, 50 - 23)
			ctx.fillText("Leaderboard", 150, 50 - 23)

			for (let i = 1; i <= 11; i++) {
				ctx.strokeStyle = "#292929"
				ctx.lineWidth = 25

				ctx.beginPath();
				ctx.moveTo(25, i * 32.5 + 45 )
				ctx.lineTo(275, i * 32.5 + 45 )
				ctx.stroke();
				ctx.closePath();

			}

			let max = 0;
			let index = 0;
			let flowers = []

			for (let id in room.flowers) {
				flower = room.flowers[id]
				flowers.push({
					username: flower.username, 
					score: flower.score
				})
			}

			flowers.sort((a, b)=>{
				if (a.score > b.score) return -1
				if (a.score < b.score) return 1
			})

			flowers = flowers.slice(0, 11)

			for (let flower of flowers) {
				index++
				if (flower.score > max) max = flower.score

				ctx.strokeStyle = "#39b54a"
				if (flower.score == max) {
					ctx.strokeStyle = "#dbd74b"
				}
				if (flower.username == room.flowers[window.selfId].username) {
					ctx.strokeStyle = "#5a9fdb"
				}
				if (flower.username == "ruby") {
					ctx.strokeStyle = "#fa87b7"
				}
				if (flower.username == "haha0201"){
					ctx.strokeStyle = `hsl(${236 + Math.sin(Date.now()/1000) * 68}, 50%, 60%)`
				}
				if (flower.username == "devdevd"){
					ctx.strokeStyle = `hsl(${130 + Math.sin(Date.now()/1000) * 110}, 90%, 60%)`
				}
				ctx.lineWidth = 17.5

				ctx.beginPath();
				ctx.moveTo(25, index * 32.5 + 45 )
				ctx.lineTo(25 + (flower.score / max) * 250, index * 32.5 + 45 )
				ctx.stroke();
				ctx.closePath()

				ctx.textAlign = 'center'
				ctx.textBaseline = 'middle'

				ctx.font = `900 20px 'Ubuntu'`;
				ctx.lineWidth = 4;

				ctx.fillStyle = "#ffffff"
				ctx.strokeStyle = "#000000"

				ctx.strokeText(flower.username + ' - ' + formatAmountHighPrecision(flower.score), 150, index * 32.5 + 45)
				ctx.fillText(flower.username + ' - ' + formatAmountHighPrecision(flower.score), 150, index * 32.5 + 45)
			}

			ctx.translate(-canvas.w + 320, -20)
		}

		if (window.spectating) collectedMenu.draw();
	}

	let hoverOverX = false;

    if (mouse.canvasX > 10 && 10 + 45 > mouse.canvasX && mouse.canvasY > 10 && 10 + 45 > mouse.canvasY) {
        hoverOverX = true
    } else {
        hoverOverX = false
    }

    // draw x

    ctx.strokeStyle = '#90464b';
    if (hoverOverX === true) {
        ctx.fillStyle = '#c16666';
    } else {
        ctx.fillStyle = '#c1565e';
    }
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.roundRect(10, 10, 45, 45, 6);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.lineWidth = 7.5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#cccccc';
    ctx.beginPath();
    ctx.moveTo(22.5, 22.5);
    ctx.lineTo(42.5, 42.5);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(42.5, 22.5);
    ctx.lineTo(22.5, 42.5);
    ctx.stroke();
    ctx.closePath()

    if (hoverOverX === true && mouse.lastDownData.x > 10 && 10 + 45 > mouse.lastDownData.x && mouse.lastDownData.y > 10 && 10 + 45 > mouse.lastDownData.y && mouse.lastDownData.time > 100) {
        send({ leaveGame: true, real: true })
        petalReloadData = {}
        petalHpData = {}
        hoverOverX = false
    }
}

function renderHitbox({
	x,
	y,
	radius,
	angle,
	rarity = 0
}) {
	ctx.strokeStyle = Colors.rarities[rarity].color;
	ctx.lineWidth = 0.75 / renderFov;
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(x, y)
	ctx.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
	ctx.stroke();
	ctx.closePath();
}