import { Db, Document, MongoClient } from 'mongodb';

const uri = 'mongodb://localhost';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db: Db = client.db('parsedb');
    console.log('db: ', db);
    
    const doc: Document = await db.command({ ping: 1 });
    console.log('doc: ', doc);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
