import './App.css';
import { useEffect, useState } from 'react';
import arth  from '../../assets/Arth.gif';
import { getTodaysImageDetails } from '../../apiCalls';

const App = () => {

  const [todaysDetails, setTodaysDetails] = useState({})

  useEffect(() => {
    getTodaysImageDetails()
    .then(details => {
      setTodaysDetails(details)
      console.log(details)
    })
  }, [])

  return (
    <img src={arth} alt=''/>
  );
}

export default App;
