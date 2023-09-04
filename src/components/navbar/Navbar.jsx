import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import netflix_logo from '../images/netflix-logo-png-2582.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Navbar.css"

const Navbar = () => {
    const [isScrolled,setIsScrolled]= useState(false);

    window.onscroll=()=>{
        setIsScrolled(window.scrollY===0? false:true)
    }
  return (
        <div className={isScrolled? "navbar scrolled":"navbar"}>
            <div className='container'>
                <div className='left'>
                    <img src={netflix_logo} alt=''></img>
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className='right'>
                    <SearchIcon className='nav-icons'/>
                    <span>Kids</span>
                    <NotificationsIcon className='nav-icons'/>
                    <AccountCircleIcon className='nav-icons'/>
                    <div className='nav-profile'>
                        <ArrowDropDownIcon className='nav-icons'/>
                        <div className='profile-options'>
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
  )
}

export default Navbar