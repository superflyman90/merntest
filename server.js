import express from 'express';
import './config/db.js';
import routes from './routes/routes.js';
import dotenv from 'dotenv';
dotenv.config()

const port = process.env.PORT || 3001

const app = express();

app.use(routes);
app.use(express.json());

app.listen(port, () => console.log(`Listening on port: ${port}`));