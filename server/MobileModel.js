var mongoose = require('mongoose')
const atlas = "mongodb+srv://riteshborikar2133:riteshborikar321@cluster0.y5ctwtu.mongodb.net/college?retryWrites=true&w=majority"
const mongo = "mongodb://127.0.0.1:27017/VAC"
mongoose.connect(atlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log("connected to mongoose"))
    .catch((err) => { console.log(err) })

const MobileSchema = mongoose.Schema({
    Model_name: String,
    Processor: String,
    Battery: String,
    Storage: String,
    Display: String,
    Camera: String,
    Total:Number,
    Avl:Number
})

const MobileModel = mongoose.model("mobileData",MobileSchema)
module.exports = MobileModel