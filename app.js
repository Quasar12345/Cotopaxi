const express = require('express')
// crear instancia de aplicacion
const app = express() 
const router = require('./router/router')

//opciones de nuestro proyecto Middleare
app.set("view engine", "ejs")

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static("public"));

//app.use(express.static("public"));


app.use(router)

// sirve para leer la informacion enviado desde el formulRIO
app.use(express.urlencoded({extended:false}));

//sirve para que la aplicacion lea correctamente los archivos json
// app.use(express(JSON))
app.use(express.json());


app.listen(3000, ()=>{
    console.log("servidor corriendo en http://localhost:3000")

});

