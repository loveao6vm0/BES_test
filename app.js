var mysql = require('mysql');

var con = mysql.createConnection( {
    host : '34.80.72.20',
    port : 3306,
    user : 'ericliao1126',
    password : '1126ericliao',
    database : 'BES_database'

});

con.connect( function(err) {
  if (err) throw err;
  var com = "INSERT INTO BES_1 (Accel_X, Accel_Z) VALUES (1024, 246)";
  con.query(com, function(err, results) {
    if(err) throw err;
    console.log("insert into");
  });
  con.query("SELECT * FROM BES_1", function(err, results) {
    if(err) throw err;
    console.log(results);
  });
});


// con.connect( function(err) {
//     if(err) throw err;
//     console.log("success");
//     con.query("SELECT * FROM BES_1", function(err, results) {
//       if(err) throw err;
//       console.log(results);
//     });
// });


/*
let pool;
const createPool = async () => {
  pool = await mysql.createPool({
    user: 'root', // e.g. 'my-db-user'
    password: '1126ericliao', // e.g. 'my-db-password'
    database: 'BES_database', // e.g. 'my-database'
    // If connecting via unix domain socket, specify the path
    //socketPath: `/cloudsql/${'34.80.72.20:3306'}`,
    // If connecting via TCP, enter the IP and port instead
    host: '34.80.72.20',
    port: 3306,

    //...
  });
};
createPool();
*/

