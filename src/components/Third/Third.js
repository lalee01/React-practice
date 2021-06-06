import React, { useState } from 'react';

const Third =({isRounded}) => {
    const [number , setNumber] = useState(3)
    const doubleClickHandler = () => {
        setNumber(Math.floor(Math.random() * (20 - 1 + 1)) +1)
    }
        
    return (   
        <div className={"box"} style={ isRounded ? {borderRadius: '50%'} : {}} onDoubleClick={doubleClickHandler}>
            <span className='text'>
                       {number}
            </span>
        </div>
    );
}


export default Third