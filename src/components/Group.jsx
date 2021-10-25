import { color } from '@mui/system'
import React,{useState} from 'react'

const Group = ({img,name}) => {

    const [follow, setFollow] = useState(false)

    return (
        <div className='group'>
            <div className='grp_pro'>
                <img src={img} alt="" />
                <span className='g_name'>{name}</span>
            </div>
            <div className='grp_btn' style={{
                cursor:'pointer',
                background:follow?'#000000':'#EDEEF0',
                color:follow?'white':'black'
            }}
                onClick={()=>setFollow(!follow)}
            >
                {
                    follow?'Followed':'Follow'
                }
            </div>
        </div>
    )
}

export default Group
