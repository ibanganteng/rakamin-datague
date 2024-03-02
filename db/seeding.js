var pool = require('../queries.js')
var fs = require ('fs');

const seedQuery = fs.readFileSync('db/seeding.sql', {encoding: 'utf8'})

pool.query(seedQuery, (err,res)=> {
if(err){
    throw err
}
console.log('seeding complite');
pool.end()
})

