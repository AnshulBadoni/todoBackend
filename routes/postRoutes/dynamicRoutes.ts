
import express from 'express';
const task = require("../../model/task");
import { taskInterface } from "../../model/taskInterface";
const router = express.Router();

router.route('/task/:id')

.get(async(req:any,res:any)=>{
    const id = req.params.id;
    task.findById(id)
        .then((foundTak: taskInterface) => {
            res.send(foundTak);
        })
        .catch((err:Error)=>{
            res.send(err);
        });
})

.patch(async(req:any,res:any)=>{
    const id = req.params.id;
    const {title,description,subtaks,status,toDate,fromDate} = req.body;
    task.findById(id)
        .then((foundTak:any) => {
            foundTak.title = title;
            foundTak.description = description;
            foundTak.subtaks = subtaks;
            foundTak.status = status;
            foundTak.toDate = toDate;
            foundTak.fromDate = fromDate;
            foundTak.save();
            res.send(foundTak);
        })
        .catch((err:Error)=>{ 
            res.send(err);
        });
})

.delete(async(req:any,res:any)=>{
    const id = req.params.id;
    task.findByIdAndDelete(id)
        .then((foundTak: taskInterface) => {
            res.send(foundTak);
        })
        .catch((err:Error)=>{ 
            res.send(err);
        });
});

export default router;
