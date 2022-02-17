'use strict';


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
      {
        userId: 5,
        postId: 8,
        content: 'Iste quo ut repudiandae qui.',
        createdAt: '2021-06-19T12:12:58.938Z',
        updatedAt: '2021-08-10T22:55:02.285Z'
      } ,
      {
        userId: 13,
        postId: 14,
        content: 'Fuga et necessitatibus.',
        createdAt: '2021-12-18T13:11:24.296Z',
        updatedAt: '2021-02-21T12:29:21.442Z'
      } ,
      {
        userId: 13,
        postId: 1,
        content: 'Nisi maxime nisi libero sint cum dolorem doloribus nam accusamus.',
        createdAt: '2021-11-22T13:56:52.828Z',
        updatedAt: '2021-07-01T20:24:24.558Z'
      } ,
      {
        userId: 20,
        postId: 10,
        content: 'Maxime magni sit non.',
        createdAt: '2021-05-01T05:11:57.836Z',
        updatedAt: '2021-11-26T15:09:04.012Z'
      } ,
      {
        userId: 1,
        postId: 9,
        content: 'Quo quis eius qui praesentium eaque excepturi.',
        createdAt: '2021-08-08T06:46:16.465Z',
        updatedAt: '2022-01-18T18:24:21.350Z'
      } ,
      {
        userId: 21,
        postId: 19,
        content: 'Qui tempora iusto maxime et.',
        createdAt: '2021-03-30T03:12:03.365Z',
        updatedAt: '2021-11-02T12:03:31.488Z'
      } ,
      {
        userId: 2,
        postId: 9,
        content: 'Eos laborum ea.',
        createdAt: '2021-07-14T01:03:33.886Z',
        updatedAt: '2021-06-05T05:27:30.573Z'
      } ,
      {
        userId: 14,
        postId: 6,
        content: 'Corporis nemo nihil error quam eos veritatis aut.',
        createdAt: '2021-12-05T06:27:33.722Z',
        updatedAt: '2022-01-15T06:46:06.195Z'
      } ,
      {
        userId: 21,
        postId: 11,
        content: 'Non itaque tempora architecto eaque aut aliquam voluptatem vitae.',
        createdAt: '2021-04-02T08:37:20.428Z',
        updatedAt: '2021-04-26T21:17:28.611Z'
      } ,
      {
        userId: 16,
        postId: 17,
        content: 'Explicabo aut quos ut perspiciatis ipsum voluptatem accusantium necessitatibus.',
        createdAt: '2021-08-03T18:39:03.882Z',
        updatedAt: '2021-09-02T23:10:30.673Z'
      } ,
      {
        userId: 5,
        postId: 16,
        content: 'Dolore recusandae iste itaque tempora beatae non praesentium consequatur.',
        createdAt: '2021-09-17T21:06:43.115Z',
        updatedAt: '2021-05-29T09:05:37.698Z'
      } ,
      {
        userId: 7,
        postId: 16,
        content: 'Temporibus molestias quo enim ipsam.',
        createdAt: '2021-05-26T00:05:04.738Z',
        updatedAt: '2021-08-14T03:35:46.145Z'
      } ,
      {
        userId: 7,
        postId: 18,
        content: 'Voluptatem quo ut itaque et ipsum dolorem vel.',
        createdAt: '2021-07-06T00:25:53.474Z',
        updatedAt: '2021-05-10T20:05:44.044Z'
      } ,
      {
        userId: 9,
        postId: 18,
        content: 'Voluptas nemo omnis et sed et minus sint.',
        createdAt: '2022-01-16T20:32:27.766Z',
        updatedAt: '2022-01-18T03:01:40.846Z'
      } ,
      {
        userId: 20,
        postId: 11,
        content: 'Consequatur eaque minus aliquam numquam impedit suscipit nisi.',
        createdAt: '2021-07-09T14:09:13.167Z',
        updatedAt: '2021-10-07T00:48:32.472Z'
      } ,
      {
        userId: 6,
        postId: 10,
        content: 'Quibusdam consequuntur voluptatem maxime labore sed quidem qui qui ipsam.',
        createdAt: '2021-05-04T08:53:01.105Z',
        updatedAt: '2022-01-18T23:39:27.529Z'
      } ,
      {
        userId: 1,
        postId: 11,
        content: 'Ab dignissimos suscipit ex aliquid ut fuga.',
        createdAt: '2021-09-05T21:21:52.598Z',
        updatedAt: '2021-07-02T17:06:17.872Z'
      } ,
      {
        userId: 6,
        postId: 7,
        content: 'Autem molestiae quisquam sunt voluptates enim itaque similique ea.',
        createdAt: '2021-04-30T17:46:18.444Z',
        updatedAt: '2021-08-30T04:26:08.221Z'
      } ,
      {
        userId: 3,
        postId: 17,
        content: 'Suscipit iusto quasi eos quia eius recusandae qui qui quaerat.',
        createdAt: '2021-09-16T17:20:46.609Z',
        updatedAt: '2021-10-01T12:11:44.660Z'
      } ,
      {
        userId: 10,
        postId: 19,
        content: 'Quod eaque doloribus nisi excepturi consectetur deleniti et molestias.',
        createdAt: '2021-04-04T13:37:56.213Z',
        updatedAt: '2021-02-25T00:55:24.879Z'
      } ,
      {
        userId: 2,
        postId: 10,
        content: 'Quia quam tempora vitae.',
        createdAt: '2021-06-27T07:55:05.421Z',
        updatedAt: '2021-05-05T07:22:00.189Z'
      } ,
      {
        userId: 13,
        postId: 3,
        content: 'Et itaque atque enim aliquid in excepturi quis quo corporis.',
        createdAt: '2021-11-17T17:25:48.764Z',
        updatedAt: '2021-11-03T14:16:51.636Z'
      } ,
      {
        userId: 21,
        postId: 1,
        content: 'Nihil ut unde.',
        createdAt: '2021-12-07T14:26:46.808Z',
        updatedAt: '2021-08-09T20:06:04.006Z'
      } ,
      {
        userId: 11,
        postId: 7,
        content: 'Facere sit quis.',
        createdAt: '2021-12-15T01:51:04.447Z',
        updatedAt: '2021-09-23T07:25:55.301Z'
      } ,
      {
        userId: 21,
        postId: 19,
        content: 'Natus qui voluptatibus impedit et officia quam sed animi natus.',
        createdAt: '2021-11-22T22:53:00.023Z',
        updatedAt: '2021-08-13T14:25:25.915Z'
      } ,
      {
        userId: 4,
        postId: 1,
        content: 'Quis voluptatum illum magni omnis cupiditate minus reprehenderit consectetur.',
        createdAt: '2021-05-07T07:11:01.761Z',
        updatedAt: '2021-08-06T20:38:36.216Z'
      } ,
      {
        userId: 13,
        postId: 7,
        content: 'Nemo unde laudantium et facilis commodi aut et provident.',
        createdAt: '2021-03-26T08:42:46.193Z',
        updatedAt: '2021-07-05T04:36:11.548Z'
      } ,
      {
        userId: 20,
        postId: 9,
        content: 'Et ut dolore.',
        createdAt: '2021-12-08T15:42:06.990Z',
        updatedAt: '2021-11-04T09:46:09.041Z'
      } ,
      {
        userId: 15,
        postId: 16,
        content: 'Ut eum autem dolorum id molestiae ut asperiores.',
        createdAt: '2021-03-07T03:10:13.748Z',
        updatedAt: '2021-08-05T13:01:17.573Z'
      } ,
      {
        userId: 16,
        postId: 13,
        content: 'Voluptate corrupti atque sed vitae consequatur dolore reprehenderit earum.',
        createdAt: '2022-01-23T06:08:49.656Z',
        updatedAt: '2021-12-31T14:48:50.314Z'
      } ,
      {
        userId: 21,
        postId: 16,
        content: 'Ut quo id et sit occaecati enim nostrum quo.',
        createdAt: '2021-03-25T12:28:34.382Z',
        updatedAt: '2022-01-05T04:21:49.649Z'
      } ,
      {
        userId: 16,
        postId: 15,
        content: 'Mollitia consectetur et aut rerum occaecati id itaque.',
        createdAt: '2021-12-03T03:27:39.618Z',
        updatedAt: '2021-06-04T11:33:35.286Z'
      } ,
      {
        userId: 3,
        postId: 16,
        content: 'Distinctio modi voluptas sunt nam similique aperiam atque.',
        createdAt: '2021-07-24T22:54:54.887Z',
        updatedAt: '2022-02-09T17:51:48.014Z'
      } ,
      {
        userId: 20,
        postId: 14,
        content: 'Reiciendis inventore voluptatem eos neque mollitia vel enim rerum.',
        createdAt: '2022-01-03T03:40:04.756Z',
        updatedAt: '2021-12-03T05:19:27.843Z'
      } ,
      {
        userId: 15,
        postId: 12,
        content: 'Et beatae iste.',
        createdAt: '2021-10-09T11:29:50.967Z',
        updatedAt: '2021-09-22T17:38:31.161Z'
      } ,
      {
        userId: 1,
        postId: 18,
        content: 'Ad minima et.',
        createdAt: '2021-07-25T12:25:50.693Z',
        updatedAt: '2021-07-09T23:26:41.452Z'
      } ,
      {
        userId: 10,
        postId: 11,
        content: 'Minima aut id molestiae adipisci.',
        createdAt: '2022-02-03T23:49:45.576Z',
        updatedAt: '2021-12-17T12:46:42.944Z'
      } ,
      {
        userId: 7,
        postId: 6,
        content: 'Molestias consequuntur voluptatem cum sint nobis rerum.',
        createdAt: '2022-02-03T09:42:39.864Z',
        updatedAt: '2021-12-09T10:55:48.133Z'
      } ,
      {
        userId: 1,
        postId: 13,
        content: 'Quaerat officiis vitae molestiae velit numquam beatae magnam.',
        createdAt: '2021-08-18T21:11:03.822Z',
        updatedAt: '2021-12-05T18:15:28.555Z'
      } ,
      {
        userId: 4,
        postId: 2,
        content: 'Officiis qui dolore dolor.',
        createdAt: '2022-02-09T06:14:22.590Z',
        updatedAt: '2021-07-13T20:19:36.943Z'
      } ,
      {
        userId: 13,
        postId: 1,
        content: 'Quos dolore magni exercitationem asperiores.',
        createdAt: '2021-09-04T01:49:05.773Z',
        updatedAt: '2021-10-24T02:42:00.352Z'
      } ,
      {
        userId: 1,
        postId: 14,
        content: 'Possimus voluptas pariatur et.',
        createdAt: '2021-12-12T17:44:49.047Z',
        updatedAt: '2021-10-01T06:01:56.778Z'
      } ,
      {
        userId: 2,
        postId: 8,
        content: 'Inventore fugiat voluptas quo omnis tempora atque repudiandae similique ullam.',
        createdAt: '2021-10-25T21:27:39.589Z',
        updatedAt: '2022-01-18T06:14:02.607Z'
      } ,
      {
        userId: 19,
        postId: 12,
        content: 'Sequi ab quae ea consequatur aliquam ipsa laborum natus et.',
        createdAt: '2021-05-22T07:56:11.714Z',
        updatedAt: '2021-10-31T15:59:02.630Z'
      } ,
      {
        userId: 8,
        postId: 15,
        content: 'Exercitationem minus aut beatae iusto tempore rerum.',
        createdAt: '2021-04-07T13:22:17.103Z',
        updatedAt: '2022-01-04T04:49:08.692Z'
      } ,
      {
        userId: 19,
        postId: 7,
        content: 'Voluptatum aut architecto.',
        createdAt: '2021-12-31T08:04:26.906Z',
        updatedAt: '2022-01-09T13:26:38.169Z'
      } ,
      {
        userId: 16,
        postId: 17,
        content: 'Distinctio nihil iure at dolorum et aperiam asperiores.',
        createdAt: '2021-02-24T21:12:22.774Z',
        updatedAt: '2021-06-07T03:20:44.992Z'
      } ,
      {
        userId: 1,
        postId: 18,
        content: 'Sit voluptatibus et pariatur.',
        createdAt: '2022-01-13T13:45:14.352Z',
        updatedAt: '2021-09-27T08:22:37.978Z'
      } ,
      {
        userId: 4,
        postId: 12,
        content: 'Temporibus suscipit unde incidunt.',
        createdAt: '2021-08-29T11:59:21.575Z',
        updatedAt: '2021-03-27T10:54:49.251Z'
      } ,
      {
        userId: 7,
        postId: 11,
        content: 'Eos autem omnis repellat.',
        createdAt: '2021-03-11T17:57:51.657Z',
        updatedAt: '2021-06-30T13:26:27.153Z'
      } ,
      {
        userId: 10,
        postId: 14,
        content: 'Sed eaque impedit eum architecto a exercitationem debitis.',
        createdAt: '2021-05-20T06:26:51.450Z',
        updatedAt: '2021-06-18T12:23:28.860Z'
      } ,
      {
        userId: 15,
        postId: 17,
        content: 'Consequatur dolor et illum dolore sed quae ratione aut.',
        createdAt: '2022-01-14T07:41:17.765Z',
        updatedAt: '2021-07-14T19:39:56.542Z'
      } ,
      {
        userId: 16,
        postId: 9,
        content: 'Sed sequi blanditiis reprehenderit.',
        createdAt: '2021-09-05T02:49:53.809Z',
        updatedAt: '2021-03-03T08:48:14.719Z'
      } ,
      {
        userId: 16,
        postId: 14,
        content: 'Quia quo voluptatem possimus aliquid eaque.',
        createdAt: '2021-10-06T08:03:24.049Z',
        updatedAt: '2021-10-02T06:30:42.894Z'
      } ,
      {
        userId: 13,
        postId: 13,
        content: 'Sed natus quia aperiam ducimus rem non voluptatem.',
        createdAt: '2021-08-22T21:13:31.003Z',
        updatedAt: '2021-04-07T15:22:19.269Z'
      } ,
      {
        userId: 1,
        postId: 19,
        content: 'Vitae ex qui velit totam quia eligendi facilis voluptas.',
        createdAt: '2021-06-28T18:13:55.635Z',
        updatedAt: '2021-05-19T15:41:34.894Z'
      } ,
      {
        userId: 13,
        postId: 12,
        content: 'Ad incidunt iste dolorum est sint qui dolore at ex.',
        createdAt: '2021-05-15T00:57:38.188Z',
        updatedAt: '2021-11-02T20:06:48.299Z'
      } ,
      {
        userId: 2,
        postId: 18,
        content: 'Ullam asperiores consectetur.',
        createdAt: '2021-12-06T21:36:19.548Z',
        updatedAt: '2021-12-06T02:20:49.656Z'
      } ,
      {
        userId: 16,
        postId: 11,
        content: 'Reiciendis et eius voluptatem quisquam.',
        createdAt: '2021-05-01T07:13:54.191Z',
        updatedAt: '2021-02-26T00:22:28.210Z'
      } ,
      {
        userId: 16,
        postId: 9,
        content: 'Nostrum tempora eveniet beatae accusantium.',
        createdAt: '2021-12-11T02:55:50.775Z',
        updatedAt: '2021-11-21T13:39:14.158Z'
      } ,
      {
        userId: 1,
        postId: 2,
        content: 'Placeat libero non itaque temporibus ab aspernatur iusto quis.',
        createdAt: '2021-11-25T08:19:06.340Z',
        updatedAt: '2021-09-24T12:36:57.959Z'
      } ,
      {
        userId: 1,
        postId: 16,
        content: 'Saepe nisi asperiores nisi iure soluta quaerat aut.',
        createdAt: '2022-01-12T04:50:08.920Z',
        updatedAt: '2021-04-24T09:19:24.909Z'
      } ,
      {
        userId: 4,
        postId: 17,
        content: 'Delectus sequi blanditiis natus ut.',
        createdAt: '2021-11-21T07:41:35.925Z',
        updatedAt: '2021-12-04T00:43:56.159Z'
      } ,
      {
        userId: 16,
        postId: 9,
        content: 'Et in mollitia deserunt aut temporibus.',
        createdAt: '2021-12-24T12:05:12.293Z',
        updatedAt: '2021-10-02T14:55:57.489Z'
      } ,
      {
        userId: 8,
        postId: 1,
        content: 'Qui dolore tenetur.',
        createdAt: '2021-05-31T10:52:39.224Z',
        updatedAt: '2021-05-01T12:24:52.566Z'
      } ,
      {
        userId: 10,
        postId: 15,
        content: 'Vel consequuntur magnam deserunt natus.',
        createdAt: '2021-11-02T18:26:54.623Z',
        updatedAt: '2021-11-02T13:27:42.059Z'
      } ,
      {
        userId: 2,
        postId: 2,
        content: 'Vitae labore ut nostrum libero tempora ratione.',
        createdAt: '2021-10-17T09:03:06.173Z',
        updatedAt: '2021-09-10T17:05:12.748Z'
      } ,
      {
        userId: 13,
        postId: 16,
        content: 'Eligendi beatae magni id quam dolorem deserunt autem aut est.',
        createdAt: '2022-02-13T02:27:29.817Z',
        updatedAt: '2021-08-03T05:56:35.225Z'
      } ,
      {
        userId: 17,
        postId: 10,
        content: 'Quaerat quas cum similique voluptates.',
        createdAt: '2021-06-23T03:58:49.628Z',
        updatedAt: '2021-11-10T20:40:20.309Z'
      } ,
      {
        userId: 13,
        postId: 6,
        content: 'Ut rerum vel rerum nesciunt impedit praesentium ut.',
        createdAt: '2022-01-07T15:22:27.885Z',
        updatedAt: '2021-03-15T08:06:30.708Z'
      } ,
      {
        userId: 1,
        postId: 3,
        content: 'Ea nesciunt suscipit et possimus doloribus deserunt at eum.',
        createdAt: '2021-03-31T20:56:30.608Z',
        updatedAt: '2021-10-08T07:39:55.712Z'
      } ,
      {
        userId: 21,
        postId: 10,
        content: 'Exercitationem placeat occaecati totam.',
        createdAt: '2022-01-13T04:25:34.647Z',
        updatedAt: '2021-07-21T20:50:07.638Z'
      } ,
      {
        userId: 14,
        postId: 10,
        content: 'Cumque autem ut tempora facere aut rerum.',
        createdAt: '2021-08-09T16:19:35.027Z',
        updatedAt: '2021-09-30T10:12:09.007Z'
      } ,
      {
        userId: 16,
        postId: 19,
        content: 'Excepturi eligendi illum.',
        createdAt: '2021-10-04T00:14:53.977Z',
        updatedAt: '2022-02-03T01:46:57.552Z'
      } ,
      {
        userId: 9,
        postId: 13,
        content: 'Et libero nobis dolores quidem quam.',
        createdAt: '2021-09-12T15:29:37.873Z',
        updatedAt: '2021-11-11T19:27:34.474Z'
      } ,
      {
        userId: 5,
        postId: 19,
        content: 'Vero perspiciatis voluptates cumque est nihil necessitatibus minima est ut.',
        createdAt: '2021-08-17T04:19:52.111Z',
        updatedAt: '2021-04-16T10:41:08.333Z'
      } ,
      {
        userId: 6,
        postId: 1,
        content: 'Ut quidem quisquam soluta perferendis.',
        createdAt: '2021-05-16T02:29:39.895Z',
        updatedAt: '2021-04-08T05:27:09.359Z'
      } ,
      {
        userId: 1,
        postId: 5,
        content: 'Excepturi eum sunt officiis recusandae voluptate doloribus non.',
        createdAt: '2021-12-15T14:57:38.644Z',
        updatedAt: '2021-07-16T13:07:08.605Z'
      } ,
      {
        userId: 1,
        postId: 19,
        content: 'Quisquam delectus quo et praesentium ut.',
        createdAt: '2021-09-21T02:20:04.462Z',
        updatedAt: '2021-11-12T16:11:31.582Z'
      } ,
      {
        userId: 8,
        postId: 3,
        content: 'Laudantium est velit aut excepturi quod ipsa.',
        createdAt: '2021-11-21T05:52:25.795Z',
        updatedAt: '2021-08-06T05:35:07.746Z'
      } ,
      {
        userId: 6,
        postId: 3,
        content: 'Nam quisquam occaecati earum.',
        createdAt: '2021-06-28T01:12:24.130Z',
        updatedAt: '2021-03-27T11:02:08.757Z'
      } ,
      {
        userId: 7,
        postId: 10,
        content: 'Molestiae delectus unde nulla numquam hic porro sequi quia.',
        createdAt: '2021-11-24T05:38:58.958Z',
        updatedAt: '2021-05-01T15:41:01.708Z'
      } ,
      {
        userId: 20,
        postId: 5,
        content: 'Facere ut ab eum consectetur eligendi pariatur rem porro.',
        createdAt: '2021-08-26T09:12:22.491Z',
        updatedAt: '2021-04-02T05:15:48.788Z'
      } ,
      {
        userId: 8,
        postId: 7,
        content: 'Animi quia illum laudantium.',
        createdAt: '2021-06-21T09:50:34.048Z',
        updatedAt: '2021-12-08T11:14:57.327Z'
      } ,
      {
        userId: 6,
        postId: 13,
        content: 'Animi minus reiciendis est qui itaque nihil et.',
        createdAt: '2022-02-06T11:12:24.120Z',
        updatedAt: '2021-07-14T08:05:12.494Z'
      } ,
      {
        userId: 13,
        postId: 6,
        content: 'Architecto architecto eveniet a.',
        createdAt: '2022-02-11T11:44:04.237Z',
        updatedAt: '2021-10-10T03:03:09.177Z'
      } ,
      {
        userId: 7,
        postId: 2,
        content: 'Ipsum molestias eligendi ad voluptatem at sed.',
        createdAt: '2021-11-22T04:54:16.411Z',
        updatedAt: '2021-09-25T21:06:03.829Z'
      } ,
      {
        userId: 16,
        postId: 1,
        content: 'Aut quis ex accusamus ipsam distinctio exercitationem laudantium accusamus dolorem.',
        createdAt: '2022-01-26T14:03:34.543Z',
        updatedAt: '2021-03-24T21:37:07.326Z'
      } ,
      {
        userId: 6,
        postId: 10,
        content: 'Autem dolor non eius.',
        createdAt: '2021-12-21T01:47:53.612Z',
        updatedAt: '2021-09-11T21:56:12.166Z'
      } ,
      {
        userId: 12,
        postId: 10,
        content: 'Porro consequuntur consequatur rerum ut ipsa provident est ut.',
        createdAt: '2021-11-02T03:28:21.820Z',
        updatedAt: '2021-10-19T00:23:10.424Z'
      } ,
      {
        userId: 2,
        postId: 8,
        content: 'Aut ipsum dolores blanditiis aut odit.',
        createdAt: '2021-07-25T06:14:25.892Z',
        updatedAt: '2021-05-12T02:00:09.735Z'
      } ,
      {
        userId: 11,
        postId: 4,
        content: 'Dolorem ea error perspiciatis asperiores rerum vero.',
        createdAt: '2021-08-10T22:03:16.682Z',
        updatedAt: '2021-05-01T03:49:21.076Z'
      } ,
      {
        userId: 15,
        postId: 17,
        content: 'Sed quidem odio voluptas optio et.',
        createdAt: '2021-12-15T22:12:06.471Z',
        updatedAt: '2022-01-01T06:03:49.171Z'
      } ,
      {
        userId: 8,
        postId: 10,
        content: 'Eligendi quae aut aut est odio totam.',
        createdAt: '2021-04-20T02:00:13.056Z',
        updatedAt: '2021-09-08T12:47:39.663Z'
      } ,
      {
        userId: 9,
        postId: 15,
        content: 'Iure accusantium alias architecto dolor numquam quam.',
        createdAt: '2021-12-10T17:22:33.427Z',
        updatedAt: '2021-10-25T02:22:47.092Z'
      } ,
      {
        userId: 15,
        postId: 4,
        content: 'Architecto est eveniet voluptas ullam ad voluptatem.',
        createdAt: '2021-03-28T05:55:02.922Z',
        updatedAt: '2021-12-11T22:43:53.898Z'
      } ,
      {
        userId: 9,
        postId: 9,
        content: 'Officia explicabo in quisquam sunt labore corrupti quo.',
        createdAt: '2021-08-31T19:45:35.823Z',
        updatedAt: '2021-07-24T00:30:08.429Z'
      } ,
      {
        userId: 17,
        postId: 6,
        content: 'Modi enim iste.',
        createdAt: '2021-08-06T08:30:17.714Z',
        updatedAt: '2021-12-11T23:30:59.751Z'
      } ,
      {
        userId: 15,
        postId: 10,
        content: 'Nihil explicabo nihil.',
        createdAt: '2021-11-15T05:43:13.699Z',
        updatedAt: '2021-07-22T19:26:22.313Z'
      } ,
      {
        userId: 17,
        postId: 11,
        content: 'Dolore illum debitis voluptatem qui dolores unde dolorem ad.',
        createdAt: '2021-07-17T05:30:12.256Z',
        updatedAt: '2021-03-13T15:09:43.031Z'
      } ,
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
