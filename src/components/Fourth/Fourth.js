import React, { useState } from 'react';

const Fourth =({isRounded}) => {
    const [isHidden , setHidden] = useState(false)
        const onClickHandler = () => {
            setHidden(!isHidden)
            timer()
        }
        const timer= ()=> setTimeout(() => setHidden(false), 1000);

    return (   
        <div className={"shape"} id ="element-four" style={isHidden ? {display:'none'}:{display:'block'}} onClick={onClickHandler}>
            <span className='text'>
                       4
            </span>
        </div>
    );
}


export default Fourth