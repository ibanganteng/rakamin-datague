var express = require('express')
var router = express.Router()




router.get('/:name', (req, res) => {
    res.send('name' + req.params.name)
  })

  
  
  
  router.post('/',(req,res)=>{
      res.send("dari post")
  })
  
  router.put('/put',(req,res)=>{
      res.send("dari put")
  })

  module.exports = router
  