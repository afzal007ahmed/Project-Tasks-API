module.exports = (app) => {

let {AddProjectTasks , deleteAll, deleteARow , getData , changeRow , getById} = require('./controller.js') ;
let router = require('express').Router() ;

router.post('/projects' , AddProjectTasks) ;

router.delete('/projects' , deleteAll ) ; 

router.delete('/projects/:id' , deleteARow );

router.post('/tasks' , AddProjectTasks)

router.delete('/tasks' , deleteAll ) ;

router.delete('/tasks/:id' , deleteARow) ;

router.get('/projects' , getData ) ;

router.put('/projects/:id' , changeRow ) ;

router.put('/tasks/:id' , changeRow)

router.get('/tasks' , getData ) ;

router.get('/tasks/:id' ,getById ) ;

router.get('/projects/:id' , getById ) ;

app.use('/' , router ) ;

}

