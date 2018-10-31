const express = require('express');
const bodyPaser =('body-parser');

const db = require('../db/index.js');

const app = express();
const PORT = process.env.port || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

var fileId = '';
var revisionId = '';

// basic testing
db.sequelize.sync({ force: true, logging: console.log})
  .then(() => db.createUser())
  .then(user => db.createGist(user.dataValues.userId))
  .then(gist => db.createRevision(gist.dataValues.gistId))
  .then(revision => {
    revisionId = revision.dataValues.revisionId;
    return db.createFile()
  })
  .then(file => db.createFile_Revision(file.dataValues.fileId, revisionId))

