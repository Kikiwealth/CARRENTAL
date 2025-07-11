import React, { useState } from 'react'
import { assets, menuLinks } from "../assets/assets"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation()
    const [open, setOpen] = useState(false)
     
  return (
    <div className={``}>
        <Link to="/">
        <img src={assets.logo} alt="logo" className="h-8 " />
        </Link>

        <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:border-t border-borderColor right-0 flex flex-col sm:gap-8 max-sm:p-4 sm:flex-row items-start sm:items-center transition-all duration-300 z-50 ${location.pathname === "/" ? "bg-light":"bg-white"} ${open ? "max-sm:translate-x-0" : "*:max-sm:translate-x-full"}`}>
            {menuLinks.map((link, index) =>(
                <Link key={index} to={link.path}>
                {link.name}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar