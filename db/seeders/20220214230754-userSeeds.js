'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Demo User',
        header: 'This is Demo User\'s header',
        email: 'test@test.com',
        hashedPassword: '$2a$12$KxyJdlqPdOis9YHeSv0nuO/dh8G7cvmWUtuC7pWN9tUcLprUZ9cF.',
        bio: 'This is Demo User\'s bio',
        profileImg: '/assets/images/profileImg/profilePic2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Bruh',
        header: 'bruh header',
        email: 'bruh@bruh.com',
        hashedPassword: '$2a$12$KxyJdlqPdOis9YHeSv0nuO/dh8G7cvmWUtuC7pWN9tUcLprUZ9cF.',
        bio: 'bruv bio',
        profileImg: '/assets/images/profileImg/tyler.jpg',
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};
