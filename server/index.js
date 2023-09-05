var express = require('express')
var Mobile = require('./MobileModel')
var cors = require('cors')
const MobileModel = require('./MobileModel')
const user = require('./Admin')
var app = express()
app.use(express.json())
app.use(cors())
port = 8877
app.get('/getdata', async (req, res) => {
    try {
        let data = await MobileModel.find()
        if (data) {
            res.status(200).json(data)
        }
        else {
            console.log("error")
        }
    }
    catch (err) {
        console.log(err)
    }
    // console.log("hello")
})

app.post('/postdata', async (req, res) => {
    data = req.body;
    try {
        const s = await MobileModel(data)
        const rst = await s.save()
        res.send(data)
    } catch (err) {
        console.log(err)
    }
})


app.delete('/deldata', async (req, res) => {
    data = req.body._id
    try {
        const d = await MobileModel.deleteOne({ _id: data })
        res.send(req.body)
    } catch (err) {
        console.log(err)
    }
    console.log(req.body._id)
})

app.put('/putdata', async (req, res) => {
    data = req.body
    try {
        const re = await MobileModel.updateOne({ _id: data._id }, {
            $set: {
                Total: data.Total,
                Avl: data.Avl
            }
        })
        if (re) {
            res.send({ 'message': 'success', data })
        }
    } catch (err) {
        console.log(err)
    }
})


app.post('/user', async (req, res) => {
    d = req.body
    try {
        console.log(d)
        const data = await user.findOne({
            $and: [{ username:d.username },
            { password:d.password }]
        })
        if (data) {
            res.json({ data, message: "success" })
        }
        else {
            res.json({ message: "not" })
        }
    } catch (err) {
        console.log(err)
    }
})

app.listen(port, () => {
    console.log(`connected on port ${port}`)
})
