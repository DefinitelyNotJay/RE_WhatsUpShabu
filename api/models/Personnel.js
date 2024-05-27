import mongoose from "mongoose";

const PersonnelModel = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type: String,
        required: true
    },
    role : {
        type: String,
        enum : ["receptionist", "manager", "waiter"],
        required: true
    },
    name : String
})

export default mongoose.model("Personnel", PersonnelModel)