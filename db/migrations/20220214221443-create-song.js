'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      songName: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      albumName: {
        type: Sequelize.STRING(150)
      },
      artistName: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      releaseDate: {
        type: Sequelize.DATEONLY
      },
      songUrl: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      albumImgUrl: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      artistImgUrl: {
        // use this column or no?
        type: Sequelize.STRING(500)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Songs');
  }
};
