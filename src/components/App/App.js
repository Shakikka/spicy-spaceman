import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getImageDetails } from '../../apiCalls';
import Header from '../Header/Header';
import ImageCard from '../ImageCard/ImageCard';
import './App.css';

const App = () => {

  const [imageDetails, setImageDetails] = useState([])
  // const [favorites, setFavorites] = useState([])

  useEffect(() => {
    getImageDetails()
    .then(details => {
      setImageDetails(details.reverse())
    })
  }, [])

  // const favorite = () => {

  // }

  return (
    <Switch>
      <Route exact path='/' render={() => {
        return (
          <section className='main-container'>
            <Header />
            <ImageCard imageDetails={imageDetails}/>
          </section>
        )}}
      />
    </Switch>
  );
}

export default App;
