import express from 'express';
import connectDatabase from './config/db';
import { check, validationResult} from 'express-validator';
import cors from 'cors';

// Init express application

const app = express();

connectDatabase();

// Configure Middleware
app.use(express.json({ extended: false}));
app.use(
    cors({
        origin: 'http://localhost:3000'
    })
);

// API endpoints
/*app.get('/',(req,res)=>res.send('http get request sent to root api endpoint'));*/

// Connection listener
const port = 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));

// API endpoints
app.get('/',(req,res)=>res.send('http get request sent to root api endpoint'));


/*// Connection listener
const port = 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));

// Configure Middleware
/*app.use(express.json({ extended: false}));
app.use(
    cors({
        /*origin:'http://c:/code/matc/itdev161/kathy-terlizzi/client'
        origin: 'http://localhost:3000'
        /*origin:'http://c:/code/matc/itdev161/kathy-terlizzi'
    })
);*/







