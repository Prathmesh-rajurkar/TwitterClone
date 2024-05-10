import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    like:{
        type:Array,
        default:[],
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    bookmarks:{
        type:Array,
        default:[],
    },
    password:{
        type:String,
        required:true,
    },
    followers:{
        type:Array,
        default:[],
    },
    following:{
        type:Array,
        default:[],
    },
},{timestamps:true})

export const Tweet = mongoose.model('Tweet',tweetSchema)