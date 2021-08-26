
const express = require("express");
const app = express();
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");

const port=3030;
const address = "localhost";

global.users =[
    {name:"Isaac Santos Félix",address:"Itaitinga (lugar nenhum)",email:"Isaacsantos36@hotmail.com",age:21,heigth:1.73,vote:"sim"},
    {name:"Jerry Santos Félix",address:"Casa dos félix",email:"MiauMiau@hotmail.com",age:9,heigth:0.25,vote:"não"},
    {name:"Killer Queen Santos Félix",address:"Em baixo do carro",email:"MiauMiau2@hotmail.com",age:1,heigth:0.25,vote:"não"}];

app.set('view engine','ejs');
app.use(expressLayouts);
app.use(express.urlencoded({extended:false})); 
app.use(express.json()); 
app.use('/',routes);


const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});