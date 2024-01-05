const Todo = require("../models/Todo");

exports.getTodo = async(req,res) => {
    try {
            // fetch all todo items from database
            const todos=await Todo.find({});
            res.status(200).json(
                {
                    success:true,
                    data:todos,
                    message:'All Todo data fetched'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"server error",
            message:err.message,
        })
    }
}

exports.getTodoById = async(req,res)=>{
    try{
        //extract todo items by their id
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});
        //if data with given id not found
        if(!todo){
            return res.status(404).json({
                success: false,
                message:"No data found with given id",
            })
        }
        //data for given id found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })

    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"server error",
            message:err.message,
        })
    }
}