import React , {useState} from 'react';

const Nineth =({isRounded}) => {

    const [number,numberChange] = useState()

const onChangeHandler=(event)=>{
    const number = event.target.value
    numberChange(number)
} 
const onSubmitHandler=(event)=>{
    event.preventDefault()
    console.log("akkor")

}
        console.log(number)
    return (   
        <div className={"shape"} id ="element-nine" style={ isRounded ? {borderRadius: '50%'} : {}}>
            <span className='text'>
                       9
            </span>
            <form id="box-9">
                    <select name="operator">
                        <option value="mult">×</option>
                        <option value="div">/</option>
                        <option value="add">+</option>
                        <option value="sub">-</option>
                    </select>
                    <input class="w-95" type="number" onChange={onChangeHandler}/>
                    <button class="w-100" type="submit" onClick={onSubmitHandler}>Küldés</button>
                </form>
        </div>
    );
}


export default Nineth