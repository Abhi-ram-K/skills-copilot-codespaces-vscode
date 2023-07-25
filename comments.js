// create web server 
// 1. create web server
// 2. create router
// 3. create route
// 4. start server

// 1. create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. create router
const router = express.Router();

// 3. create route
router.get('/list', (req, res) => {
    res.send('comments list');
});

router.get('/delete', (req, res) => {
    res.send('comments delete');
});

router.get('/update', (req, res) => {
    res.send('comments update');
});

router.get('/insert', (req, res) => {
    res.send('comments insert');
});

// 4. start server
app.use('/comments', router);
app.listen(port, () => {
    console.log(`server start at http://localhost:${port}`);
});