import { Tweet } from "../models/tweetScheme.js";



export const createTweet = async (req, res, next) => {
    try{
        const {description , id} = req.body;
        if(!description || !id){
            return res.status(401).json({
                message:"Fields are required",
                success: false
            })
        }
        await Tweet.create({
            description,
            userID:id
        });
        return res.status(200).json({
            message:" Tweet Created Successfully",
            success: true
        })
    } catch(err){
        console.log(err);
    }
}

export const deleteTweet = async (req,res) =>{
    try{
        const {id} = req.params
        await Tweet.findByIdAndDelete(id);
        return res.status(200).json({
            message:" Tweet Deleted Successfully",
            success: true
        })
    } catch(error){
        console.log(error)
    }
}

export const likeOrDislike = async (req,res) =>{
    try {
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id
        const tweet = await Tweet.findById(tweetId);
        if(tweet.like.includes(loggedInUserId)){
            await Tweet.findByIdAndUpdate(tweetId,{$pull:{like:loggedInUserId}})
            return res.status(201).json({
                message:"User disliked"
            })
        }else{
            await Tweet.findByIdAndUpdate(tweetId,{$push:{like:loggedInUserId}})
            return res.status(201).json({
                message:"User liked your tweet"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

