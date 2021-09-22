import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getTodaysImageDetails } from '../../apiCalls';
import Header from '../Header/Header';
import ImageCard from '../ImageCard/ImageCard';
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
            <ImageCard todaysDetails={todaysDetails}/>
          </section>
        )}}
      />
    </Switch>
  );
}

export default App;
