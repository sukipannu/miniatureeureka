const fs = require("fs");
const path = require("path");
const { v4: uuivd4 } = require("uuid");
const notes = require("../Develop/db/db.json");

//create note
function createNewNote(body, notesArray) {
    const notes = body;
    if (!Array.isArray(notesArray))
    notesArray = [];

    if (notesArray.length === 0) notesArray.push(0);

    body.id = notesArray[0] + uuivd4();
    notesArray[0]++;

    notesArray.push(notes);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
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
          path.join(__dirname, "../db/db.json"),
          JSON.stringify(notesArray, null, 2)
        );
        break;
      }
    }
  }
  
  module.exports = function (router) {
    // GET REQUEST
    router.get("/api/notes", (req, res) => {
      res.json(notes.slice(1));
    });
  
    // POST REQUEST
    router.post("/api/notes", (req, res) => {
      //  creates new note
      const newNote = createsNewNote(req.body, notes);
      res.json(newNote);
    });
  
    // DELETE REQUEST
    router.delete("/api/notes/:id", (req, res) => {
      deletesNote(req.params.id, notes);
      res.json(true);
    });
  };
