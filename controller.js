
let { database } = require('./Database.js');
let { AddProjectTasksRow, deleteAllRows, deleteRow , getAllData , changeARow , getRowById} = require('./model.js');



async function AddProjectTasks(req, res) {
    let path = "";
    if (req.url .indexOf("/projects") != -1 ) {
        path = "projects";
        AddProjectTasksRow(req, res, path);
    }
    else {
        path = "tasks";
        database.get(`SELECT PRO_ID FROM PROJECTS WHERE PRO_ID = ${req.body["pro_id"]}` , (err, data) =>{
            if( err) {
                res.send( err ) ;
                res.end() ;
            }
            else{
                if( data == undefined ) {
                    res.send( err ) ;
                    res.end() ;
                }
                else{
                    AddProjectTasksRow( req , res , path  ) ;
                }
            }
        })
    }


}

function deleteAll(req, res) {
   let path = "" ;
   if( req.url == "/projects") {
    path = "projects" ;
   }
   else{
    path = "tasks"
   }
    deleteAllRows(req, res ,path );
}

function deleteARow(req, res) {
    let path = "" ;
    if( req.url.indexOf("/projects") != -1 ) {
     path = "projects" ;
    }
    else{
     path = "tasks"
    }
    deleteRow(req, res , path);
}

function getData(req ,res){
    let path = "" ;
    if( req.url == "/projects") {
     path = "projects" ;
    }
    else{
     path = "tasks"
    }
    getAllData( req , res , path ) ;

}

function changeRow( req , res ) {
    let path = "" ;
    if( req.url.indexOf("/projects") != -1 ) {
     path = "projects" ;
    }
    else{
     path = "tasks"
    }
    changeARow( req , res , path ) ;

}

function getById( req, res ) {
    let path = "" ;
    if( req.url.indexOf("/projects") != -1 ) {
     path = "projects" ;
    }
    else{
     path = "tasks"
    }
    
    getRowById( req , res , path ) ;
}
module.exports = { AddProjectTasks, deleteAll, deleteARow , getData , changeRow , getById};