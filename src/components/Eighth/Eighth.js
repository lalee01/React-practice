import React from 'react';

const Eighth =({isRounded , mouseKoordinate}) => {
    const roundingStyle = isRounded ? {borderRadius: "50%"} : {}; 
    
    return (   
        <div className="shape" id ="element-eight" style={roundingStyle}>
            <span className='child-table'>
                       X:{mouseKoordinate.X}<br/>
                       Y:{mouseKoordinate.Y}
            </span>
        </div>
    );
}
export default Eighth