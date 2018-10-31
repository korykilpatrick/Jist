const Sequelize = require('sequelize');
const mysql = require('mysql2');
require('dotenv').config();

const Models = require('../db/models.js');
const db_config = JSON.parse(process.env.DB_CONFIG);

const sequelize = new Sequelize(db_config.database, db_config.username, db_config.password, 
  {
    host: db_config.host,
    dialect: 'mysql',
    port: db_config.port,
    pool: {
      min: 0,
      max: 5,
      acquire: 30000,
      idle: 5000
    }
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connected to db');
  })
  .catch(err => {
    console.error('Unable to connect to db:', err);
  });

const User = Models.User(sequelize, Sequelize.DataTypes);
const Gist = Models.Gist(sequelize, Sequelize.DataTypes);
const File = Models.File(sequelize, Sequelize.DataTypes);
const Revision = Models.Revision(sequelize, Sequelize.DataTypes);
const File_Revision = Models.File_Revision(sequelize, Sequelize.DataTypes);

User.hasMany(Gist, { foreignKey: 'userId' }); // adds userId to Gist as foreign key, User instances inherit getGists, setGists
Gist.belongsTo(User, { foreignKey: 'userId' });
Gist.hasMany(Revision, { foreignKey: 'gistId' }); // adds gistId to Revision as foreign key, Gist instances inherit getRevisions, setRevisions (plural?)
Revision.belongsTo(Gist, { foreignKey: 'gistId' });


const createUser = () => User.create({ username: 'blerep', password: 'secure', email: 'korndog@hotmail.gov' });

const createGist = userId => (
  Gist.create({
    userId: userId, 
    description: 'dis mah gist',
    url: 'https://gistygist.org',
    public: true
  })
)

const createFile= () => (
  File.create({ 
    name: 'myFile',
    extension: '.js',
    text: 'code'
  })
)

const createRevision = gistId => Revision.create({ gistId });

const createFile_Revision = (fileId, revisionId) => File_Revision.create({ fileId, revisionId });




module.exports = { 
  sequelize,
  createUser,
  createFile,
  createGist,
  createRevision,
  createFile_Revision
};