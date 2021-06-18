import React, { useState} from 'react';
import './First.css';

const First =({isRounded}) => {
    const [isBlur, setIsBlur] = useState(true)
    const onClickHandler = () => setIsBlur(!isBlur)
    const roundingStyle = isRounded ? {borderRadius: "50%"} : {};
    const blurChange = isBlur ? "shape" : "shape blur"
    return (   
        <div className={blurChange} id="element-one" style={roundingStyle} onClick={ onClickHandler }>
            <span className='text'>
                        1
            </span>
        </div>
    );
}


export default First