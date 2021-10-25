import React,{useContext,useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import face from '../images/f_logo_RGB-Blue_1024.png'
import google from '../images/search.png'
import { userContext } from '../App'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {

    const { open2,setOpen2 } = useContext(userContext);
    const [change, setChange] = useState(false)
    const [pass, setPass] = useState(true)

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')

   
    const down = () =>{
      setOpen2(false)
      setChange(false)
    }

  return (
    <div>
      
      <Dialog
        fullScreen
        open={open2}
        
        TransitionComponent={Transition}
      >
        <div className='log_me'>
                        <div className='log_me_body'>
                            <div className='log_me_div1' style={{
                              display:change?'none':'flex'
                            }}>
                                <div className='extra_head'>
                                  <span className='extra_head1'>Create Account</span>
                                  <div className='res_close' onClick={down}>
                                    <CloseIcon />
                                  </div>
                                </div>
                                <div style={{
                                    display:'flex'
                                }}>
                                    <div className='input_div' style={{width:'50%'}}>
                                        <input type="text" placeholder='First Name' value={first} onChange={(e)=>setFirst(e.target.value)} />
                                    </div>
                                    <div className='input_div' style={{width:'50%'}}>
                                        <input type="text" placeholder='Last Name' value={last} onChange={(e)=>setLast(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='input_div' style={{
                                    borderRadius:'0'
                                }}>
                                    <input type="email" placeholder='Email'/>
                                </div>
                                <div className='input_div' style={{
                                    borderRadius:'0'
                                }}>
                                    <input type={pass?'password':'text'} placeholder='Password'/>
                                    <RemoveRedEyeIcon fontSize='small' onClick={()=>setPass(!pass)} style={{cursor:'pointer'}}/>
                                </div>
                                <div className='input_div' style={{
                                    borderRadius:'0px 0px 2px 2px'
                                }}>
                                    <input type="password" placeholder='Confirm Password'/>
                                </div>
                                <div style={{
                                  display:'flex',
                                  justifyContent:'space-between',
                                  alignItems:'center'
                                }}>

                                  <div className='create_btn' onClick={()=>setChange(true)} style={{
                                    width:'50%'
                                  }}>
                                      <span>Create Account</span>
                                  </div>
                                  <span className='go' onClick={()=>setChange(true)}>or, Sign In</span>
                                </div>
                                <div className='another_login'>
                                    <span style={{
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}> <img src={face} alt="" style={{marginRight:'.5rem'}}/> Sign up with Facebook </span>
                                </div>
                                <div className='another_login'>
                                    <span style={{
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}> <img src={google} alt="" style={{marginRight:'.5rem'}}/> Sign up with Google </span>
                                </div>
                                <div className='privacy2'>
                                    
                                    By signing up, you agree to our Terms & conditions, Privacy policy
                                    
                                </div>
                            </div>
                            <div className='log_me_div1' style={{
                              display:change?'flex':'none'
                            }}>
                                <div className='extra_head'>
                                  <span className='extra_head1'>Welcome back!</span>
                                  <div className='res_close' onClick={down}>
                                    <CloseIcon />
                                  </div>
                                </div>
                                
                                <div className='input_div' style={{
                                    borderRadius:'0'
                                }}>
                                    <input type="email" placeholder='Email'/>
                                </div>
                                <div className='input_div' style={{
                                    borderRadius:'0'
                                }}>
                                    <input type={pass?'password':'text'} placeholder='Password'/>
                                    <RemoveRedEyeIcon fontSize='small' onClick={()=>setPass(!pass)} style={{cursor:'pointer'}}/>
                                </div>
                                <div style={{
                                  display:'flex',
                                  justifyContent:'space-between',
                                  alignItems:'center'
                                }}>
                                  <div className='create_btn' onClick={down}  style={{
                                    width:'50%'
                                  }}
                                  >
                                      <span>Sign In</span>
                                  </div>
                                  <span className='go' onClick={()=>setChange(false)}>or, Create Account</span>
                                </div>
                                <div className='another_login'>
                                    <span style={{
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}> <img src={face} alt="" style={{marginRight:'.5rem'}}/> Sign up with Facebook </span>
                                </div>
                                <div className='another_login'>
                                    <span style={{
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}> <img src={google} alt="" style={{marginRight:'.5rem'}}/> Sign up with Google </span>
                                </div>
                                <div className='res_forgot'>
                                  Forgot Password?
                                </div>
                            </div>
                        </div>
                    </div>
      </Dialog>
    </div>
  );
}
