const { User, Token } = require('../models/index.js');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']

const UserController = {
create(req, res) {
req.body.role = "user";
const password = bcrypt.hashSync(req.body.password,10)
User.create({...req.body, password:password })
.then(user => res.status(201).send({ message: 'User created correctly', user }))
.catch(console.error)
},

login(req,res){
User.findOne({
where:{
email:req.body.email
}
}).then(user=>{
if(!user){
return res.status(400).send({message:"Usuario o contraseña incorrectos"})
}
const isMatch = bcrypt.compareSync(req.body.password, user.password);
if(!isMatch){
    console.log("Ee")
return res.status(400).send({message:"Usuario o contraseña incorrectos"})
}
let token = jwt.sign({ id: user.id }, jwt_secret);
Token.create({ token, UserId: user.id });
res.send({ message: 'Bienvenid@ ' + user.name, user, token })
})

},
}

module.exports = UserController