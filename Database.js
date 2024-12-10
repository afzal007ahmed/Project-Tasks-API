let sqlite = require('sqlite3') ;

//creates a new database object connected to the database 
let database = new sqlite.Database('./Todo.db' , (err) => {
    if( err ) {
        console.log( err ) ;
    }
    else{
        console.log( "I'm connected") ;
    }
} ) ;


database.run(`CREATE TABLE IF NOT EXISTS projects (
       PRO_ID INTEGER PRIMARY KEY AUTOINCREMENT ,
       NAME TEXT NOT NULL,
       COLOR TEXT ,
       IS_FAVORITE BOOLEAN DEFAULT FALSE 

    )  ` , (err) => {
        if( err ) {
            console.log( err) ;
        }
        else{
            console.log('Project table is created') ;
        }
    });


database.run(`CREATE TABLE IF NOT EXISTS TASKS (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    CONTENT TEXT ,
    DESCRIPTION TEXT ,
    DUE_DATE DATE DEFAULT CURRENT_DATE ,
    IS_COMPLETED BOOLEAN DEFAULT FALSE ,
    CREATED DATE DEFAULT CURRENT_DATE,
    PRO_ID INTEGER ,
    FOREIGN KEY (PRO_ID) REFERENCES PROJECTS(PRO_ID) ON UPDATE CASCADE ON DELETE CASCADE
    )` , (err) => {
        if( err ) {
            console.log( err) ;
        }
        else{
            console.log('tasks table is created') ;
        }
    })   

module.exports = { database } ; 