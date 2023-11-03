
const sql = require('mssql')

console.log("Hello world, This is an app to connect to sql server.");
var config = {
    user: 'root',
    password: '3ddn0!.2023',
    server: 'cef.cw6otgohdpoq.us-east-1.rds.amazonaws.com',
    database: 'NviewEnergiasPeligrosas',
    port: 1433,
    encrypt: false
}

sql.connect(config, err => { 
    if(err){
        throw err ;
    }
    console.log("Connection Successful !");

    new sql.Request().query(`SELECT IdArea, areas
    FROM Area
    ORDER BY areas`, (err, result) => {
        //handle err
        console.dir(result)
        console.dir(result.recordset)

        // This example uses callbacks strategy for getting results.
    })
        
});

sql.on('error', err => {
    // ... error handler 
    console.log("Sql database connection error " ,err);
})