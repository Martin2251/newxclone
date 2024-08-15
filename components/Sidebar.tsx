import React from 'react'
import{BsHouseFill,BsBellFill} from "react-icons/bs"

const Sidebar = () => {

    const items = [
        {label:"Home",
            href:"/",
            icon:BsHouseFill




        },
        {
            label:"Notifications",
            href:"/notifications",
            icon:BsBellFill
        }
    ]
  return (
    <div>
      
    </div>
  )
}

export default Sidebar
