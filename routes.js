const express = require ('express')
const router = express.Router()
const app = express()
const faker = require('faker')
const expressLayouts = require('express-ejs-layouts')

//router.use(express.static('public'))


let db = require("./db")

router.get('/',(req,res)=>{
    res.render('pages/home'); 
})

router.get('/about',(req,res)=>{
    res.send('Sobre'); 
})

router.get('/cadastro/remove',(req,res)=>{
    res.send('Remoção realizada com sucesso!'); 
})

router.get('/cadastro/update',(req,res)=>{
    res.send('Atualização realizada com sucesso!'); 
})

router.get('/cadastro',(req,res)=>{
    let users = [{
        name: "Isaac Santos Félix",
        address: "Itaitinga kkkkjj???", 
        email: "isaacsantos36@hotmail.com",
        age: 21, 
        height:1.75, 
        vote: true
    },

    {
        name: "Killer Santos Félix",
        address: "Em baixo do carro do meu pai", 
        email: "gatinhomiaumiau@hotmail.com",
        age: 1.5, 
        height: 0.25, 
        vote: false
    },

    {
        name: "Jerry Santos Félix",
        address: "Casa dos felix", 
        email: "jerrynho@hotmail.com",
        age: 10, 
        height: 0.25, 
        vote: false
    }

]





    res.render('pages/cadastro',{users})
})



module.exports = router;