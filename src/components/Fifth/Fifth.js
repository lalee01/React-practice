import React from 'react';

const Fifth =({isRounded, setIsRounded}) => {
    const onClickHandler = () => setIsRounded(!isRounded)
        
    return (   
        <div className={"shape"} id ="element-five" style={ isRounded ? {borderRadius: '50%'} : {}} onClick={ onClickHandler }>
            <span className='text'>
                        5
            </span>
        </div>
    );
}


export default Fifth