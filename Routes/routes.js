const express = require('express');
const router = express.Router();
const task = require('../controllers/db')


router.get('/', function(req, res){
    console.log('router working')
    res.send('hello from router')
})

// async function run(){
//     const list = new tasks({
//         task: "go-running",
//     })
//     await list.save()
//     console.log("new task added")
// }
// run()


module.exports = router;
