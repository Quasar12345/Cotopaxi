const express = require('express')
const router = express.Router()

//asignacion de la ruta principal 
router.get('/', (req,res)=>{
    res.render('index',)
});
//demas rutas
router.get("/dondeir", (req, res) => {
    res.render("dondeir");
  });

  router.get("/quehacer", (req, res) => {
    res.render("quehacer");
  });
  
  router.get("/noticias", (req, res) => {
    res.render("noticias");
  });

module.exports = router