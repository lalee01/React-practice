import React, { useState} from 'react';
import './First.css';

const First =({isRounded}) => {
    const [isBlur, setIsBlur] = useState(true)

    const onClickHandler = () => setIsBlur(!isBlur)
        
    return (   
        <div className={  isBlur ? "box" : "box blur" } style={ isRounded ? {borderRadius: '50%'} : {}} onClick={ onClickHandler }>
            <span className='text'>
                        1
            </span>
        </div>
    );
}


export default First