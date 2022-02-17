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
    },
    {
      userId: 7,
      songId: 7,
      title: 'iste',
      shortDescription: 'nesciunt quidem officiis',
      content: 'Adipisci quae eligendi rem aliquid qui eos.',
      createdAt: '2021-07-15T17:37:10.090Z',
      updatedAt: '2021-07-03T03:29:38.729Z'
    } ,
    {
      userId: 10,
      songId: 4,
      title: 'quia',
      shortDescription: 'quisquam id quis',
      content: 'Quam qui reprehenderit et tempora distinctio.',
      createdAt: '2022-02-10T23:34:39.563Z',
      updatedAt: '2022-01-02T21:18:59.031Z'
    } ,
    {
      userId: 16,
      songId: 6,
      title: 'nobis',
      shortDescription: 'ad officia impedit',
      content: 'Hic qui et temporibus rem non.',
      createdAt: '2021-03-06T06:06:02.290Z',
      updatedAt: '2021-07-02T00:46:33.021Z'
    } ,
    {
      userId: 10,
      songId: 6,
      title: 'deleniti',
      shortDescription: 'natus et ullam',
      content: 'In rerum beatae sequi eligendi.',
      createdAt: '2021-12-17T17:18:58.234Z',
      updatedAt: '2021-02-23T00:32:02.568Z'
    } ,
    {
      userId: 7,
      songId: 6,
      title: 'repudiandae',
      shortDescription: 'commodi eos nesciunt',
      content: 'Sit et rerum provident labore corrupti magnam ratione tempore nulla.',
      createdAt: '2021-10-30T13:56:10.942Z',
      updatedAt: '2021-12-18T14:52:59.595Z'
    } ,
    {
      userId: 11,
      songId: 3,
      title: 'natus',
      shortDescription: 'illo accusantium ullam',
      content: 'Cupiditate blanditiis maiores.',
      createdAt: '2022-01-13T10:41:55.079Z',
      updatedAt: '2021-12-20T09:02:19.329Z'
    } ,
    {
      userId: 2,
      songId: 9,
      title: 'aut',
      shortDescription: 'asperiores omnis nisi',
      content: 'Est repudiandae nostrum voluptatem recusandae sapiente.',
      createdAt: '2021-03-19T21:08:20.724Z',
      updatedAt: '2021-10-28T23:47:54.668Z'
    } ,
    {
      userId: 10,
      songId: 1,
      title: 'nulla',
      shortDescription: 'corrupti blanditiis aut',
      content: 'Perferendis quibusdam pariatur culpa laboriosam voluptas et deleniti deleniti dolores.',
      createdAt: '2021-12-13T05:38:24.349Z',
      updatedAt: '2021-12-18T12:37:32.739Z'
    } ,
    {
      userId: 1,
      songId: 7,
      title: 'veniam',
      shortDescription: 'et totam dolor',
      content: 'Iusto sapiente nihil perspiciatis laudantium.',
      createdAt: '2021-06-20T07:58:53.925Z',
      updatedAt: '2021-09-17T12:57:18.385Z'
    } ,
    {
      userId: 5,
      songId: 10,
      title: 'deleniti',
      shortDescription: 'dolores eius et',
      content: 'Et sint accusantium non molestiae id culpa maxime.',
      createdAt: '2022-02-05T10:59:28.647Z',
      updatedAt: '2021-05-24T13:21:45.589Z'
    } ,
    {
      userId: 8,
      songId: 1,
      title: 'perspiciatis',
      shortDescription: 'molestiae maiores consequatur',
      content: 'Blanditiis maxime voluptas.',
      createdAt: '2021-10-24T08:46:45.863Z',
      updatedAt: '2021-04-07T17:06:42.209Z'
    } ,
    {
      userId: 21,
      songId: 10,
      title: 'ipsam',
      shortDescription: 'consequatur necessitatibus voluptatem',
      content: 'Velit facere quia natus voluptatem maxime voluptatem ducimus modi consequatur.',
      createdAt: '2021-12-07T18:43:01.281Z',
      updatedAt: '2021-03-25T19:33:53.318Z'
    } ,
    {
      userId: 10,
      songId: 1,
      title: 'autem',
      shortDescription: 'qui ea fuga',
      content: 'Dignissimos velit rem doloribus sunt est odit quis autem.',
      createdAt: '2022-01-20T03:34:27.704Z',
      updatedAt: '2022-01-10T00:52:24.767Z'
    } ,
    {
      userId: 3,
      songId: 5,
      title: 'nihil',
      shortDescription: 'eos sapiente itaque',
      content: 'Et ipsam nulla eos molestiae nihil et totam.',
      createdAt: '2021-10-16T05:02:12.713Z',
      updatedAt: '2021-11-15T11:22:39.055Z'
    } ,
    {
      userId: 6,
      songId: 1,
      title: 'sint',
      shortDescription: 'ut veniam qui',
      content: 'Impedit numquam maxime ea reiciendis sed provident.',
      createdAt: '2021-06-12T02:03:28.230Z',
      updatedAt: '2021-10-11T14:39:09.050Z'
    } ,
    {
      userId: 14,
      songId: 7,
      title: 'nobis',
      shortDescription: 'nesciunt eos laboriosam',
      content: 'Aut neque rerum aperiam eligendi ipsa aut.',
      createdAt: '2021-02-19T18:16:21.067Z',
      updatedAt: '2021-05-31T04:06:13.295Z'
    } ,
    {
      userId: 10,
      songId: 10,
      title: 'voluptas',
      shortDescription: 'eveniet quisquam modi',
      content: 'Veniam quia error sed ullam non laborum.',
      createdAt: '2021-05-19T07:11:40.137Z',
      updatedAt: '2021-08-29T17:22:31.252Z'
    } ,
    {
      userId: 16,
      songId: 8,
      title: 'inventore',
      shortDescription: 'iste et ut',
      content: 'Qui et et temporibus.',
      createdAt: '2022-01-29T16:56:01.391Z',
      updatedAt: '2021-11-01T15:17:13.946Z'
    } ,
    {
      userId: 6,
      songId: 8,
      title: 'aut',
      shortDescription: 'qui voluptatum iure',
      content: 'Exercitationem dolores reiciendis.',
      createdAt: '2021-07-10T11:40:00.213Z',
      updatedAt: '2021-12-31T07:52:29.680Z'
    } ,
    {
      userId: 5,
      songId: 8,
      title: 'autem',
      shortDescription: 'nostrum ut aspernatur',
      content: 'Laboriosam est iure natus est voluptatem.',
      createdAt: '2021-11-15T08:03:55.730Z',
      updatedAt: '2021-04-05T06:59:22.298Z'
    } ,
  ], {});
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
