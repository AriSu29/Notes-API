const { addNoteHandler, getAllNotesHandler, getNoteByID, editNoteByID, deleteNoteByID } = require("./handler");

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },

  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByID,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByID,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByID,
  }
];

module.exports = routes;