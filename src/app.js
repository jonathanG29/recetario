import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json()); // esto permite que el back entienda las peticiones en formato json y se exporta desde express

app.use("/api", authRoutes)

export default app;