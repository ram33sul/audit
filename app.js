import express from 'express';
import dotenv from 'dotenv';
import router from './routes/route.js';
import adminRouter from './routes/admin.js';
import path from 'path';
import { fileURLToPath } from 'url';
import mongooseConnect from './config/mongoose.js'

dotenv.config();
mongooseConnect();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use('/admin', adminRouter)
app.use('/', router);

app.listen(PORT, (error) => {
    if(error){
        return console.log(`Server can't be run on ${PORT}`);
    }
    console.log(`Server successfully running on ${PORT}`);
})