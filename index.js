const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port',(process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',function(req,res){
    res.send("hi there from ML bot")
})

app.get('/webhook/',function(req,res){
    if(req.query['hub.verify_token']==='bot4ML'){
        res.send(res.query['hub.challenge'])
    }
    res.send('NO entry')
})

app.listen(app.get('port'),function(){
    console.log('port : ',app.get('port'))
})