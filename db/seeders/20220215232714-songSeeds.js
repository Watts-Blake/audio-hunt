'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Songs', [
      {
        songName: 'Mask Off',
        albumName: 'Future',
        artistName: 'Future',
        releaseDate: '2017-4-18',
        songUrl: 'https://open.spotify.com/track/0VgkVdmE4gld66l8iyGjgx?si=e567679fd4a246cd',
        albumImgUrl: 'https://upload.wikimedia.org/wikipedia/en/9/96/Future_cover.jpg',
        // artistImgUrl: ,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
