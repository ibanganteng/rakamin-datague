const Pool = require ('pg').Pool
const pool = new Pool ({
    user : 'postgres',
    host: 'localhost',
    database: 'filem',
    password: '123456',
    port:5432,
})

module.exports= pool