import React,{useContext} from 'react'
import '../style/Navbar.css'
import logo from '../images/whole.svg'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { userContext } from '../App'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {

    const { setOpen,user,name } = useContext(userContext)


    return (
        <div className='navbar_div'>
            <div className='nav_logo'>
                <img src={logo} alt="" />
            </div>
            <div className='search_div'>
                <div className='search_area'>
                    <SearchIcon style={{opacity:'.7',marginRight:'.8rem'}}/>
                    <input type="text" placeholder='Search for your favorite groups in ATG'/>
                </div>
            </div>
            <div className='nav_log'>
                <span 
                    style={{
                        display:user?'none':'flex'
                    }}
                    className='nav_log_user'
                    onClick={()=>setOpen(true)}
                >Create account. <span style={{color:'#4C6FF5'}}>It's free!</span> <ArrowDropDownIcon /> </span>
                <span 
                    style={{
                        display:user?'flex':'none'
                    }}
                    className='nav_log_user'
                >
                <AccountCircleIcon style={{
                    height:'36px',
                    width:'36px',
                    marginRight:'.5rem'
                }}/>
                <span style={{fontSize:'14px'}}>{name}</span>
                <ArrowDropDownIcon /> </span>
            </div>
        </div>
    )
}

export default Navbar
