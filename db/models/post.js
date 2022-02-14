'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    songId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    shortDescription: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    content: {
      type: DataTypes.TEXT
    },
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.hasMany(models.Comment, { foreignKey: "postId" });
    Post.belongsTo(models.User, { foreignKey: "userId" });
    Post.belongsTo(models.Song, { foreignKey: "songId" });
  };
  return Post;
};
