import React , {useState} from 'react';

const Nineth =({isRounded}) => {
    
    const [numberState,setNumber] = useState()
    const [newNumber , setNewNumber] = useState(9)
    const [operator , setOperator] = useState()

    const onChangeHandler=(event)=>{
    const numberState = event.target.value
        setNumber(numberState)
    }

    const selectOperator=(event)=>{
        setOperator(event.target.value)
    }

    const onSubmitHandler=(event)=>{
        event.preventDefault()
        switch(operator){
            default : return setNewNumber(Number(newNumber) * Number(numberState))
            case "mult" : return setNewNumber(Number(newNumber) * Number(numberState))
            case "div" : return setNewNumber(Number(newNumber) / Number(numberState))
            case "add" : return setNewNumber(Number(newNumber) + Number(numberState))
            case "sub" : return setNewNumber(Number(newNumber) - Number(numberState))
        }
    }
    return (   
        <div className={"shape"} id ="element-nine" style={ isRounded ? {borderRadius: '50%'} : {}}>
            <span className='text'>
                       {newNumber}
            </span>
            <form id="box-9">
                    <select name="operator" onChange={selectOperator}>
                        <option value="mult">×</option>
                        <option value="div">/</option>
                        <option value="add">+</option>
                        <option value="sub">-</option>
                    </select>
                    <input className="w-95" type="number" onChange={onChangeHandler}/>
                    <button className="w-100" type="submit" onClick={onSubmitHandler}>Küldés</button>
                </form>
        </div>
    );
}


export default Nineth