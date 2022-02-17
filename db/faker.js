const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');

// const randomNumber = num => Math.floor(Math.random) * Math.floor(num) +

const imgs = [
    "/assets/images/profileImg/profilePic1.jpg",
    "/assets/images/profileImg/profilePic2.jpg",
    "/assets/images/profileImg/profilePic3.jpg",
    "/assets/images/profileImg/profilePic4.jpg",
    "/assets/images/profileImg/profilePic5.jpg",
    "/assets/images/profileImg/profilePic6.jpg",
]

const imgPicker = (i, imgs) => {
    let imgAt = i % imgs.length
    return imgs[imgAt];
}

const fakeDate = () => {
    const date = faker.date.past();

    return `${date}`
}

// fakeDate();

const seedUsers = num => {
    let i = 0;

    while(i < num) {
        const user = {
            username: faker.internet.userName(),
            header: faker.lorem.words(),
            email: faker.internet.email(),
            hashedPassword: bcrypt.hashSync(faker.internet.password()),
            bio: faker.lorem.sentence(),
            profileImg: imgPicker(i, imgs),
            createdAt: fakeDate(),
            updatedAt: fakeDate(),
        }
        console.log(user, ',')
        i++
    }

}

seedUsers(20);


// SONG SEEDS
