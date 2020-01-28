const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');


router.route('/')
    .get((req,res,next)=>
    {
        Chat.find().then(((chat)=>{
        res.json(chat);
    }))

})
    .post((req,res,next)=>
    {
        Chat.create(req.body).then((chat)=> {
        res.status(201).json(chat) 
    })
   
    
});
router.route('/:id')
    .get((req, res, next) => {
        Task.findOne({ author: req.user._id, _id: req.params.id })
            .then((task) => {
                if (task == null) throw new Error("Task not found!")
                res.json(task);
            }).catch(next);
    })
    .post((req, res) => {
        res.statusCode = 405;
        res.json({ message: "Method not allowed" });
    })
    .put((req, res, next) => {
        
        Task.findOneAndUpdate({ author: req.user._id, _id: req.params.id }, { $set: req.body }, { new: true })
            .then((reply) => {
                if (reply == null) throw new Error("Task not found!");
                res.json(reply);
            }).catch(next);
    })
    .delete((req, res, next) => {
        const id = req.params.id;
        Chat.findOneAndDelete(id)
            .then((chat) => {
                if (chat == null) throw new Error("Task not found!");
                res.json(chat);
            }).catch(next);
    });

module.exports = router;