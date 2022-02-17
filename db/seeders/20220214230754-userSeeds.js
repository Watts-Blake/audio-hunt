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
      {
        username: 'Clarissa.Wuckert',
        header: 'in velit qui',
        email: 'Peggie_Adams@gmail.com',
        hashedPassword: '$2a$10$pdlbv./aqZ/cNtEVreIS1OgIazgIUxM0BUeyDa7n7HvrdvWGYGc6C',
        bio: 'In consequatur qui eligendi.',
        profileImg: '/assets/images/profileImg/profilePic1.jpg',
        createdAt: "2021-09-15T01:25:00.547Z",
        updatedAt: "2021-12-12T02:06:49.412Z"
      } ,
      {
        username: 'Nash16',
        header: 'quae sint dolore',
        email: 'Stacey9@yahoo.com',
        hashedPassword: '$2a$10$rIOM8I1ySBBgSskKleR0RONfD33T8Uh8jT5xFUej5nWbouhB1YGR.',
        bio: 'Est et occaecati odio sit placeat.',
        profileImg: '/assets/images/profileImg/profilePic2.jpg',
        createdAt: "2021-05-31T05:23:26.720Z",
        updatedAt: "2021-06-10T08:44:49.589Z"
      } ,
      {
        username: 'Hertha.Wunsch36',
        header: 'et facere eveniet',
        email: 'Nikko.Graham@hotmail.com',
        hashedPassword: '$2a$10$YP8EntTqoJkGaO95DauKhuecdiUOgIIN8.Q1kqxaT7RONZvexVJJe',
        bio: 'Commodi sit nesciunt nostrum sed rerum omnis non ut.',
        profileImg: '/assets/images/profileImg/profilePic3.jpg',
        createdAt: "2021-02-21T03:45:05.180Z",
        updatedAt: "2021-12-29T12:50:14.143Z"
      } ,
      {
        username: 'Cecile_Strosin79',
        header: 'amet temporibus at',
        email: 'Timothy.Weissnat80@hotmail.com',
        hashedPassword: '$2a$10$LZz.ZEZhWh2q05vXUvq1w.7mCtoj3no9WRwhf1suZgBRfDeCGiD.G',
        bio: 'Cumque fugit et consequatur optio dolor.',
        profileImg: '/assets/images/profileImg/profilePic4.jpg',
        createdAt: "2021-09-02T22:25:50.818Z",
        updatedAt: "2021-05-25T20:47:34.702Z"
      } ,
      {
        username: 'Jennifer11',
        header: 'laboriosam velit earum',
        email: 'Heber.Moore@yahoo.com',
        hashedPassword: '$2a$10$zujIey..joESU2HXPI8Azudr7DF1v7cmi3IaDN5nWwr/QPL4Y.2RK',
        bio: 'Aliquam eius ducimus recusandae non.',
        profileImg: '/assets/images/profileImg/profilePic5.jpg',
        createdAt: "2021-09-08T23:12:44.438Z",
        updatedAt: "2021-07-04T16:37:17.431Z"
      } ,
      {
        username: 'Eugenia_Fadel38',
        header: 'dolorem ut vero',
        email: 'Mattie94@gmail.com',
        hashedPassword: '$2a$10$V0/X433WNM0Qp9dEK41gp.Mk.VBEPa.XAwuchFEiGm.YA5cjYu7fO',
        bio: 'Autem distinctio aut voluptatem quos nemo autem est quisquam consequuntur.',
        profileImg: '/assets/images/profileImg/profilePic6.jpg',
        createdAt: "2021-09-24T03:01:38.389Z",
        updatedAt: "2021-07-29T14:48:35.684Z"
      } ,
      {
        username: 'Alberto26',
        header: 'veniam laborum cumque',
        email: 'Jewel92@hotmail.com',
        hashedPassword: '$2a$10$gg.CJe9Oa4ZQt8GLAxvWjejvHVLpP7waEGI7bzg.uVStkd6/REL4S',
        bio: 'Possimus excepturi nostrum velit voluptatem perferendis.',
        profileImg: '/assets/images/profileImg/profilePic1.jpg',
        createdAt: "2021-04-22T17:37:38.885Z",
        updatedAt: "2021-12-22T12:22:37.313Z"
      } ,
      {
        username: 'Joany_Casper',
        header: 'dolore quam accusantium',
        email: 'Emmett_Huels@gmail.com',
        hashedPassword: '$2a$10$QzoZK/aO7zO86Iu9YzfwIuGfEpPJXWq5N4fNWqtuDfEjaGBEq34xe',
        bio: 'Natus vero ducimus pariatur aliquid quo sunt corrupti autem.',
        profileImg: '/assets/images/profileImg/profilePic2.jpg',
        createdAt: "2022-01-03T01:53:42.676Z",
        updatedAt: "2022-02-13T00:09:08.496Z"
      } ,
      {
        username: 'Juston_Ruecker49',
        header: 'soluta repudiandae tempora',
        email: 'Kristian_Stanton19@yahoo.com',
        hashedPassword: '$2a$10$6OB0Kw3FDm6MP.pbfXAj6ebJE5OaNuk2gLo9aioXjcCiWzm1JhpKu',
        bio: 'Eum qui blanditiis.',
        profileImg: '/assets/images/profileImg/profilePic3.jpg',
        createdAt: "2021-02-23T23:54:44.811Z",
        updatedAt: "2021-06-17T14:49:34.103Z"
      } ,
      {
        username: 'Margarett_Ratke48',
        header: 'autem vel et',
        email: 'Ryan_Franey@yahoo.com',
        hashedPassword: '$2a$10$7bFsMvYq44k8hnNnZ4qhIer.UOjC4imF6mSLQlWDbduhDyeCc45K2',
        bio: 'Aperiam soluta omnis.',
        profileImg: '/assets/images/profileImg/profilePic4.jpg',
        createdAt: "2021-10-25T09:03:32.120Z",
        updatedAt: "2022-02-07T13:44:13.549Z"
      } ,
      {
        username: 'Helena5',
        header: 'totam rerum ducimus',
        email: 'Newton_Schulist66@gmail.com',
        hashedPassword: '$2a$10$ZvP0R5Hw0fZUfmGrvuna6uKT4QaSMlsbtXjU5hn8vXeY0Ys5UJMju',
        bio: 'Voluptates voluptates dolorem.',
        profileImg: '/assets/images/profileImg/profilePic5.jpg',
        createdAt: "2021-04-04T06:21:57.966Z",
        updatedAt: "2021-11-04T04:12:51.205Z"
      } ,
      {
        username: 'Velma34',
        header: 'quo sit corrupti',
        email: 'Raymundo_Langosh23@yahoo.com',
        hashedPassword: '$2a$10$RwL46e3iG2obHhm3.4xDVe8kQNwy1aS64uxyt/NiJkIyl8IdrEPFi',
        bio: 'Suscipit neque quasi omnis.',
        profileImg: '/assets/images/profileImg/profilePic6.jpg',
        createdAt: "2021-03-18T10:14:05.641Z",
        updatedAt: "2021-03-27T01:52:32.539Z"
      } ,
      {
        username: 'Kelley.Wiza51',
        header: 'numquam velit in',
        email: 'Tyrell63@yahoo.com',
        hashedPassword: '$2a$10$tcjUW6FO8wZ1KcRQkBHcnOd0OK0KDrHHecj6wTDkgVVjKV2G0WuvO',
        bio: 'Tenetur quis tempora possimus eos sit dolores aspernatur libero eum.',
        profileImg: '/assets/images/profileImg/profilePic1.jpg',
        createdAt: "2021-02-21T08:53:41.778Z",
        updatedAt: "2021-04-19T19:42:16.701Z"
      } ,
      {
        username: 'Owen_Bernhard27',
        header: 'quis vel veritatis',
        email: 'Brendon_Strosin26@gmail.com',
        hashedPassword: '$2a$10$KNvRvTJbZFeywyaaQ6gK1ec6mR7w2fr82QOpKUn.g6n/wO7WtTAAu',
        bio: 'Vero quos est et voluptas magni blanditiis.',
        profileImg: '/assets/images/profileImg/profilePic2.jpg',
        createdAt: "2022-02-07T21:30:32.495Z",
        updatedAt: "2021-09-23T22:16:16.385Z"
      } ,
      {
        username: 'Imelda.Maggio80',
        header: 'ea recusandae possimus',
        email: 'Domenica_Spencer24@hotmail.com',
        hashedPassword: '$2a$10$XZWNvVFPnpunpWnlDFrCR.927wyhtu3e.1G4D26Sn3tuQ3Pu2SvSG',
        bio: 'Culpa laborum minus libero nisi aut quia nesciunt quis.',
        profileImg: '/assets/images/profileImg/profilePic3.jpg',
        createdAt: "2021-03-01T13:12:46.595Z",
        updatedAt: "2021-05-23T19:46:23.001Z"
      } ,
      {
        username: 'Princess_Homenick',
        header: 'veritatis est voluptate',
        email: 'Cassandre_Volkman@yahoo.com',
        hashedPassword: '$2a$10$VlIXXuSwLkrTwWjRda2i7..ni3cTwxWAIEspF0Z3GsugvB.zMi2/m',
        bio: 'Molestiae minima deserunt.',
        profileImg: '/assets/images/profileImg/profilePic4.jpg',
        createdAt: "2021-05-06T13:23:06.131Z",
        updatedAt: "2022-02-02T10:26:34.863Z"
      } ,
      {
        username: 'Thea62',
        header: 'harum sit culpa',
        email: 'Jannie.Hayes0@gmail.com',
        hashedPassword: '$2a$10$.Doaf5bUhe.dprkaSLZEV.fPy4RxUGaBVEY8605LB6PlWoSfShZVW',
        bio: 'Autem earum autem voluptatem dolorum quasi iusto soluta molestiae sunt.',
        profileImg: '/assets/images/profileImg/profilePic5.jpg',
        createdAt: "2021-05-15T05:43:22.791Z",
        updatedAt: "2021-03-31T17:27:24.292Z"
      } ,
      {
        username: 'Russel_Sauer77',
        header: 'qui a similique',
        email: 'Tania_Hahn16@hotmail.com',
        hashedPassword: '$2a$10$.biM9pdmFLhD0OJnmwTL5.Nd/jc976Tb4Vmjg3nFUoCrfZ408pyki',
        bio: 'Cum sit et et mollitia.',
        profileImg: '/assets/images/profileImg/profilePic6.jpg',
        createdAt: "2022-01-21T13:58:21.678Z",
        updatedAt: "2022-01-01T19:46:19.558Z"
      } ,
      {
        username: 'Minnie.Willms',
        header: 'nihil quo provident',
        email: 'Juston.Emmerich78@hotmail.com',
        hashedPassword: '$2a$10$g2d4tkROCDSxPC1PbjkaW..N3lJxNUvmue/700.l6aDW5D9Y4TuLO',
        bio: 'Rerum praesentium sapiente voluptatem sit necessitatibus est excepturi quos.',
        profileImg: '/assets/images/profileImg/profilePic1.jpg',
        createdAt: "2021-05-20T23:15:02.973Z",
        updatedAt: "2021-05-11T20:10:43.222Z"
      } ,
      {
        username: 'Dejuan.Rohan',
        header: 'architecto eum et',
        email: 'Hayley_Huel20@yahoo.com',
        hashedPassword: '$2a$10$JEOMH0FNB3bNs8lWIaCw9eC64T3Hpy2ALBUyYoec5/P8qAOZg3U9W',
        bio: 'Quia vel ipsum non molestiae et id et placeat.',
        profileImg: '/assets/images/profileImg/profilePic2.jpg',
        createdAt: "2021-11-18T19:48:42.977Z",
        updatedAt: "2021-08-04T09:25:10.479Z"
      } ,
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
