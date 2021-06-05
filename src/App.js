import { useState } from 'react';
import './App.css';
import First from './components/First/First'
import Second from './components/Second/Second'
import Fifth from './components/Fifth/Fifth'

const App = () => {
  const [isRounded, setIsRounded] = useState(false)
  return (
    <div className='App'>
      <First isRounded={isRounded}/>
      <Second isRounded={isRounded}/>
      <Fifth isRounded={isRounded} setIsRounded={setIsRounded}/>
    </div>
  );
}


export default App;
