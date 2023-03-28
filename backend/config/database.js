const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,{

    useUnifiedTopology: true, 
    useNewUrlParser: true,

})
.then(()=> {
    console.log('Database connected')
    mongoose.connection.collection('games').drop()
    console.log('Games collection dropped')
})
.catch(err=>console.error(err))