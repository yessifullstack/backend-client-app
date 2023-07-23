import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import productsRouter from './src/routes/products.routes.js';
import especialPriceRouter from "./src/routes/especialPrice.routes.js"



const app = express()

app.use(cors());
app.use( morgan("dev"));
app.use( express.json());

app.use('/products', productsRouter );
app.use('/price/:user_id/:nombre_producto', especialPriceRouter )


export default app;