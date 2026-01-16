export const WaveManager = {
  wave: 1,

  spawnWave(server) {
    const count = Math.max(1, Math.floor(this.wave * 3));
    for (let i = 0; i < count; i++) {
      const x = Math.random() * (server.spawnAreaWidth || 1000) - 100;
      const y = Math.random() * (server.spawnAreaHeight || 1000) - 100;
      const hp = 50 + this.wave * 10;
      server.enemies.push(new Enemy({
        id: Math.random(),
        type: 'Ladybug',
        x: x,
        y: y,
        radius: 25,
        hp: hp,
        maxHp: hp,
        rarity: Math.min(12, this.wave),
        speed: 40 + this.wave * 2
      }));
    }
    this.wave++;
  }
};

window.WaveManager = WaveManager;
