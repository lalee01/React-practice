import React, { useState} from 'react';

const Second =() => {
    const onMouseOver = false
    const [color , setColor] = useState(false)
    const onMouseOverHandler = () => setColor(!color)
    const onMouseOutHandler = () => setColor(!color)
    
    return (   
        <div className='box' style ={ color ? {backgroundColor:'red'} : {backgroundColor:'firebrick'}} onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler}>
            <span className='text'>
                        2
            </span>
        </div>
    );
}


export default Second