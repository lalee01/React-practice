import React , {useState} from 'react';

const Sixth =({isRounded}) => {
    const [newNumber , setStateNumber] = useState(6)
    const [inBoxNumber , setBoxNumber] = useState(6)

        const onSubmitHandler = (event) =>{
            event.preventDefault()
            setBoxNumber(newNumber)
        }
        
        const numberChange = (number) => {
            setStateNumber(number)
        }

        const onChangeHandler = (event) =>{
        const number = event.target.value
        numberChange(number)
        }
    return (   
        <div className={"shape"} id ="element-six" style = { isRounded ? {borderRadius: '50%'} : {}}>
            <span className='text'>
                       {inBoxNumber}
            </span>
            <form id="box-6">
            <input className="w-95" type="number" onChange={onChangeHandler}/>
            <button className="w-100" type="submit" onClick={onSubmitHandler}>Küldés</button>
                </form>
        </div>
    );
}


export default Sixth