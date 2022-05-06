//configer mongodb
const mongoose = require('mongoose');
module.exports= async ()=>{

 try {
     const connectionParams={
         useNewUrlParser:true,
         useCreateindex: true,
         useUnifiedTopology:true
     };
     await mongoose.connect(
         "mongoose://localhost/todo-app",
         connectionParams
         );
         console.log("connected to database.")
 } catch (error) {
     console.log("could not connect to database.", error)
 }

}