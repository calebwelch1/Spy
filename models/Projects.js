const { Sequelize } = require(".");

module.exports = function (sequelize, DataTypes) {
  const Projects = sequelize.define("Projects", {
    // The email cannot be null, and must be a proper email before creation
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    projectDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    projectComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    projectId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    public: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
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
  Projects.associate = function (models) {
    Projects.hasMany(models.IssueCollections, {
      onDelete: "cascade",
    });
  };
  // Associate issues to a particular collection
  return Projects;
};
