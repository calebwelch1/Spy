module.exports = function (sequelize, DataTypes) {
  const Issue = sequelize.define("Issue", {
    // The email cannot be null, and must be a proper email before creation
    issueName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    issueDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    issueComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    issueInProgress: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  });
  Issue.associate = (models) => {
    Issue.belongsTo(models.IssueCollection, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  Issue.associate = (models) => {
    Issue.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Issue;
};
