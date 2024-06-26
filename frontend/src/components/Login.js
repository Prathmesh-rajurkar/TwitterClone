import React, { useState } from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant';
import { ToastContainer,toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/userSlice';

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginSignupHandler = () => {
    setIsLogin(!isLogin)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    if (isLogin) {
      try {
        const res = await axios.post(`${USER_API_END_POINT}/login`, { email, password }, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        });
        // console.log(res.data)
        dispatch(getUser(res?.data?.user))
        if (res.data.success) {
          toast.success(res.data.message);
          navigate("/");
        }
      } catch (error) {
        console.log(error)
        toast.error("Invalid password or email");
      }
    } else {
      try {
        const res = await axios.post(`${USER_API_END_POINT}/register`, { name, username, email, password }, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        });
        if (res.data.success) {
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        console.log(res)
      } catch (error) {
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log(error)
      }
    }
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center w-[80%] justify-evenly'>
        <div className=''>
          <BsTwitterX className='mx-4' size="300px" />
        </div>
        <div className='flex flex-col'>
          <div className='font-bold text-5xl my-5'>
            <h1>Happening now</h1>
          </div>
          <h1 className='mt-4  mb-2 text-2xl  font-bold'>{!isLogin ? "Register" : "Login"}</h1>
          <form onSubmit={submitHandler} className='flex flex-col w-[70%]' action="">
            {
              !isLogin && (<>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-2 font-semibold' placeholder='Name' />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='outline-blue-500  border border-gray-800 px-3 py-2 rounded-full my-2 font-semibold' placeholder='Username' />
              </>)
            }
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-2 font-semibold' placeholder='Email' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-2 font-semibold' placeholder='Password' />
            <button to="/" className='bg-[#1D9BF0] rounded-full p-2 my-4 text-lg text-white text-center '>{!isLogin ? "Register" : "Login"}</button>
            {

              <h1>{isLogin ? "Do not have an account?" : "Already have an account? "}<span className='cursor-pointer font-bold text-blue-500' onClick={loginSignupHandler}>{isLogin ? "Create Account" : "Login"}</span></h1>
            }
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Login