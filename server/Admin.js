var mongoose = require('mongoose')
const atlas = "mongodb+srv://riteshborikar2133:riteshborikar321@cluster0.y5ctwtu.mongodb.net/college?retryWrites=true&w=majority"
const mongo = "mongodb://127.0.0.1:27017/VAC"
mongoose.connect(atlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log("connected to mongoose"))
    .catch((err) => { console.log(err) })

const User = mongoose.Schema({
    Name:String,
    Age:String,
    Role:String,
    username:String,
    password:String,
})

const user = mongoose.model("admin",User)
module.exports = user