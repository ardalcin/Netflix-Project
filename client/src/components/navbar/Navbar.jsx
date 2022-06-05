import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import Notifications from '@mui/icons-material/Notifications';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
const Navbar = () => {
    const[isScrolled, setIsScrolled]=useState(false);
    window.onscroll=() =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return()=> (window.onscroll = null);    
    };
  return (
    <div className={isScrolled ? "navbar scrolled":"navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" 
                 alt="" 
                 />
                 <span>Home</span>
                 <span>Series</span>
                 <span>Movies</span>
                 <span>New and Populer</span>
                 <span>My List</span>


            </div>
            <div className="right">
           <SearchIcon className="icon"/>
           <span>KID</span>
           <Notifications className="icon" />
           <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
           alt="" 
           />
           <div className="profile"><ArrowDropDown className="icon"/>
           <div className="options">
               <span>Settings</span>
               <span>logout</span>

           </div>
           </div>
         

         </div>
        </div>
        </div>
  )
}

export default Navbar