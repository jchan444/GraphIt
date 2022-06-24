const express = require('express');
const app = express();
const path = require('path');
const graphController = require('./Controller/graphController.js');
const cors = require("cors")

const PORT = 3000;

//NEED THESE THINGS FOR EVERY SERVER
app.use(cors())
app.use(express.json());
//NEED THESE THINGS FOR EVERY SERVER

// app.use(express.urlencoded({ extended: true }));
//loads files that are in public directory
app.use('/', express.static('public'))



app.post('/bar', graphController.getBarGraph, (req, res) => {
    console.log(res.locals.url)
    res.status(200).json(res.locals.url)
});

//catch-all route handler
app.use((req, res) => res.status(404).send('Cannot find page!'));

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log:'Global error handler caught unknown middleware error',
        status: 500,
        message: {err: 'An error occurred'},
    };
    const errorObj = Object.assign({}, defaultErr, err)
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, console.log(`listening on port ${PORT}...`));