//import mongodb from 'mongodb';

// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGO_URL;

// function getClient() {
    //     return new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    // }
    // export { getClient };
    
    
    // async function getClient() {
        //   const uri = process.env.MONGO_URL;
//   const client = new mongodb.MongoClient(uri);
//   try {
//     await client.connect();
//     console.log('Connected successfully to MongoDB');
//     return client;
//   } catch (err) {
//     console.error('Failed to connect to MongoDB', err);
//     return null;
//   }
// }

import mongoose from "mongoose";
import 'dotenv/config';

async function connect (){
    const uri = process.env.MONGO_URL
    return await mongoose.connect(uri)
}

export  {connect}









