import React, { useState} from 'react';

const Second =({isRounded}) => {
    

    const [color , setColor] = useState(false)
    const onMouseOverHandler = () => setColor(!color)
    const onMouseOutHandler = () => setColor(!color)
    const styleSet={
        colorSetting :color ? {backgroundColor:"red"} : {} ,
        roundSetting :isRounded ? {borderRadius: "50%"} : {}

    }
    console.log(styleSet.colorSetting)
    console.log(styleSet.roundSetting)
    return (   
        <div className="shape" style = {styleSet.colorSetting , styleSet.roundSetting}
          /*{color ? {backgroundColor:'red'} : {} &
                isRounded ? {borderRadius: '50%'} : {}*/
        
        id ="element-two" 
        onMouseOver={onMouseOverHandler} 
        onMouseOut={onMouseOutHandler}>
            <span className='text'>
                        2 
            </span>
            <span></span>
        </div>
    );
}


export default Second