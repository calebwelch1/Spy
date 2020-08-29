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
  });
  Project.associate = (models) => {
    Project.belongsTo(models.User, {});
  };
  Project.associate = function (models) {
    Project.hasMany(models.IssueCollections, {
      onDelete: "cascade",
    });
  };
  return Project;
};
