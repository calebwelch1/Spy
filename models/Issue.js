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
    collectionLink: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 999,
    },
    userLink: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 999,
    },
  });

  return Issue;
};
