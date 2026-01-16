import { WaveManager } from './waveManager.js';

export function saveGame() {
  try {
    const save = {
      wave: WaveManager.wave,
      inventory: (window.menuInventory && typeof window.menuInventory.pack === 'function') ? window.menuInventory.pack() : (window.menuInventory || {})
    };
    localStorage.setItem('flowr_save', JSON.stringify(save));
  } catch (err) {
    console.warn('saveGame failed', err);
  }
}

window.saveGame = saveGame;
