import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser'

const app = express();

app.use(morgan('dev'));
app.use(express.json()); // esto permite que el back entienda las peticiones en formato json y se exporta desde express
app.use(cookieParser());

app.use("/api", authRoutes)

export default app;