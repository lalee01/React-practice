import React, { useState} from 'react';

const Second =({isRounded}) => {
    
    const [color , setColor] = useState(false)
    const onMouseOverHandler = () => setColor(!color)
    const onMouseOutHandler = () => setColor(!color)

    const roundingStyle = isRounded ? {borderRadius: "50%"} : {};
    const colorChangeStyle = color ? {backgroundColor: "red"} : {};
    
    return (   
        <div className="shape" style={Object.assign(colorChangeStyle,roundingStyle)}
        id ="element-two" 
        onMouseOver={onMouseOverHandler} 
        onMouseOut={onMouseOutHandler}>
            <span className='text'>
                        2 
            </span>
            <span></span>
        </div>
    );
}


export default Second