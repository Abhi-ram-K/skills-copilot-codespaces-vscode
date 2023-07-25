// create web server 
// 1. npm install express
// 2. npm install body-parser
// 3. npm install cors
// 4. npm install --save-dev nodemon
// 5. npm install mongoose
// 6. npm install dotenv

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

const app = express();
dotenv