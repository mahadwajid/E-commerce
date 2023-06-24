import bodyParser from "body-parser";
import  express  from "express";
import cors from 'cors';
import Signups from "./Routes/Signup.js";
import Signuprote from "./Routes/Login.js";
import Product from "./Routes/Product.js";
import {connection } from './connection.js';


const app = express();
app.listen(5000);

app.use(cors());
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded ({extended:true}));


connection.then(() => {
    console.log("Connection successful");
})
.catch((error) => {
    console.log("Connection Error", error);
});



app.use('/Signup',Signups);
app.use('/Login', Signuprote);

app.use('/Admin/Addproduct', Product);
app.use('/Admin/Showproduct', Product);
app.use('/images', express.static('images'));

app.use('/Men' , Product);
app.use('Women', Product);
app.use('/Jewllery',Product);

app.use('/Checkout',Product);


