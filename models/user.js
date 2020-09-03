const bcrypt = require("bcryptjs");
// default user is userLink 999
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    issuesCompleteCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: 0,
    },
    projectsCompleteCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: 0,
    },
    commentsCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: 0,
    },
    //This is the PRIMARYKEY for the users table, name changed to userId by setting PRIMARYKEY to true//
  });
  User.associate = function (models) {
    User.hasMany(models.Comment, {
      onDelete: "cascade",
    });
  };

  User.associate = function (models) {
    User.hasMany(models.Project, {
      onDelete: "cascade",
    });
  };
  // Creating a custom method for our User model. This will check if an unhashed
  // password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
