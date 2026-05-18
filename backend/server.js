//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoute from './routes/product.route.js';
import dns from 'dns';
import path from "path";
dns.setServers(["1.1.1.1", "8.8.8.8"]);// Set custom DNS servers to resolve domain names, which can help avoid DNS resolution issues in some environments 

dotenv.config();

const app = express();


app.use(express.json());//allows us to parse JSON data from the request body

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});// CORS middleware to allow cross-origin requests from the frontend

const PORT = process.env.PORT || 5000;

const _dirname = path.resolve();

app.use('/api/products', productRoute);// Mount the product routes at /api/products

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(_dirname, "/frontend/dist")))
  app.get("/{*splat}", (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
  })
}

app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
})

