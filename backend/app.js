var express = require("express");
var dotenv = require("dotenv");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
const connectDB = require('./config/db_connect')
dotenv.config();
connectDB();

const User = require('./models/userData')
const userRouter = require('./routes/userRouter')


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.json());
app.use('/users',userRouter)


const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Running at port ${PORT}`));
