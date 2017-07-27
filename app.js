var express = require('express'); 

var app = express(); 

app.set('view engine', 'ejs'); 

var routes = require('./routes'); 

var path = require('path'); 
app.use(express.static(path.join(__dirname, 'public'))); 

// Routes 

//Home
app.get('/', routes.home);   

//game_single
app.get('/gta_game_number/:game_number?', routes.game_single); 

//notFound
app.get('*', routes.notFound); 

app.listen(process.env.PORT || 3000); 