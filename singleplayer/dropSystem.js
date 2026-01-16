export function spawnDrops(enemy) {
  try {
    if (window.menuInventory && typeof window.menuInventory.addPetal === 'function') {
      window.menuInventory.addPetal('Basic', 1);
    } else if (window.menuInventory && typeof window.menuInventory.pack === 'function') {
      // fallback: add to raw inventory object
      window.menuInventory.Basic = (window.menuInventory.Basic || 0) + 1;
    }
  } catch (err) {
    console.warn('spawnDrops failed', err);
  }
}

window.spawnDrops = spawnDrops;
