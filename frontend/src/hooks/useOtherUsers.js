// import { useEffect } from "react";
import { USER_API_END_POINT } from "../utils/constant.js"
import axios from "axios";
import { useDispatch } from "react-redux";
import { getOtherUsers } from "../redux/userSlice";

const useOtherUsers = async (id) => {
    // console.log("In UseOtherusers");
    const dispatch = useDispatch();
    const fetchOtherUsers = async () => {
        try {
            // console.log("Fetching users...");
            const res = await axios.get(`${USER_API_END_POINT}/otheruser/${id}`,{
                withCredentials:true
            });
            dispatch(getOtherUsers(res.data.otherUsers))
            // console.log("fetched users");
        } catch (error) {
            // console.log("hello");
            console.log(error);
        }
    }
    fetchOtherUsers();
}

export default useOtherUsers;