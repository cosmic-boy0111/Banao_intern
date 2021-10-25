import React from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';

const SecondNav = () => {
    return (
        <>
        <div className='second_nav'>
            <div className='field'>
                <a href='/' className='to' active>All Posts(32)</a>
                <a href='/' className='to'>Article</a>
                <a href='/' className='to'>Event</a>
                <a href='/' className='to'>Education</a>
                <a href='/' className='to'>Job</a>

            </div>
            <div className='btn'>
                <button className='btn1'>
                    Write a Post <ArrowDropDownRoundedIcon/>
                </button>
                <button className='btn2'>
                    <GroupAddRoundedIcon style={{marginRight:'.5rem'}}/> Join Group
                </button>
            </div>
        </div>
        </>

    )
}

export default SecondNav
