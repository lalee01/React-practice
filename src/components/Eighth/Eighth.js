import React from 'react';

const Eighth =({isRounded , mouseKoordinate}) => { 
    
    return (   
        <div className="shape" id ="element-eight" style={ isRounded ? {borderRadius: '50%'} : {}}>
            <span className='child-table'>
                       X:{mouseKoordinate.X}<br/>
                       Y:{mouseKoordinate.Y}
            </span>
        </div>
    );
}
export default Eighth