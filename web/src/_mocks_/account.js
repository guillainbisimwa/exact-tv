import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

const account = {
  displayName: 'Nom Postnom',
  email: 'demo@exact.tv',
  photoURL: './../assets/avatar.png'
};


const films = [...Array(24)].map((_, index) => ({
    id: faker.datatype.uuid(),
    title: faker.company.companyName(),
    subtitle:faker.company.bs(),
    dateAnouncement:faker.date.soon(),
    dateRelease: faker.date.soon(),
    categoryId: sample([
      "1","2","3","4","5"
    ]), // #
    actorId: actors[index].id,
    actorsId: "[]",
    genreId: "String", // #
    userId: "",
    productionHouseId: "String",
    productionHousesId: "[]",
    urlTrailer: "String",
    urlFullFilm: "String",
    price: faker.commerce.price(100, 200, 0, '$'),
    discount: faker.commerce.price(10, 20, 0, '$'),
    cover: "String",
    screenShots: "[]",
    details: "String",
    status: "Number", 
    stars: faker.commerce.price(0, 5),
    competitions: "[]", // TODO {name, date, town, price}
    created :faker.date.between()
  })
);

const categories = [...Array(5)].map((_, index) => ({
    id: sample([
      1,2,3,4,5
    ]),
    label:  sample([
      "Film", "Comedie", "Serie", "Court metrage", "Documentaire"
    ]),
    details: faker.lorem.lines(3),
    status: faker.datatype.boolean(),
    value: faker.datatype.number(100),
    picture: faker.image.avatar(),
    stars: faker.datatype.number(5) ,
    created: faker.date.between()
  })
);

const actors = [...Array(50)].map((_, index) => ({
    id: faker.datatype.uuid(),
    name: faker.name.firstName() ,
    lastName: faker.name.lastName(),
    middleName: faker.name.lastName(),
    // password: String,
    country: faker.address.country(),
    sex: faker.name.gender(true) ,
    dateBirth: faker.date.past(40, '2000-01-01T00:00:00.000Z'),
    biography: faker.lorem.paragraphs(5),
    profilePicture: faker.image.avatar(),
    screenShots: sample([
      faker.image.imageUrl(200, 180), 
      faker.image.imageUrl(200, 180),
      faker.image.imageUrl(200, 180),
      faker.image.imageUrl(200, 180)]),
    status:  faker.datatype.boolean(),
    stars: faker.datatype.number(5),
    contact: contact[index].id,
    competitions: competitions[index].id,
    created: faker.date.between()
  })
); 


const contact = [...Array(10)].map((_, index) => ({
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber('+243 9# ### ## ##'),
    twitter: faker.name.lastName(),
    FaceBook: faker.name.lastName(),
    web: faker.internet.domainName(),
    Youtube: faker.internet.url() ,
    created: faker.date.between()
  })
); 

const competitions = [...Array(10)].map((_, index) => ({
    id: faker.datatype.uuid(),
    name: faker.name.jobTitle(),
    date: faker.date.past(4, '2000-01-01T00:00:00.000Z'),
    price: faker.commerce.price(1000, 2000, 0, '$'),
    town: faker.address.cityName(),
    label: sample(["Laureat", "Vainqueur", "Participant"]),
    created: faker.date.between()
  })
); 


export  {
  categories,
  films,
  account
}
