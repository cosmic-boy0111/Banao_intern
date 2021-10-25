import React,{useContext,useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import '../style/Login.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import face from '../images/f_logo_RGB-Blue_1024.png'
import google from '../images/search.png'
import log_img from '../images/log_img.png'


import { userContext } from '../App'
import { IconButton } from '@mui/material';

export default function AlertDialog() {

    const { open,setOpen,setUser,setName } = useContext(userContext);
    const [change, setChange] = useState(false)
    const [pass, setPass] = useState(true)

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')

    const set = () =>{
        console.log(window.innerWidth);
        if(first === '' && last === ''){
            return;
        }
        setUser(true);
        setName(first+' '+last);
        setOpen(false)
        setChange(false)
    }

    const down = () =>{
        setOpen(false)
        setChange(false)
      }

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <div>
        </div> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                <div style={{
                    display:'flex',
                    justifyContent:'flex-end',
                    padding:'.5rem 0'
                }}>
                    <IconButton style={{
                        backgroundColor:'white',
                        color:'rgba(0, 0, 0, 0.514)',
                        padding:'0',
                    }}
                        onClick={down}
                    >
                    <CloseIcon fontSize='small' />
                    </IconButton>
                </div>
                <div style={{
                    backgroundColor:'white',
                    borderRadius:'8px 8px 8px 8px'
                }}>

                    <div className='log_head'>
                        <span className='log_head_text'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</span>
                        
                    </div>
                    <div className='log_me'>
                        <div className='log_me_head'>
                            {
                                change?<span className='log_me_head_text'>Sign In</span>:<span className='log_me_head_text'>Create Account</span>
                            }
                            
                            {
                                change?<span className='log_me_head_text1' onClick={()=>setChange(false)}>Don’t have an account yet? <span style={{color:'#4C6FF5'}}>Create new for free!</span></span>:<span className='log_me_head_text1' onClick={()=>setChange(true)} >Already have an account?<span style={{color:'#4C6FF5'}}> Sign In</span></span>
                            }
                        </div>
                        <div className='log_me_body'>
                            <div className='log_me_div1' style={{
                                display:change?'none':'flex'
                            }}>
                                <div style={{
                                    display:'flex'
                                }}>
                                    <div className='input_div' style={{width:'50%'}}>
                                        <input type="text" placeholder='First Name' value={first} onChange={(e)=>setFirst(e.target.value)}/>
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
                                <div className='create_btn' onClick={()=>setChange(true)}>
                                    <span>Create Account</span>
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
                            </div>
                            <div className='log_me_div1' style={{
                                display:change?'flex':'none'
                            }}>
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
                                
                                <div className='create_btn' onClick={set}>
                                    <span>Sign In</span>
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
                                <div className='forget'>
                                    <span>Forgot Password?</span>
                                </div>

                            </div>
                            <div className='log_me_div2'>
                                <img src={log_img} alt="" />
                                <span className='privacy' style={{
                                    display:change?'none':'block'
                                }}>By signing up, you agree to our Terms & conditions, Privacy policy</span>
                            </div>
                        </div>
                    </div>
                </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
