// taking the express function ; 
let express = require('express') ;

// calling the function and getting the object that can be used to add middlewares and handle the requests and responses ;
let app = express() ;


// convert the request from json to jasvascript objects ;
app.use( express.json() ) ;

require('./Router.js')(app) ;

app.listen(3000 , () => {
    console.log( "Hey i'm listening everything " ) ;
})
