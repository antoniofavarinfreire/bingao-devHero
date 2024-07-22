import { openDB } from 'idb';

const dbPromise = openDB('bingo-game', 1, {
  upgrade(db) {
    db.createObjectStore('state', {
      keyPath: 'id',
      autoIncrement: true,
    });
  },
});

export const saveState = async (state: any) => {
  const db = await dbPromise;
  await db.put('state', { id: 1, ...state });
};

export const getState = async () => {
  const db = await dbPromise;
  return await db.get('state', 1);
};

export const resetGame = async () => {
  const db = await dbPromise;
  await db.delete('gameState', 1);
  // Gere novos dados para os tabuleiros e números
};