import { Menu } from "@mui/icons-material"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { navlink } from "../data/dummydata"
import logo from "../data/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
// import { faClose } from '@fortawesome/free-regular-svg-icons';


export const Header = ({setIndex , index}) => {
  const [responsive, setResponsive] = useState(false)
  const [active,setActive] = useState({value:'',
show:false
})
console.log(active)
  return (
    <>
      <header>
        <div className='toggle-flex'>
          <div className='logo'>
          <h1 className="logo-text">Portfolio</h1>
            {/* <img src={logo} alt='' data-aos='zoom-in-right' className="logo" /> */}
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
          <FontAwesomeIcon icon={faClose} className='icon-none' />

            {navlink.map((links, i) => (
              // <Link to={links.url} key={i} data-aos='zoom-in-left'>
                <div className={`flex-gap ${index === i + 1 ? 'active':'inactive'}`} onClick={() =>{
                 setIndex(index + 1)
                 setActive({value:links.text,
                 show:true})
                }}>
                <FontAwesomeIcon icon={links.icon}/>
                {links.text}
                </div>
               
              // </Link>
            ))}
          </div>
          <button className='toggle' onClick={() => setResponsive(!responsive)}>
            <Menu className='icon' />
          </button>
        </div>
      </header>
    </>
  )
}
