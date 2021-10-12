const mongoose = require('mongoose')

const connextDB = async(url) => {

    mongoose.connect(url,{useNewUrlParser: true,
        useUnifiedTopology: true,
        
        })
        .then(()=>console.log("db conntected successfully"))
        .catch(err => console.log(err))
    // try {
    //     await mongoose.connect(url,{
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //         useFindAndModify: false,
    //         useCreateIndex: true})
    //     console.log("db conntected successfully ")
    // }catch(err) {
    //     console.log("error of connect db")
    // }
}

module.exports = connextDB;