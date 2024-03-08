const mysql = require("mysql2/promise");
require("dotenv").config();

const mysqlPool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

mysqlPool.query("SELECT 1")
.then(()=>console.log(`Successfully connected to DB.`))
.catch((error)=>console.log(`Error in connecting DB :: ${error}`))

module.exports=mysqlPool;
