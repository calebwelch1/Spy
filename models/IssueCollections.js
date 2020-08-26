module.exports = function (sequelize, DataTypes) {
  const IssueCollections = sequelize.define("Issue Collections", {
    // The email cannot be null, and must be a proper email before creation
    collectionName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    collectionComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
};

return IssueCollection;
