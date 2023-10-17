import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  export const putDb = async (content) => {
    const jDB = await openDB('jate', 1);
    const jData = jDB.transaction('jate', 'readwrite');
    const storeData = jData.objectStore('jate');
    const request = storeData.put({ id: 1, value: content });
    const result = await request;
    console.log('Data has been saved', result.value);
  };