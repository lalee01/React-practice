import { useState } from 'react';
import './App.css';
import First from './components/First/First'
import Second from './components/Second/Second'
import Third from './components/Third/Third'
import Fourth from './components/Fourth/Fourth'
import Fifth from './components/Fifth/Fifth'

const App = () => {
  const [isRounded, setIsRounded] = useState(false)
  return (
    <div className='App'>
      <First isRounded={isRounded}/>
      <Second isRounded={isRounded}/>
      <Third isRounded={isRounded} />
      <Fourth />
      <Fifth isRounded={isRounded} setIsRounded={setIsRounded}/>
    </div>
  );
}


export default App;
