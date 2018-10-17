const express = require('express');

const app = express();
const mysql = require('mysql');

var movies = [];


const db = mysql.createConnection({
    host : 'sceva.net',
    port: 6603,
    user : 'eladage',
    password : 'PleaseChangThisPassword2018!',
    database : 'IT414'
});


db.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
    dbstatus = "connected."
    
    app.get('/api/movies', (req, res) => {
        db.query('SELECT * FROM Movie', function(err, results) {
            if (err) throw err
            for (let index = 0; index < results.length; index++) {
                
                movies[index] = {
                    MovieName: results[index].MovieName
                }
                console.log(movies[index].MovieName);
            }
            
            res.json(movies);
        
        })

    })
})


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);