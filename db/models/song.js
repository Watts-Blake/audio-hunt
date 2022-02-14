'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    songName: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    albumName: {
      type: DataTypes.STRING(150)
    },
    artistName: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    releaseDate: {
      type: DataTypes.DATEONLY
    },
    songUrl: {
      allowNull: false,
      type: DataTypes.STRING(500)
    },
    albumImgUrl: {
      allowNull: false,
      type: DataTypes.STRING(500)
    },
    artistImgUrl: {
      // use this column or no?
      type: DataTypes.STRING(500)
    },
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.hasMany(models.Post, { foreignKey: "songId" });
  };
  return Song;
};
