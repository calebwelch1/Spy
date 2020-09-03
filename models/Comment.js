module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    comment: DataTypes.STRING,
    commentCreated: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    userLink: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 999,
    },
  });
  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {});
  };
  Comment.associate = (models) => {
    Comment.belongsTo(models.Issue, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  Comment;
  return Comment;
};
