const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema({
    gameName:{type:String, required:true},
	genre:{type:Array, required:true},
	src:{type:String, required:true},
	size:{type:Number, required:true},
	workson:{type:String, required:true},
	company:{type:String, required:true},
	description:{type:String, required:true},
	requirements:[{
		processor:{type:String, required:false},
		memory:{type:Number, required:false},
		graphics:{type:String, required:false},
		storage:{type:Number, required:false},
	}],
	price:{type:Number, required:true},
	images:{type:Array, required:true}
})

const Games = mongoose.model('games', gamesSchema)

module.exports = Games
