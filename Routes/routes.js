const express = require('express');
const router = express.Router();
const Tasks = require('../controllers/db');
var bodyparser = require('body-parser');




router.use(bodyparser.urlencoded({ extended: true }));


//load ejs
router.get('/',(req, res)=>{
    res.redirect('/routes/addtask')   
})






//post task to database
router.post('/addtask', async (req, res)=>{
    const todo = req.body.task;

    var t = new Tasks({
        task: todo
    })
    await t.save().then(() => console.log(`${todo} added to task`));
    res.redirect('/routes/addtask')
})


router.get('/addtask', async (req, res)=>{
 await Tasks.find().then(result=>{
    res.render('todo.ejs', {data: result})
  
 })

})

//delete route

router.get('/delete/:id', async (req, res)=>{
  const id = req.params.id
  await Tasks.findByIdAndDelete(id);
  res.redirect('/')
})
















module.exports = router;
