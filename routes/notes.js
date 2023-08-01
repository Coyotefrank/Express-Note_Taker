const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

//  Route for retrieving all the tips
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for tips`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//  Route for a new UX/UI tip
notes.post('/', (req, res) => {
  console.info(`${req.method} request received to add a tip`);
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNotes = {
      title,
      text,
      id: uuid(),
    };
   
   const parsedData =  readAndAppend(newNotes, './db/db.json');
    res.json(parsedData);
  } else {
    res.error('Error in adding tip');
  }
});

module.exports = notes;
