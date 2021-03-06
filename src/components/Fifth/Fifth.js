import React from 'react';

const Fifth =({isRounded, setIsRounded}) => {
    const onClickHandler = () => setIsRounded(!isRounded)
    const roundingStyle = isRounded ? {borderRadius: "50%"} : {};
    return (   
        <div className={"shape"} id ="element-five" style={roundingStyle} onClick={ onClickHandler }>
            <span className='text'>
                        5
            </span>
        </div>
    );
}


export default Fifth