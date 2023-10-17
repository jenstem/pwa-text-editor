import { openDB } from 'idb';

const initdb = async () =>
// using version 1 of Jate DB
  openDB('jate', 1, {
    // define DB schema
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // store data with id
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // console.error('putDb was not implemented');
  const jDB = await openDB('jate', 1);
  const jData = jDB.transaction('jate', 'readwrite');
  const storeData = jData.objectStore('jate');
  const request = storeData.put({ id: 1, value: content });
  const result = await request;
  console.log('Data has been saved', result.value);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // console.error('getDb was not implemented');
  const jDB = await openDB('jate', 1);
  const jData = jDB.transaction('jate', 'readonly');
  const storeData = jData.objectStore('jate');
  const request = storeData.get(1);
  const result = await request;

  // tenary operator (if/else shorthand)
  // evaluate result, if it's true or has a truthy value
  result ? console.log('Data was received', result.value) :
  // : separates true/false in a tenary operator, if it's false
    console.error('getDb was not implemented');

  // return result?.value;
  return result.value;
};
initdb();