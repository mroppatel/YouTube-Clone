import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from 'react-avatar';
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSearchSuggestion, toggleSidebar } from '../Utils/appSlice';
import axios from 'axios';
import { SEARCH_SUGGESTIONS_API } from '../constant/youtube';


const NavBar = () => {
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState(false);
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

  const dispatch = useDispatch();
  const {searchSuggestion} = useSelector((store)=>store.app);

  const searchVideo = () => {
    dispatch(setCategory(input));
    setInput('');
  }

  const toggleHandler = () => {
    dispatch(toggleSidebar());
  }

  const showSuggestion = async () => {
    try {
      const res = await axios.get(corsAnywhereUrl + SEARCH_SUGGESTIONS_API + input);
      dispatch(setSearchSuggestion(res?.data[1]));

    } catch (error) {
      console.log(error);
    }
  }

  const openSuggestion = () => {
    setSuggestion(true);
  }

  useEffect (() => {
    showSuggestion();  // eslint-disable-next-line
  },[input]);  

  return (
    <div className='flex fixed top-0 justify-center items-center w-[100%] z-10 bg-white'>
      <div className='flex w-[96%] py-3 justify-between center-item'>
        <div className='flex items-center'>
            <GiHamburgerMenu onClick={toggleHandler} size={"24px"} className='cursor-pointer'/>
            <img className='px-4' width={'115px'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png' alt='yt_logo'/>
        </div>
        <div className='flex w-[40%] items-center'>
            <div className='flex w-[100%] '>
              <input value={input} onFocus={openSuggestion} onChange={(e)=>setInput(e.target.value)} type='text' placeholder='Search' className='w-full py-2 px-4 border border-gray-400 rounded-l-full outline-none' />
              <button onClick={searchVideo} className='py-2 border border-gray-400 rounded-r-full px-4'> <CiSearch size={"24"} /> </button>
            </div>      
            {
              (suggestion && searchSuggestion.length !== 0) && 
              <div className='absolute top-3 z-50 w-[30%] py-5 bg-white shadow mt-12 rounded-lg border border-gray-200'>
                <ul>
                  {
                    searchSuggestion.map((text,idx) => {
                      return (
                        <div className='flex items-center px-4 hover:bg-gray-200'>
                          <CiSearch size={"20"} />
                          <li className='px-2 py-1 cursor-pointer text-md font-medium'>{text}</li>
                        </div>
                      )
                    })
                  }
                </ul>
              </div>
            }
        </div>
        <div className='flex w-[10%] justify-between items-center'>
          <IoIosNotificationsOutline size={'24px'} className='cursor-pointer'/>
          <CiVideoOn size={'28px'} className='cursor-pointer'/>
          <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={35} round={true} />

        </div>
      </div>
    </div>
  )
}

export default NavBar