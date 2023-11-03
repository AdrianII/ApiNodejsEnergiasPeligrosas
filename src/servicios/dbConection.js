const dbConfig = require('./bdConfig');
const mssql = require('mssql');

const poolList = (sql, res) => mssql.connect(dbConfig, err => { 
    let result = [];
    if(err){
        throw err ;
    }
    console.log("Connection Successful !");

    new mssql.Request().query(sql, (err, result) => {
        //handle err
        res.json(result.recordset)
        // This example uses callbacks strategy for getting results.
    })
});

mssql.on('error', err => {
    // ... error handler 
    console.log("Sql database connection error " ,err);
})

module.exports = {poolList};
/*
console.log("Hello world, This is an app to connect to sql server.");
var config = {
        "user": "myusername", //default is sa
        "password": "yourStrong(!)Password",
        "server": "localhost", // for local machine
        "database": "staging", // name of database
        "options": {
            "encrypt": true
        }
      }

sql.connect(config, err => { 
    if(err){
        throw err ;
    }
    console.log("Connection Successful !");

    new sql.Request().query('select 1 as number', (err, result) => {
        //handle err
        console.dir(result)
        // This example uses callbacks strategy for getting results.
    })
        
});

sql.on('error', err => {
    // ... error handler 
    console.log("Sql database connection error " ,err);
})*/