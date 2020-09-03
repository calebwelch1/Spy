const { authorize } = require("passport");

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
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
    publicFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    userLink: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 999,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 0,
    },
  });
  Project.associate = (models) => {
    Project.belongsTo(models.User);
  };
  Project.associate = function (models) {
    Project.hasMany(models.IssueCollection, {
      onDelete: "cascade",
    });
  };
  return Project;
};
