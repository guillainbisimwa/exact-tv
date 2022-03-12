const Actor = require('../models/Actor.model');
const Profile = require('../models/profile.model');

var bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

// get all actors
exports.findAll = async(req, res) => {
    try {
        res.header('Access-Control-Allow-Origin', '*');
        const actors = await Actor.find();
        return res.status(200).json(actors);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// get an actor by id
exports.findOne = async(req, res) => {
    try {
        res.header('Access-Control-Allow-Origin', '*');
        const actor = await Actor.findById(req.params.id)
        if(!actor) {
            return res.status(404).json({
                error: 'Actor not found'
            })
        }
        return res.status(200).json(actor);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

// create an actor
exports.create = async (req, res) => {
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
    await Actor.findOne({name}) // find the user by name
        .then(actor => {
            if(actor){ // if the user doesn't exit with this name 
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
                    actorId, // need to test
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
                                            .then(() => {
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
};

exports.signin = async (req, res) => {
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
};


exports.update = async (req, res) => {
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
};