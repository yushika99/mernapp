const Task = require('../models/task');
const express = require ('express');
const task = require('../task');
const router = express.Router();

router.post("/", async(req,res)=>{
    try {
        const task = await new Task(req.boday).save();
        res.send(task);
        
    } catch (error) {
        res.send(error);
    }
});


router.get("/", async(req,res)=>{
    try {
        const task = await Task.find();
        res.send(tasks);
        
    } catch (error) {
        res.send(error);
    }
})

router.put("/:id", async(req,res)=>{
    try {
        const task = await Task.findOneAndUpdate(
            {_id:req.params.id},
            req.body
            )
        res.send(tasks);
        
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const task = await task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        
    }
});

module.exports = router;