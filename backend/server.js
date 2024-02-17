import express from "express";
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';
dotenv.config();
import userRoutes from './routes/userRoutes.js';
import connectToDb from "./config/db.js";
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 5000;

connectToDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

app.get('/', (req, res)=>{
    res.send("API is Running...")
})

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=> console.log(`Server is running on ${port}`))
