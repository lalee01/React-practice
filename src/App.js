import { useState } from 'react';
import './App.css';
import First from './First/First'
import Fifth from './Fifth'

const App = () => {
  const [isRounded, setIsRounded] = useState(false)
  return (
    <div className='App'>
      <First isRounded={isRounded}/>
      <Fifth isRounded={isRounded} setIsRounded={setIsRounded}/>
    </div>
  );
}


export default App;
