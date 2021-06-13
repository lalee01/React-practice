import { useState } from 'react';
import './App.css';
import First from './components/First/First'
import Second from './components/Second/Second'
import Third from './components/Third/Third'
import Fourth from './components/Fourth/Fourth'
import Fifth from './components/Fifth/Fifth'
import Sixth from './components/Sixth/Sixth'
import Seventh from './components/Seventh/Seventh'
import Eighth from './components/Eighth/Eighth'
import Nineth from './components/Nineth/Nineth'

const App = () => {
  const [isRounded, setIsRounded] = useState(false)
  const [mouseKoordinate , setMouseKoordinate] = useState({
    X : 0,
    Y : 0
}) 
const mouseMoveHandler = (event) =>{
  setMouseKoordinate({
      X : event.clientX,
      Y : event.clientY
  })
}
  

  
  return (
    <div className='container' onMouseMove={mouseMoveHandler}>
      <First isRounded={isRounded}/>
      <Second isRounded={isRounded}/>
      <Third isRounded={isRounded} />
      <Fourth />
      <Fifth isRounded={isRounded} setIsRounded={setIsRounded}/>
      <Sixth isRounded={isRounded} />
      <Seventh isRounded={isRounded} />
      <Eighth isRounded={isRounded} mouseKoordinate={mouseKoordinate}/>
      <Nineth isRounded={isRounded} setIsRounded={setIsRounded}/>
    </div>
  );
}


export default App;
