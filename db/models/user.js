"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      header: {
        type: DataTypes.STRING(100),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true,
      },
      hashedPassword: {
        allowNull: false,
        type: DataTypes.STRING.BINARY,
      },
      bio: {
        type: DataTypes.TEXT,
      },
      activeState: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      profileImg: {
        type: DataTypes.STRING,
        defaultValue: "/assets/images/profileImg/profilePic1.jpg",
      },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Post, { foreignKey: "userId" });
    User.hasMany(models.Comment, { foreignKey: "userId" });
  };
  return User;
};
