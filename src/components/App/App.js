import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import { getTodaysImageDetails } from '../../apiCalls';
import './App.css';

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
    <Switch>
      <Route exact path='/' render={() => {
        return (
          <section className='main-container'>
            <Header />
          </section>
        )}}
      />
    </Switch>
  );
}

export default App;
