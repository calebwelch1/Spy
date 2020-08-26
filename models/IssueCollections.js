module.exports = function (sequelize, DataTypes) {
  const IssueCollections = sequelize.define("IssueCollections", {
    collectionName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    collectionDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    collectionComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    issueCollectionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  });
  IssueCollections.associate = function (models) {
    IssueCollections.belongsTo(models.Projects, {
      foreignKey: "projectId",
      targetKey: "projectId",
    });
  };

  IssueCollections.associate = function (models) {
    IssueCollections.hasMany(models.Issues, {});
  };
  return IssueCollections;
};
