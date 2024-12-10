let {database} = require('./Database.js') ;

function AddProjectTasksRow( req , res , path ) {
    
    let query = "";
    let title = "";
    let arr = [];
    for (let i in req.body) {
        query += " ? ,";
        title += i + ',';
        if( i == "pro_id"){
            arr.push(Number(req.body[i]));            
        } 
        else{
        arr.push(req.body[i]);
        }
    }
    query = query.slice(0, query.length - 1)
    title = title.slice(0, title.length - 1);
    console.log(query, title  , arr );
    database.run(`INSERT INTO ${path} (${title}) VALUES (${query})`, arr, (err) => {
        if (err) { 
            
            res.send(err);
            res.end();
        }
        else { 
            res.send('Values inserted successfully : )');
            res.end();
        } 
    })

}


function deleteAllRows( req , res  , path ) {
    database.run(`DELETE FROM ${path}` , (err) => {
        if (err) {
            res.send(err);
            res.end();
        }
        else {
            res.send( `${path} table is empty now`);
            res.end();
        }
    })
}

function deleteRow( req ,res , path ) {
    let at = "" ;
    if( path == "projects") {
             at = "pro_id" ;
    }
    else{
        at = "id" ;
    }
    database.run(`DELETE FROM ${path} WHERE ${at} = ${req.params.id}`, (err) => {
        if (err) {
            res.send(err);
            res.end();
        }
        else {
            res.send('Succesfully deleted : )');
            res.send();
        }
    })
}

function getAllData( req , res , path ) {

    database.all( `SELECT * FROM ${path}` , ( err , data ) => {
        if( err ) {
            res.send( err ) ;
            res.end() ;
        }
        else{
            res.send( data );
            res.end() ;
        }
    })
}

function changeARow( req , res, path ) {

    let at = "" ;
    if( path == "projects") {
             at = "pro_id" ;
    }
    else{
        at = "id" ;
    }
let query ="" ;
let arr = [] ; 
for ( let i in req.body ) {
    arr.push( req.body[ i ] ) ;
    query += i + ' = ' + ' ? ' + ',' ; 
}
query = query.slice( 0 , query.length - 1 ) ;

database.run(`UPDATE ${path} SET ${query} WHERE  ${at} = ${req.params.id} ` , arr , (err) => {
    if( err ) {
        res.send(err) ;
        res.end() ; 
    }
    else{
        res.send('Successfully updated') ;
        res.end() ;
    }
})

}

function getRowById( req , res , path ) {

    let at = "" ;
    if( path == "projects") {
             at = "pro_id" ;
    }
    else{
        at = "id" ;
    }
    database.get(`SELECT * FROM ${path} WHERE ${at} = ${req.params.id}` , ( err  ,data) => {
        if( err ) {
            res.send( err ) ;
            res.send() ;
        }
        else{
            res.send(data) ;
            res.end() ;
        }
    })  ;
}

module.exports = {AddProjectTasksRow , deleteAllRows , deleteRow , getAllData , changeARow , getRowById} 