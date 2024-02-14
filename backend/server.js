import express from "express";
import dotenv from "dotenv"
dotenv.config();
import products from './data/products.js'
import connectToDb from "./config/db.js";
import productRoutes from './routes/productRoutes.js';
const port = process.env.PORT || 5000;

connectToDb();

const app = express();

app.get('/', (req, res)=>{
    res.send("API is Running...")
})

app.use('/api/products', productRoutes);

app.listen(port, ()=> console.log(`Server is running on ${port}`))
