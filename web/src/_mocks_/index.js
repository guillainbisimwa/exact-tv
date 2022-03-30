import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// utils

const account = {
  displayName: 'Nom Postnom',
  email: 'demo@exact.tv',
  photoURL: './../assets/avatar.png'
};


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

const genre = [...Array(24)].map((_, index) => ({
  id: sample([
    1,2,3,4,5
  ]),
  label:  sample([
    "Romantique", "Action", "Glamour", "Fiction", "Film d'horreur"
  ]),
  details: faker.lorem.lines(3),
  status: faker.datatype.boolean(),
  value: faker.datatype.number(100),
  picture: faker.image.avatar(),
  stars: faker.datatype.number(5) ,
  created: faker.date.between()
})  
);

const contact = [...Array(50)].map((_, index) => ({
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

const competitions = [...Array(50)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.name.jobTitle(),
  date: faker.date.past(4, '2000-01-01T00:00:00.000Z'),
  price: faker.commerce.price(1000, 2000, 0, '$'),
  town: faker.address.cityName(),
  label: sample(["Laureat", "Vainqueur", "Participant"]),
  created: faker.date.between()
})
); 


const covers = [...Array(7)].map((_, index) => ({
  id: faker.datatype.uuid(),
  img: `./../assets/films/film-${index}.jpg`
})
);

const actors = [...Array(50)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.name.firstName() ,
  lastName: faker.name.lastName(),
  middleName: faker.name.lastName(),
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


const productionHouse = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.internet.domainWord(),
  ownerId:actors[index].id,
  founderId: actors[index].id,
  coFounders: sample([ actors[index].id, actors[index].id]),
  country: faker.address.country(),
  city: faker.address.cityName(),
  address: faker.address.streetAddress(true),
  cover: faker.image.imageUrl(600, 450),
  screenShots: sample([
    faker.image.imageUrl(200, 180), 
    faker.image.imageUrl(200, 180),
    faker.image.imageUrl(200, 180),
    faker.image.imageUrl(200, 180)]),
  contact: contact[index].id,
  details: faker.lorem.lines(4),
  status:  faker.datatype.boolean(),
  stars: faker.commerce.price(0, 5),
  created :faker.date.between()
})
)

const films = [...Array(24)].map((_, index) => ({
    id: faker.datatype.uuid(),
    title: faker.company.companyName(),
    subtitle:faker.company.bs(),
    dateAnouncement:faker.date.soon(),
    dateRelease: faker.date.soon(),
    categoryId: sample([
      "1","2","3","4","5"
    ]),
    actorId: actors[index].id,
    actorsId: sample([ actors[index].id, actors[index].id, actors[index].id, actors[index].id]),
    genreId: genre[index].id,
    userId:  actors[index].id,
    productionHouseId: productionHouse[index].id,
    productionHousesId: sample([productionHouse[index].id, productionHouse[index].id, productionHouse[index].id,]),
    urlTrailer: "https://www.youtube.com/watch?v=Uw4P646FUSI",
    urlFullFilm: "https://www.youtube.com/watch?v=Uw4P646FUSI",
    price: faker.commerce.price(100, 200, 0, '$'),
    discount: faker.commerce.price(10, 20, 0, '$'),
    cover: sample([
      `./../assets/films/film-1.jpg`,
      `./../assets/films/film-2.jpg`,
      `./../assets/films/film-3.jpg`,
      `./../assets/films/film-4.jpg`,
      `./../assets/films/film-5.jpg`,
      `./../assets/films/film-6.jpg`,
      `./../assets/films/film-7.jpg`,
    ]),
    screenShots: sample([
      faker.image.imageUrl(400, 290), 
      faker.image.imageUrl(400, 290),
      faker.image.imageUrl(400, 290),
      faker.image.imageUrl(400, 290)]),
    details: faker.lorem.paragraphs(3),
    status:  faker.datatype.boolean(),
    stars: faker.commerce.price(0, 5),
    competitions: competitions[index].id,
    created :faker.date.between()
  })
);


export  {
  account,
  films,
  covers,
  productionHouse,
  categories,
  genre,
  actors,
  contact,
  competitions
}
