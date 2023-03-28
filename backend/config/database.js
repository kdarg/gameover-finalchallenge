const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,{

    useUnifiedTopology: true, 
    useNewUrlParser: true,

})
mongoose.connection.once("open", () => {
    console.log('Database connected')
    mongoose.connection.db.dropCollection('games');
    console.log('Dropped games collection')
})