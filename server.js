import express from 'express';
require('dotenv').config();

const app = express();

app.use(express.json());

const server = process.env.SERVER_URL || 8080

app.listen(server,()=>{
    console.log(`Server is running on port ${server}`);
})