module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    comment: DataTypes.STRING,
    commentCreated: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    commentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  });
  Comments.associate = (models) => {
    Comments.belongsTo(models.User, {
      foreignKey: "userId",
      targetKey: "userId",
    });
  };
  return Comments;
};
