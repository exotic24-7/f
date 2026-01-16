import { WaveManager } from './waveManager.js';
import { spawnDrops } from './dropSystem.js';
import { saveGame } from './saveSystem.js';

export const LocalServer = {
  state: 'menu', // menu | game | dead
  player: null,
  enemies: [],
  projectiles: [],
  drops: [],
  biome: 'Meadow',
  tickRate: 60,
  lastTick: performance.now(),

  startGame() {
    this.state = 'game';
    this.initPlayer();
    this.enemies = [];
    WaveManager.wave = 1;
    WaveManager.spawnWave(this);
    // start internal tick loop if not already running
    if (!this._tickInterval) {
      this.lastTick = performance.now();
      this._tickInterval = setInterval(() => {
        const now = performance.now();
        const dt = now - this.lastTick;
        this.lastTick = now;
        try { this.update(dt); } catch (e) { console.warn('LocalServer update error', e); }
      }, 1000 / this.tickRate);
    }
  },

  initPlayer() {
    this.player = window.flower || null;
    if (this.player) {
      this.player.x = this.player.x || 400;
      this.player.y = this.player.y || 300;
    }
  },

  spawnInitialEnemies() {
    this.enemies.push(
      new Enemy({
        id: 1,
        type: 'Ladybug',
        x: 200,
        y: 200,
        radius: 30,
        hp: 100,
        maxHp: 100,
        team: 'enemy',
        rarity: 3
      })
    );
  },

  handleInput(msg) {
    if (!this.player) return;
    if (msg.move) {
      if (typeof this.player.applyInput === 'function') this.player.applyInput(msg.move);
      else Object.assign(this.player, msg.move);
    }
    if (msg.fire) {
      // if player has a shoot method
      if (typeof this.player.fire === 'function') this.player.fire(msg.fire);
    }
  },

  update(dt) {
    if (this.state !== 'game') return;

    this.updatePlayer(dt);
    this.updateEnemies(dt);
    this.checkCollisions();
    this.cleanupDead();
  },

  updatePlayer(dt) {
    // movement/input handled on client; sync if needed
  },

  updateEnemies(dt) {
    if (!this.player) return;
    for (const e of this.enemies) {
      if (e.dead) continue;
      const dx = this.player.x - e.x;
      const dy = this.player.y - e.y;
      const mag = Math.hypot(dx, dy) || 1;
      const speed = (e.speed || 50) * 0.001; // px per ms
      e.x += (dx / mag) * speed * dt;
      e.y += (dy / mag) * speed * dt;
      if (typeof e.update === 'function') e.update(dt);
    }
  },

  checkCollisions() {
    // basic collision: projectiles -> enemies
    for (const p of this.projectiles) {
      if (p.dead) continue;
      for (const e of this.enemies) {
        if (e.dead) continue;
        const dx = p.x - e.x;
        const dy = p.y - e.y;
        const dist = Math.hypot(dx, dy);
        if (dist < (p.radius || 5) + (e.radius || 16)) {
          if (typeof e.takeDamage === 'function') e.takeDamage(p.damage || 1);
          else e.hp -= p.damage || 1;
          p.dead = true;
        }
      }
    }
    // enemy death handling
    for (const e of this.enemies) {
      if (!e.dead && e.hp <= 0) {
        e.dead = true;
        try { spawnDrops(e); } catch (err) {}
      }
    }
  },

  cleanupDead() {
    this.enemies = this.enemies.filter(e => !e._removed);
    // when all enemies cleared, spawn next wave
    if (this.enemies.length === 0) {
      WaveManager.spawnWave(this);
      try { saveGame(); } catch (err) {}
    }
  }
};

// expose globally for other systems to import-less call
window.LocalServer = LocalServer;
