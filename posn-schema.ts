import mongoose from "mongoose"

const schema = new mongoose.Schema({
    user_id   : {type : String , required : true} ,
    user_name : {type : String , required : true},
    password  : {type : String , required : true}
})

export default mongoose.model('posn' , schema) 