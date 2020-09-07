module.exports = function (sequelize, DataTypes) {
  const IssueCollection = sequelize.define("IssueCollection", {
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
    projectLink: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 999,
    },
  });
  // IssueCollection.associate = function (models) {
  //   IssueCollection.belongsTo(models.Project, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };

  // IssueCollection.associate = function (models) {
  //   IssueCollection.hasMany(models.Issue, {
  //     onDelete: "cascade",
  //   });
  // };
  return IssueCollection;
};
