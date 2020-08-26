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
    issueId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  });
  Issues.associate = (models) => {
    Issues.belongsTo(models.IssueCollections, {
      foreignKey: "issueId",
      targetKey: "issueId",
    });
  };
  Issues.associate = (models) => {
    Issues.belongsTo(models.User, {
      foreignKey: "userId",
      targetKey: "userId",
    });
  };

  return Issues;
};
