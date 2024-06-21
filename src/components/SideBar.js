import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';


const sidebarItem = [
    {
        icons: <IoMdHome size='24px'/>,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size='24px'/>,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size='24px'/>,
        title: "Subscription"
    },
    {
        icons: <IoMdHome size='24px'/>,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size='24px'/>,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size='24px'/>,
        title: "Subscription"
    },
    {
        icons: <IoMdHome size='24px'/>,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size='24px'/>,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size='24px'/>,
        title: "Subscription"
    },
    {
        icons: <IoMdHome size='24px'/>,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size='24px'/>,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size='24px'/>,
        title: "Subscription"
    },
    {
        icons: <IoMdHome size='24px'/>,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size='24px'/>,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size='24px'/>,
        title: "Subscription"
    },
    {
        icons: <IoMdHome size='24px'/>,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size='24px'/>,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size='24px'/>,
        title: "Subscription"
    },
    {
        icons: <IoMdHome size='24px'/>,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size='24px'/>,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size='24px'/>,
        title: "Subscription"
    },
    {
        icons: <IoMdHome size='24px'/>,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size='24px'/>,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size='24px'/>,
        title: "Subscription"
    },
    

]

const SideBar = () => {
    
  const open = useSelector((store)=>store.app.open);
  
  return (
    <div className={`relative left-0 ${open ? 'w-[15%]' : 'w-[6%]'} pl-5 bg-white h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden`}>
        {
            sidebarItem.map((item,index) => {
                return (
                  <div key={index} className="flex my-3 ml-2 mt-0">
                    {item.icons}
                    <p className={`ml-5 ${open ? '': 'hidden'}`}>{item.title}</p>
                  </div>
                );
            })
        }
    </div>
  )
}

export default SideBar