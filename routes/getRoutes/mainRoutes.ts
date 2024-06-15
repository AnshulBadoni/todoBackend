const router = require("express").Router();
const task = require("../../model/task");
import { taskInterface } from "../../model/taskInterface";

// const taskInterface = require("../../interface/taskInterface");
////////////////get all task///////////////////

router.route('/task')

.get(async(req:any,res:any)=>{
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    task.find()
        .skip((page - 1) * limit)
        .limit(limit)
        .then((foundTak: taskInterface) => {
            res.send(foundTak);
        })
        .catch((err:Error)=>{
            res.send(err);
        });
    })
///////////////get a single task////////////////

.post(async(req: any, res: any) => {
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;
    const fromDate = req.body.fromDate;
    const toDate = req.body.toDate;
    const newTask = new task({
        title,
        description,
        status,
        fromDate,
        toDate
    })
    newTask
        .save()
        .then((savedTask: taskInterface) => {
            res.send(savedTask);
        })
        .catch((err:Error) => {
            res.send(err);
        })
})


export default router;
