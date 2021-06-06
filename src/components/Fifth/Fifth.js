import React from 'react';

const Fifth =({isRounded, setIsRounded}) => {
    const onClickHandler = () => setIsRounded(!isRounded)
        
    return (   
        <div className={ "box"} style={ isRounded ? {borderRadius: '50%', backgroundColor: 'sandybrown'} : {backgroundColor: 'sandybrown'}} onClick={ onClickHandler }>
            <span className='text'>
                        5
            </span>
        </div>
    );
}


export default Fifth