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
  title: faker.company.companyName,
  subtitle:faker.company.bs(),
  dateAnouncement:faker.date.soon(),
  dateRelease: faker.date.soon(),
  categoryId: sample([
    "1","2","3","4","5"
  ]), // #
  actorId: "String",
  actorsId: "[]",
  genreId: "String", // #
  userId: sample([

  ]),
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
}

export  {
  users,
  account
}
