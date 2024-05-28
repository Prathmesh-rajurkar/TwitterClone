import { useEffect } from "react";
import { TWEET_API_END_POINT } from "../utils/constant.js"
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllTweets } from "../redux/tweetSlice.js";

const useGetMyTweet = async (id) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMyTweet = async () => {
            try {
                const res = await axios.get(`${TWEET_API_END_POINT}/getalltweets/${id}`,{
                    withCredentials:true
                });
                dispatch(getAllTweets(res.data.tweets))
            } catch (error) {
                // console.log("hello");
                console.log(error);
            }
        }
        fetchMyTweet();
    }, [id]);
}

export default useGetMyTweet;