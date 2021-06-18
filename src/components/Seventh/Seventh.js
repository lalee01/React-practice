import React, { useState } from 'react';

const Seventh =({isRounded}) => {
    const [pressedKey , setPressedKey] = useState(7)
    const keyPressHandler = (event) =>{
        setPressedKey(event.key)
    }
    const roundingStyle = isRounded ? {borderRadius: "50%"} : {};
    return (   
        <div className={"shape"} id ="element-seven" style={roundingStyle} onKeyPress={keyPressHandler}>
            <span className='text'>
                       {pressedKey}
            </span>
            <input className="w-95" type="text"/>
        </div>
    );
}
export default Seventh