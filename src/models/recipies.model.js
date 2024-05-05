import mongoose from "mongoose";

const recepieSchema = new mongoose.Schema({
    title:{
        type:String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    ingredients:{
        type: Array,
        require: true,
    }
})

export default mongoose.model('Recipies', recepieSchema)