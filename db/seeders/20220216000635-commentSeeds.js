'use strict';

const { head } = require("../../routes");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 2,
        postId: 1,
        content: 'you are wrong. i am of the opinion that Future is a very forward thinking individual, and whatever his plans are go way above someone with your intellectual level\'s head. Please make sure to do some what of a self-awareness check before your post something like this again, my friend.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        postId: 1,
        content: 'ok',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
