import React , {useState} from 'react';

const Sixth =({isRounded}) => {
    const number = ''

    const [newNumber , setStateNumber] = useState(6)
        const numberChange = (number) => {
            console.log(number)
            setStateNumber(number)
        }

    const onChangeHandler = (event) =>{
        const number = event.target.value
        numberChange(number)

    }
    return (   
        <div className="box" style = { isRounded ? {borderRadius: '50%'} : {}}>
            <span className='text'>
                       {newNumber}
            </span>
            <form id="box-6">
            <input className="w-95" type="number" name="boxNumber" onChange={onChangeHandler}/>
            <button className="w-100" type="submit" >Küldés</button>
                </form>
        </div>
    );
}


export default Sixth