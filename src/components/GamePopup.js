import React from 'react';
import '../CSS/GamePopup.css';

function Popup(props)
{
    return ( props.trigger) ? (
        <div className='gpopup'> 
             <div className ='gpopup-inner'>
                <button className='gclose-btn' onClick={() => props.setTrigger(false)}> Cancel </button>
                {props.children}

             </div>
        </div>
    ) : '';
}
export default Popup