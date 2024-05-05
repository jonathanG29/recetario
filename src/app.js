import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js';
import recepiesRouts from './routes/recepiesFav.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json()); // esto permite que el back entienda las peticiones en formato json y se exporta desde express
app.use(cookieParser());

app.use("/api", authRoutes)
app.use("/api", recepiesRouts)

export default app;