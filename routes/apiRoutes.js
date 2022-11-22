const fs = require("fs");
const path = require("path");
const { v4: uuivd4 } = require("uuid");
const notes = require("../Develop/db/db.json");
const express = require('express');
const app = require();
const router = express.Router();

//create note

app.post('/', (req, res) => {
  res.send('POST CREATED')
});

function createNewNote(body, notesArray) {
    const notes = body;
    if (!Array.isArray(notesArray))
    notesArray = [];

    if (notesArray.length === 0) notesArray.push(0);

    body.id = notesArray[0] + uuivd4();
    notesArray[0]++;

    notesArray.push(notes);
    fs.writeFileSync(
      path.join(__dirname, "../Develop/db/db.json"),
      JSON.stringify(notesArray, null, 2)
    );
    return notes;
}

//DELETE NOTE
function deletesNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
      let notes = notesArray[i];
  
      if (notes.id == id) {
        notesArray.splice(i, 1);
        fs.writeFileSync(
          path.join(__dirname, "..Develop/db/db.json"),
          JSON.stringify(notesArray, null, 2)
        );
        break;
      }
    }
  }
  
  module.exports = function (router) {
    // GET REQUEST
    app.get("/notes", (req, res) => {
      res.json(notes.slice(1));
    });
  
    // POST REQUEST
    app.post("/notes", (req, res) => {
      res.json(newNote);
    });


    // app.post("/api/notes", (req, res) => {
    //   //  creates new note
    //   const newNote = createsNewNote(req.body, notes);
    //   res.json(newNote);
    // });
  
    // DELETE REQUEST
    app.delete("/notes/:id", (req, res) => {
      deletesNote(req.params.id, notes);
      res.json(true);
    });
  };

  module.exports = app;