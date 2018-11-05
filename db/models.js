// Models 

// sequelize default adds createdAt and (last) updatedAt to all models
// may wanna look into getters and setters (under model defintion in docs)

module.exports.User = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    userId: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV1, unique: true, primaryKey: true }, // or UUIDV4 -> sequelize auto-generates unique ID
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, validate: { isEmail: true } }
  });
};

module.exports.Gist = (sequelize, DataTypes) => {
  return sequelize.define('Gist', {
    gistId: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV1, unique: true, primaryKey: true },
    description: { type: DataTypes.STRING, allowNull: false, len: { args: [1, 20], msg: 'description between 1 and 20 chars, plz!' } },
    public: { type: DataTypes.BOOLEAN, defaultValue: true } // default public, shouldnt' be able to update
  });
};

module.exports.File = (sequelize, DataTypes) => {
  return sequelize.define('File', {
    fileId: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV1, unique: true, primaryKey: true }, 
    name: { type: DataTypes.STRING, defaultValue: 'gistfile1.txt' },
    text: { type: DataTypes.TEXT, allowNull: false } // can someone create an empty Gist?
    // tabs: { type: DataTypes.BOOLEAN, defaultValue: false }, // default Spaces
    // softWrap: { type: DataTypes.BOOLEAN, defaultValue: true }, // default soft wrap
    // indentSize: { type: DataTypes.INTEGER, defaultValue: 2 } // default indent = 2
  },
  {
    timestamps: true,
    updatedAt: false
  });
};

// TO IMPLEMENT: MAKE REVISION, FILE, FILE_REVISION IMMUTABLE

module.exports.Revision = (sequelize, DataTypes) => {
  return sequelize.define('Revision', {
    revisionId: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV1, unique: true, primaryKey: true }
  },
  {
    timestamps: true,
    updatedAt: false
  });
};

module.exports.File_Revision = (sequelize, DataTypes) => {
  return sequelize.define('File_Revision', {
    fileId: { type: DataTypes.STRING, allowNull: false },
    revisionId: { type: DataTypes.STRING, allowNull: false }
  },
  {
    timestamps: false
  });
};

// const Fork = sequelize.define('Fork', {
//   User: Sequelize.STRING,
//   Gist: Sequelize.INTEGER
// });

// const Star = sequelize.define('Star', {
//   User: Sequelize.STRING,
//   Gist: Sequelize.INTEGER
// });

// const Comment = sequelize.define('Comment', {
//   User: Sequelize.STRING,
//   Gist: Sequelize.INTEGER
// });