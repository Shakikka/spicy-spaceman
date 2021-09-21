import './App.css';
import { useEffect } from 'react';
import arth  from '../../assets/Arth.gif';
import { getTodaysImageDetails } from '../../apiCalls';

const App = () => {
  
  useEffect(() => {
    getTodaysImageDetails()
    .then(details => {
      console.log(details)
    })
  })




  return (
    <img src={arth} alt=''/>
  );
}

export default App;
