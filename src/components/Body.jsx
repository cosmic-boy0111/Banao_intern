import React,{useState,useContext} from 'react'
import '../style/Body.css'
import img from '../images/Rectangle 2.png'
import res_img from '../images/res_back.png'
import SecondNav from './SecondNav'
import img1 from '../images/Rectangle 5.png'
import img2 from '../images/Rectangle 3.png'
import img3 from '../images/Rectangle 5 (1).png'
import img4 from '../images/Rectangle 3 (1).png'
import img5 from '../images/Rectangle 5 (2).png'
import img6 from '../images/Rectangle 3 (2).png'
import img7 from '../images/last.png'
import g1 from '../images/g1.png'
import g2 from '../images/g2.png'
import g3 from '../images/g3.png'
import g4 from '../images/g4.png'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import PlaceIcon from '@mui/icons-material/Place';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Group from './Group'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material'
import ResSecondNav from './ResSecondNav'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { userContext } from '../App'

function Body() {

    const [change, setChange] = useState(false)

    const { open2,setOpen2,user,setUser } = useContext(userContext)

    const set = (text) =>{
        if(text===''){
            setChange(false)
            return
        }
        setChange(true)
    }

    const leave = () =>{
        setUser(false);
        setOpen2(true)
    }

    return (
        <div>
            <div className='float_btn' >
                <EditTwoToneIcon />
            </div>
            <div>
                <div className='head_img'>
                    <img src={ window.innerWidth <= 1000 ? res_img : img} alt="" />
                    <div className='btn_div_res'>
                        <ArrowBackIcon />
                        {
                            user?<div className='join_grp' onClick={leave}>
                            Leave Group
                        </div>:<div className='join_grp' onClick={()=>setOpen2(true)}>
                            Join Group
                        </div>
                        }
                        

                    </div>
                </div>
                <div className='frame'>
                    
                    <div className='header_text'>

                        <span >Computer Engineering</span>
                        <span className='header_footer_text'>142,765 Computer Engineers follow this </span>
                    </div>
                </div>
            </div>
                <SecondNav />
                <ResSecondNav />
            <div className='group_container'>
                <div className='groups'>


                    {/* first card */}

                    <div className='card2'>
                        <img src={img1} alt="" />
                        <div className='info'>

                            <div className='tag'>
                                ✍ Article
                            </div>
                            <div className='desc'>
                                <div className='main_desc'>
                                    <div className='div1'>
                                        What if famous brands had regular fonts? Meet RegularBrands
                                    </div>
                                    <div className='div2' class="dropdown">
                                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <MoreHorizIcon />
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>Edit</li>
                                            <li>Report</li>
                                            <li>Option 3</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className='sub_desc'>
                                I’ve worked in UX for the better part of a decade. From rei…
                                </div>
                            </div>
                            <div className='foot'>
                                <div className='pro'>
                                    <img src={img2} alt="" />
                                    <h4 className='name'>
                                        <span> Sarthak Karma </span>
                                        <div className='views2'>
                                            <RemoveRedEyeIcon fontSize='small'/> 1.4k views
                                        </div>
                                    </h4>
                                </div>
                                <div className='option'>
                                    <div className='views'>
                                        <RemoveRedEyeIcon fontSize='small'/> 1.4k views
                                    </div>
                                    <div className='share'>
                                        <div>
                                            <ShareIcon fontSize='small' /> 

                                        </div>
                                        <span className='share2'>share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* second card */}

                    <div className='card2'>
                        <img src={img3} alt="" />
                        <div className='info'>

                            <div className='tag'>
                                🔬 Education
                            </div>
                            <div className='desc'>
                                <div className='main_desc'>
                                    <div className='div1'>
                                    Tax Benefits for Investment under National Pension Scheme launched by Government
                                    </div>
                                    <div className='div2' class="dropdown">
                                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <MoreHorizIcon />
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>Edit</li>
                                            <li>Report</li>
                                            <li>Option 3</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='sub_desc'>
                                I’ve worked in UX for the better part of a decade. From rei…
                                </div>
                            </div>
                            <div className='foot'>
                                <div className='pro'>
                                    <img src={img4} alt="" />
                                    <h4 className='name'>
                                        <span> Sarah West </span>
                                        <div className='views2'>
                                            <RemoveRedEyeIcon fontSize='small'/> 1.4k views
                                        </div>
                                    </h4>
                                </div>
                                <div className='option'>
                                    <div className='views'>
                                        <RemoveRedEyeIcon fontSize='small'/> 1.4k views
                                    </div>
                                    <div className='share'>
                                        <div>
                                            <ShareIcon fontSize='small' /> 

                                        </div>
                                        <span className='share2'>share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* third card */}

                    <div className='card2'>
                        <img src={img5} alt="" />
                        <div className='info'>

                            <div className='tag'>
                                📆 Meetup
                            </div>
                            <div className='desc'>
                                <div className='main_desc'>
                                    <div className='div1'>
                                    Finance & Investment Elite Social Mixer @Lujiazui
                                    </div>
                                    <div className='div2' class="dropdown">
                                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <MoreHorizIcon />
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>Edit</li>
                                            <li>Report</li>
                                            <li>Option 3</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='sub_desc'>
                                    <div className='sub_desc1'>
                                        <InsertInvitationIcon  fontSize='small'/> Fri, 12 Oct, 2018 
                                    </div>
                                    <div className='sub_desc2'>
                                        <PlaceIcon  fontSize='small'/> Ahmedabad, India
                                    </div>
                                </div>
                                <div className='card_btn' style={{
                                    color:' #E56135',
                                    fontSize:'13px'
                                }}>
                                    Visit Website
                                </div>
                            </div>
                            <div className='foot'>
                                <div className='pro'>
                                    <img src={img6} alt="" />
                                    <h4 className='name'>
                                        <span>Ronal Jones </span>
                                        <div className='views2'>
                                            <RemoveRedEyeIcon fontSize='small'/> 1.4k views
                                        </div>
                                    </h4>
                                </div>
                                <div className='option'>
                                    <div className='views'>
                                        <RemoveRedEyeIcon fontSize='small'/> 1.4k views
                                    </div>
                                    <div className='share'>
                                        <div>
                                            <ShareIcon fontSize='small' /> 

                                        </div>
                                        <span className='share2'>share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* forth card */}

                    <div className='card2'>
                        <div className='info'>

                            <div className='tag'>
                                💼️ Job
                            </div>
                            <div className='desc'>
                                <div className='main_desc'>
                                    <div className='div1'>
                                    Software Developer
                                    </div>
                                    <div className='div2' class="dropdown">
                                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <MoreHorizIcon />
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>Edit</li>
                                            <li>Report</li>
                                            <li>Option 3</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='sub_desc'>
                                    <div className='sub_desc1'>
                                        <WorkOutlineIcon  fontSize='small'/> Innovaccer Analytics Private Ltd.
                                    </div>
                                    <div className='sub_desc2'>
                                        <PlaceIcon  fontSize='small'/> Noida, India
                                    </div>
                                </div>
                                <div className='card_btn' style={{
                                    color:'#02B875',
                                    fontSize:'13px'
                                }}>
                                    Apply on Timesjobs
                                </div>
                            </div>
                            <div className='foot'>
                                <div className='pro'>
                                    <img src={img7} alt="" />
                                    <h4 className='name'>
                                        <span>Joseph Gray</span>
                                        <div className='views2'>
                                            <RemoveRedEyeIcon fontSize='small'/> 1.4k views
                                        </div>
                                    </h4>
                                </div>
                                <div className='option'>
                                    <div className='views'>
                                        <RemoveRedEyeIcon fontSize='small'/> 1.4k views
                                    </div>
                                    <div className='share'>
                                        <div>
                                            <ShareIcon fontSize='small' /> 

                                        </div>
                                        <span className='share2'>share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='rec_group'>
                    <div className='loc' >
                        <PlaceIcon  fontSize='small'/> <input type="text" placeholder='Enter your location' onChange={(e)=>set(e.target.value)}/> 
                        {
                            change?<ModeEditOutlineIcon  fontSize='small'/>:<CloseIcon  fontSize='small'/>
                        }
                    </div>
                    <div className='warn'>
                        <ErrorOutlineIcon fontSize='small' style={{
                            marginRight:'.5rem'
                        }}/>
                        <span>Your location will help us serve better and extend a personalised experience.</span>
                    </div>
                    <span className='rec' >👍REcommended Groups</span>
                    <div className='rec_all_group'>
                        <Group img={g1} name={'Leisure'}/>
                        <Group img={g2} name={'Activism'}/>
                        <Group img={g3} name={'MBA'}/>
                        <Group img={g4} name={'Philosophy'}/>
                    </div>
                    
                <div style={{
                    textAlign:'right',
                    fontSize:'12px',
                    color:'#2F6CE5',
                    marginTop:'2rem'
                }}>
                    see more...
                </div>
                </div>

            </div>
        </div>
    )
}

export default Body
