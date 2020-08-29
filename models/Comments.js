module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    comment: DataTypes.STRING,
    commentCreated: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
  Comments.associate = (models) => {
    Comments.belongsTo(models.User, {});
  };
  return Comments;
};
