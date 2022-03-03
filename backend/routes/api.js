const router = require('express').Router();
const Actor = require('../models/actor.model');
const Category = require('../models/category.model');
const Film = require('../models/film.model');
const Genre = require('../models/genre.model');
const ProductionHouse = require('../models/productionHouse.model');
const Profile = require('../models/profile.model');

var bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send('API works perfectly ...');
});

// Fetch All Actors
router.get('/actors', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Actor.find()
        .then(actors => res.json(actors))
        .catch(err => res.status(400).json({error_message:err}));
});

// Fetch an Actor by id
router.get('/actor/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Actor.findById(req.params.id)
        .then(actor => res.json(actor))
        .catch(err => res.status(400).json({error_message:err}));
});


// Post Actor
router.post('/actor', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    
    const {
        name,
        lastName,
        nickName,
        country,
        password,
        sex,
        dateBirth,
        biography,
        profilePicture,
        screenShots,
        status,
        stars,
        contact,
        competitions
    } = req.body;

    if(!name) res.status(400).send({error_message: 'A name cannot be empty'});
    await Actor.findOne({name}) // find the user by email
        .then(actor => {
            if(actor){ // if the user doen't exit with this email 
                res.status(400).send({error_message: 'This name is already used!'});
            }else{
                const newActor = new Actor({  
                    name,
                    lastName,
                    nickName,
                    country,
                    //password,
                    sex,
                    dateBirth,
                    biography,
                    profilePicture,
                    screenShots,
                    status,
                    stars,
                    contact,
                    competitions 
                });

                const profile = new Profile({  
                    actorId,
                    name,
                    password,
                    token
                });

                // chiffrer le password
                bcrypt.genSalt(10, (err, salt) => {
                    if(err) throw err;
                    bcrypt.hash(profile.password, salt, (err, hash) => { // hashing the password
                        if(err) throw err;
                        profile.password = hash; // passing the hashed password to the user model

                        newActor.save()
                            .then(user => {
                                // process for jwt generating token 
                                jwt.sign( 
                                    {id: user.id},
                                    process.env.SECRET_KEY,
                                    {expiresIn: 3600},
                                    (err, token) => {
                                        if(err) throw err;
                                        // return token, phone and password
                                        profile.token = token;
                                        profile.name = name;
                                        profile.actorId =  user.id;
                                        profile.save()
                                            .then(saveItem => {
                                                res.json({
                                                    token, 
                                                    user:{
                                                        id: user.id,
                                                        name: user.name,
                                                    }
                                                });
                                            })
                                            .catch(err => res.status(400).json({error_message:err}));
                                       
                                    }
                                 )
                            })
                            .catch(err => res.status(400).send({error_message: err}));

                    });
                });
            }
        })
    .catch(err => res.status(400).send({error_message: err}));
});

// sign in
router.post('/signin', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const { name, password, token } = req.body;

    if(!name || !password) { // if the fields remain empty
        res.status(400).send({error_message: "The name or the password cannot be empty"});
        return
    }

    await Profile.findOne({token}) // find user by his email
        .then(profile => {
                bcrypt.compare(password, profile.password) // comparing password
                    .then(success => {
                        if(!success) res.status(400).send({error_message: "Your password is incorrect"});

                        // generating token when the login is successfull
                        jwt.sign(
                            {id: profile.actorId},
                            process.env.SECRET_KEY,
                            {expiresIn: 3600},
                            (err, token) => {
                                if(err) throw err;
                                // TODO: Update Token Here!
                                res.json({
                                    token,
                                    profile
                                })
                            }
                        )
                    })
                    .catch(err => res.status(400).send({error_message: err}));
        })
        .catch(err => res.status(400).send({error_message: `No Account found!`}));        
});

// Update an Actor
router.put('/actor/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    const {
        name,
        lastName,
        nickName,
        password,
        country,
        sex,
        dateBirth,
        biography,
        profilePicture,
        screenShots,
        status,
        stars,
        contact,
        competitions
    } = req.body;

    Actor.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send('Actor Updated successfuly!'))
        .catch(err => res.status(400).send({error_message: err}));
});

// Fetch All Categories
router.get('/categories', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Category.find()
        .then(cat => res.json(cat))
        .catch(err => res.status(400).json({error_message:err}));
});

// Fetch a Category by id
router.get('/categorie/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Category.findById(req.params.id)
        .then(cat => res.json(cat))
        .catch(err => res.status(400).json({error_message:err}));
});


// Post Category
router.post('/category', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    
    const {
        label,
        details,
        status,
        value,
        picture,
        stars
    } = req.body;
    newCat = new Category(req.body);

    await newCat.save()
        .then(saveItem => res.json(saveItem))
        .catch(err => res.status(400).json({error_message:err}));
});


// Update a Category
router.put('/category/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    const {
        label,
        details,
        status,
        value,
        picture,
        stars
    } = req.body;

    Category.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send('Category Updated successfuly!'))
        .catch(err => res.status(400).send({error_message: err}));
});

// Fetch All Films
router.get('/films', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Film.find()
        .then(film => res.json(film))
        .catch(err => res.status(400).json({error_message:err}));
});

// Fetch a Film by id
router.get('/film/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Film.findById(req.params.id)
        .then(actor => res.json(actor))
        .catch(err => res.status(400).json({error_message:err}));
});


// Post Film
router.post('/film', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    
    const {
        title,
        subtitle,
        dateAnouncement,
        dateRelease,
        categoryId,
        actorId,
        actorsId,
        genreId,
        userId,
        productionHouseId,
        productionHousesId,
        urlTrailer,
        urlFullFilm,
        price,
        discount,
        cover,
        screenShots,
        details,
        status,
        stars,
        competitions
    } = req.body;
    newFilm = new Film(req.body);

    await newFilm.save()
        .then(saveItem => res.json(saveItem))
        .catch(err => res.status(400).json({error_message:err}));
});


// Update a Film
router.put('/film/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    const {
        title,
        subtitle,
        dateAnouncement,
        dateRelease,
        categoryId,
        actorId,
        actorsId,
        genreId,
        userId,
        productionHouseId,
        productionHousesId,
        urlTrailer,
        urlFullFilm,
        price,
        discount,
        cover,
        screenShots,
        details,
        status,
        stars,
        competitions
    } = req.body;

    Film.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send('Film Updated successfuly!'))
        .catch(err => res.status(400).send({error_message: err}));
});

// Fetch All Genres
router.get('/genres', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Genre.find()
        .then(genres => res.json(genres))
        .catch(err => res.status(400).json({error_message:err}));
});

// Fetch a Genre by id
router.get('/genre/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await Genre.findById(req.params.id)
        .then(genre => res.json(genre))
        .catch(err => res.status(400).json({error_message:err}));
});


// Post Genre
router.post('/genre', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    
    const {
        label,
        details,
        status,
        value,
        picture,
        stars,
    } = req.body;
    newGenre = new Genre(req.body);

    await newGenre.save()
        .then(saveItem => res.json(saveItem))
        .catch(err => res.status(400).json({error_message:err}));
});


// Update a Genre
router.put('/genre/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    const {
        label,
        details,
        status,
        value,
        picture,
        stars,
    } = req.body;

    Genre.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send('Genre Updated successfuly!'))
        .catch(err => res.status(400).send({error_message: err}));
});

// Fetch All ProductionHouse
router.get('/prods', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await ProductionHouse.find()
        .then(prods => res.json(prods))
        .catch(err => res.status(400).json({error_message:err}));
});

// Fetch a ProductionHouse by id
router.get('/prod/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    await ProductionHouse.findById(req.params.id)
        .then(prod => res.json(prod))
        .catch(err => res.status(400).json({error_message:err}));
});


// Post Production House
router.post('/prod', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    
    const {
        name,
        ownerId,
        founderId,
        coFounders,
        country,
        city,
        address,
        cover,
        contact,
        details,
        status,
        stars,
    } = req.body;
    newProd = new ProductionHouse(req.body);

    await newProd.save()
        .then(saveItem => res.json(saveItem))
        .catch(err => res.status(400).json({error_message:err}));
});

// Update a Production House
router.put('/prod/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    const {
        name,
        ownerId,
        founderId,
        coFounders,
        country,
        city,
        address,
        cover,
        contact,
        details,
        status,
        stars,
    } = req.body;

    ProductionHouse.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send('Production ouse Updated successfuly!'))
        .catch(err => res.status(400).send({error_message: err}));
});



module.exports = router;
