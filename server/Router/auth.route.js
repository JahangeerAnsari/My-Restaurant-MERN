const app = require('express');
const { authSignUp,authSignin } = require('../Controller/auth.Controller');
const route = app.Router();


route.post('/user/signup',authSignUp);
route.post('/user/signin',authSignin);
route.get('')
module.exports = route;
