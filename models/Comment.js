module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    comment: DataTypes.STRING,
    userLink: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 999,
    },
    issueLink: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  // Comment.associate = (models) => {
  //   Comment.belongsTo(models.User, {});
  // };
  // Comment.associate = (models) => {
  //   Comment.belongsTo(models.Issue, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };
  return Comment;
};
