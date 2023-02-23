import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from "./src/routes/routes";

const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017',)
mongoose.connectt('mongodb://127.0.0.1/productsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (p) => { console.log('Database Callback: ' + p); });
console.log('Database connecting...'); 

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// Routes
routes(app);

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);
  
app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
