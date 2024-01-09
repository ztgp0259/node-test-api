import express from "express";

const app = express()

app.listen(5001, () =>  console.log('Api running from port 5001'))

app.get('/', (req,res) => res.json('Hello World - API running'))