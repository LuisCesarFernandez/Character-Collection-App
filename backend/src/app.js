import express from 'express';
import cors from 'cors';
import router from './routes/waifu.routes.js';

const app = express();

app.use(cors({
    origin:'http://localhost:5173',
    methods: ['GET','POST','PUT','DELETE','PATCH'],
    credentials:true
}))

app.use(express.json());

app.use('/waifus', router);

export default app;