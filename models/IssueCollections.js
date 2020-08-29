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
  });
  IssueCollections.associate = function (models) {
    IssueCollections.belongsTo(models.Project, {});
  };

  IssueCollections.associate = function (models) {
    IssueCollections.hasMany(models.Issues, {
      onDelete: "cascade",
    });
  };
  return IssueCollections;
};
