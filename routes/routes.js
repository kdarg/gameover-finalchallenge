const Router = require('express').Router();

const validator = require('../config/validator')
const passport = require('../config/passport')

const usersControllers = require('../controllers/userControllers.js')
const gamesControllers = require('../controllers/gamesControllers.js')

const {get_games, get_game, set_game, delete_game, modify_game} = gamesControllers
const {verify_email, sign_up_users, log_in_users, verify_token} = usersControllers

//GAMES

Router.route('/games')
	.get(get_games)
	.post(set_game)

Router.route('/games/:id')
	.get(get_games)
	.post(modify_game)
	.delete(delete_game)

//USERS

Router.route('/auth/signUpUsers')
	.post(sign_up_users)

Router.route('/auth/logInUsers')
	.post(log_in_users)

Router.route('/verify/:uniqueString')
	.get(verify_email)

Router.route('/auth/signInToken')
	.get(passport.authenticate('jwt', {session:false}, verify_token))



module.exports = Router
