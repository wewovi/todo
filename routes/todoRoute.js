const express = require('express');
const todoModel = require('../models/todoModel');
const router = express.Router();

router.post('/', async(req,res)=>{
    try {
        const saveTodo = await todoModel.create({
           "title":req.body.title,
           "todoBody":req.body.todoBody,
           "startDate":req.body.startDate,
           "endDate":req.body.endDate,
           "status":req.body.status,
        })
        res.json({
            data:saveTodo,
            message:"Todo successfully saved"
        })
    } catch (error) {
        res.json({
            message:error
        })
    }
   

    });

    router.get('/',async (req,res)=>{
        
        try {
            const getTodos = await todoModel.find();
            res.json({
                data:getTodos,
                message:"Todos successfully fetched"
            })
        } catch (error) {
            res.json({
                message:error
            })
        }
    });
    router.get('/:id',async (req,res)=>{
        
        try {
            const getATodos = await todoModel.findById(req.params.id);
            res.json({
                data:getATodos,
                message:"Todo successfully fetched"
            })
        } catch (error) {
            res.json({
                message:error
            })
        }
    });
    router.patch('/:id', async(req,res)=>{
        try {
            const updateTodo = await todoModel.findOneAndUpdate(
                {_id:req.params.id},
                { $set:{status:req.body.status}}
                );
                res.json({updateTodo});
        } catch (error) {
            
        }

    });

    router.delete('/:id',async (req,res)=>{
        try {
            const deleteTodo = await todoModel.deleteOne({_id:req.params.id});
            res.json({
                data:deleteTodo,
                message:"Todo successfully deleted"
            })
        } catch (error) {
            res.json({
                message: error
            })
        }
        
    })
   module.exports = router;