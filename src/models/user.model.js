import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    recipiefav:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipies",
        default: null,
    },
},{
    timestamps: true
})

export default mongoose.model('User', userSchema)