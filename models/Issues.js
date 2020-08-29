module.exports = function (sequelize, DataTypes) {
  const Issues = sequelize.define("Issues", {
    // The email cannot be null, and must be a proper email before creation
    issueTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    issueBody: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    issueComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    issueInProgress: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
  Issues.associate = (models) => {
    Issues.belongsTo(models.IssueCollections, {});
  };
  Issues.associate = (models) => {
    Issues.belongsTo(models.User, {});
  };

  return Issues;
};
