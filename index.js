const express = require('express')
const app = express()
const port = 3000

var pool = require('./queries')

var things = require('./things')

app.use('/things', things)




app.get('/category',(req,res)=>{
    pool.query(`SELECT * FROM  category`, (err,result)=>{
        if(err){
            throw err
        }
        
        res.status(200).json(result.rows)
    })
})

app.get('/category/:name',(req,res)=>{
    pool.query(`SELECT * FROM  film join film_category on film.film_id=film_category.film_id join category on category.category_id = film_category.category_id WHERE name='${req.params.name}'`, (err,result)=>{
        if(err){
            throw err
        }
        
        res.status(200).json(result.rows)
    })
})


app.get('/actor',(req,res)=>{
    pool.query('SELECT * FROM  actor',(err,result)=>{
        if(err){
            throw err
        }
        res.status(200).json(result.rows)
    })
})


app.get('/film',(req,res)=>{
    pool.query('SELECT * FROM  film',(err,result)=>{
        if(err){
            throw err
        }
        res.status(200).json(result.rows)
    })
})



app.get('/film/:id',(req,res)=>{
    pool.query(`SELECT * FROM  film WHERE film_id=${req.params.id}`,(err,result)=>{
        if(err){
            throw err
        }
        res.status(200).json(result.rows)
    })
})







pool.connect((err,res)=> {
    console.log(err)
    console.log("connected");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})