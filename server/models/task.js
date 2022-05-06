//3.create task model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
task: {
    type:string,
    required:true
},
completed:{
    type: Boolean,
    default: false
 }
})

module.exports=mongoose.model("task", taskSchema);
