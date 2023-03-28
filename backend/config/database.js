const mongoose = require('mongoose')
const GAMES_MIGRATION_DATA = require('../migrations/gamesMigration')

mongoose.connect(process.env.MONGO_URI,{

    useUnifiedTopology: true, 
    useNewUrlParser: true,

})
mongoose.connection.once("open", () => {
    console.log('Database connected')
    mongoose.connection.db.listCollections().toArray().then(collections => {
        if(collections.includes('games'))
            mongoose.connection.db.dropCollection('games')
    })
    mongoose.connection.db.collection('games').insertMany(GAMES_MIGRATION_DATA)
    console.log('Migration for \'games\' complete')
})