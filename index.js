// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();
    var port = process.env.PORT || 8080;


    // configuration =====================================

     // set the static files location
    app.use(express.static(__dirname + '/public'));

    // Sets the location of SemanticUI files
    app.use('/assets/semantic', express.static(__dirname + '/public/assets/semantic'));
    // Sets node modules
    app.use('/node_modules', express.static(__dirname + '/node_modules'));

    // listen  ======================================
    app.listen(port,"0.0.0.0");
    console.log("App listening on port "+port);
