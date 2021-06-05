import { useState } from 'react'

const Button = () => {
    const STEP = 10
    const MAX_COLOR = 255
    const [buttonState, setButtonState] = useState({
        color: 0,
        value: 0
    })

    const handleOnClick = () => {
        incrementState()
        
    }

    const incrementState = () => {
        const newColor = buttonState.color + STEP > MAX_COLOR 
            ? 0 
            : buttonState.color + STEP

        setButtonState({
            ...buttonState,
            value: buttonState.value + STEP,
            color: newColor
        })
    }


    return (
        <div 
        style={{
            backgroundColor: `rgb(${buttonState.color}, ${buttonState.color}, ${buttonState.color})`,
            width: '200px',
            height: '200px',
            color: 'white'
        }}
        onClick={handleOnClick}
        >
            color: {`rgb(${buttonState.color}, ${buttonState.color}, ${buttonState.color})`} <br/>
            value: {buttonState.value}
        </div>
    )
}

export default Button