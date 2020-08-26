const { Sequelize } = require(".");

module.exports = function (sequelize, DataTypes) {
  const Projects = sequelize.define("Projects", {
    // The email cannot be null, and must be a proper email before creation
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    projectType: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    projectComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
  // Associate projects to a user
  Projects.associate = (models) => {
    Projects.belongsTo(models.User, {
      foreignKey: "userId",
      targetKey: "userId",
    });
  };
  // Associate a collection of issues

  // Associate issues to a particular collection
  return Projects;
};
