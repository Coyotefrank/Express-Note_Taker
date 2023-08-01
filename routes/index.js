// const express = require('express');
// const miniApp = express.Router();
const miniApp = require('express').Router();

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');


// const app = express();
// http://localhost:3001/api/notes
miniApp.use('/notes', notesRouter);


module.exports = miniApp;
