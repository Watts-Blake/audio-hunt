'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Posts', [{
      userId: 1,
      songId: 1,
      title: 'Future is ok',
      shortDescription: 'I believe that the mask should be on',
      content: 'Listen, in light of current global events, I believe that this song title is very inappropriate. This is a very sensitive topic, and for an artist of his (unfortunate) status, it is highly irresponsible to be putting out music such as this. Please do a better job. - Bob',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
