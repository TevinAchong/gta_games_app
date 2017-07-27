var gamesJSON = require('../games.json'); 

//Home
exports.home = function(req, res){

    var games = gamesJSON.games; 

    res.render('home', {
        title : "Grand Theft Auto Games", 
        games : games
    }); 
}; 

//game_single
exports.game_single = function(req, res){

    var game_number = req.params.game_number; 

    var games = gamesJSON.games;

    if (game_number >= 1 && game_number <= 6) {

        var game = games[game_number - 1]; 

        var title = game.title; 

        var main_characters = game.main_characters; 

        res.render('game_single', {
            games : games, 
            title : title, 
            game : game, 
            main_characters : main_characters
        }); 
    }
    else {
        res.render('notFound', {
            games : games, 
            title : "Error 404 - Page not Found"
        }); 
    }
};

//notFound
exports.notFound = function(req, res){
    var games = gamesJSON.games;

    res.render('notFound', {
        games : games, 
        title : "Error 404 - Page Not Found"
    }); 
};