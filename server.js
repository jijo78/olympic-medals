const express = require('express');
const path = require('path');
const port = process.env.PORT || '5000';
const http = require('http');
const request = require('request');
const url = require('url');
const app = express();
const bodyParser  = require('body-parser');

/**
 * Set HTTP server port.
 */
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }));

//proxy the request
app.use('/medals',  function( req, res ){
  req.pipe( request({
        url: 'http://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json',
        qs: req.query,
        method: req.method
    }, function(error, response, body){
      if (error){
           console.error(error);
         }

  })).pipe( res );
});


//connect the back to the front
app.use(express.static('./public/'));
app.use(express.static('./client/dist/'));
app.get('*', (req,res) => res.sendFile(path.join(__dirname+'/public/index.html')));

module.exports = app;
