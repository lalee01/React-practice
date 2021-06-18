import React, { useState } from 'react';

const Fourth =({isRounded}) => {
    const [isHidden , setHidden] = useState(false)
        const onClickHandler = () => {
            setHidden(!isHidden)
            timer()
        }
        const timer= ()=> setTimeout(() => setHidden(false), 1000);
        const roundingStyle = isRounded ? {borderRadius: "50%"} : {};
        const hiddenChange =  isHidden ? {display:'none'}:{display:'block'};
    return (   
        <div className="shape" id ="element-four" style={Object.assign(hiddenChange,roundingStyle)}
        onClick={onClickHandler}>
            <span className='text'>
                       4
            </span>
        </div>
    );
}


export default Fourth