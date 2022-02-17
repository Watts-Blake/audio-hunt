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
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        songName: 'Heat Waves',
        albumName: 'Dreamland',
        artistName: 'Glass Animals',
        releaseDate: '2019-4-13',
        songUrl: 'https://open.spotify.com/track/3USxtqRwSYz57Ewm6wWRMp?si=05a5635ce8b24568',
        albumImgUrl: 'https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        songName: 'abcdefu',
        albumName: 'abcdefu',
        artistName: 'GAYLE',
        releaseDate: '2021-8-13',
        songUrl: 'https://open.spotify.com/track/4fouWK6XVHhzl78KzQ1UjL?si=2a8ba3b4899e471b',
        albumImgUrl: 'https://www.gayleofficial.com/sites/g/files/g2000013701/files/2021-11/final%20feature%20artwork%20abcdefu%20copy.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        songName: 'STAY (with Justin Bieber)',
        albumName: 'STAY (with Justin Bieber)',
        artistName: 'The Kid LAROI, Justin Bieber',
        releaseDate: '2021-9-7',
        songUrl: 'https://open.spotify.com/track/4fouWK6XVHhzl78KzQ1UjL?si=aedc4b03b2924310',
        albumImgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        songName: 'Enemy (with JID) - from the series Arcane League of Legends',
        albumName: 'Enemy (with JID) - from the series Arcane League of Legends',
        artistName: 'Imagine Dragons, JID, Arcane, League of Legends',
        releaseDate: '2021-10-28',
        songUrl: 'https://open.spotify.com/track/1r9xUipOqoNwggBpENDsvJ?si=a8397641cd7e4229',
        albumImgUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Enemy_Imagine_Dragons.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        songName: 'Cold Heart - PNAU Remix',
        albumName: 'Cold Heart - PNAU Remix',
        artistName: 'Elton John, Dua Lipa, PNAU',
        releaseDate: '2021-10-12',
        songUrl: 'https://open.spotify.com/track/6zSpb8dQRaw0M1dK8PBwQz?si=1185f2c9a2644259',
        albumImgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/08/Elton_John%2C_Dua_Lipa_-_Cold_Heart.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        songName: 'INDUSTRY BABY (feat. Jack Harlow)',
        albumName: 'INDUSTRY BABY (feat. Jack Harlow)',
        artistName: 'Lil Nas X, Jack Harlow',
        releaseDate: '2021-7-23',
        songUrl: 'https://open.spotify.com/track/27NovPIUIRrOZoCHxABJwK?si=75427ab257844bdc',
        albumImgUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Lil_Nas_X_-_Industry_Baby.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        songName: 'Easy On Me',
        albumName: 'Easy On Me',
        artistName: 'Adele',
        releaseDate: '2021-10-15',
        songUrl: 'https://open.spotify.com/track/0gplL1WMoJ6iYaPgMCL0gX?si=f2208783a3af47d6',
        albumImgUrl: 'https://upload.wikimedia.org/wikipedia/en/7/76/Adele_-_30.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        songName: 'Meet Me At Our Spot',
        albumName: 'The Anxiety',
        artistName: 'The Anxiety, Willow',
        releaseDate: '2020-3-13',
        songUrl: 'https://open.spotify.com/track/07MDkzWARZaLEdKxo6yArG',
        albumImgUrl: 'https://m.media-amazon.com/images/I/719tkyFKoxS._SL1200_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        songName: 'Brividi',
        albumName: 'Brividi',
        artistName: 'Mahmood, Blanco',
        releaseDate: '2022-2-2',
        songUrl: 'https://open.spotify.com/album/06ZMpecsvvoHGWJHlc2St7',
        albumImgUrl: 'https://i.scdn.co/image/ab67616d0000b27340c172c54696d8e6028c019f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        songName: 'Shivers',
        albumName: 'Shivers',
        artistName: 'Ed Sheeran',
        releaseDate: '2021-9-10',
        songUrl: 'https://open.spotify.com/album/531c37GGv5IvddCvBv3sWT',
        albumImgUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Ed_Sheeran_-_Shivers.png',
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
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
