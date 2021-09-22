import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getImageDetails } from '../../apiCalls';
import Header from '../Header/Header';
import ImageCard from '../ImageCard/ImageCard';
import './App.css';

const App = () => {

  const [imageDetails, setImageDetails] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    getImageDetails()
    .then(details => {
      setImageDetails(details.reverse())
    })
  }, [])

  const favoriteImage = e => {
    const targetId = e.target.id
    const searchFavorites = favorites.findIndex(favorite => favorite.date === targetId)
    if (searchFavorites === -1) {
      const foundImage = imageDetails.find(image => targetId === image.date)
      setFavorites([...favorites, foundImage])
    } else {
      const filteredFavs = favorites.filter(favorite => favorite.date !== targetId)
      setFavorites([...filteredFavs])
    }
  }

  return (
    <Switch>
      <Route exact path='/' render={() => {
        return (
          <section className='main-container'>
            <Header />
            <ImageCard imageDetails={imageDetails} favoriteImage={favoriteImage}/>
          </section>
        )}}
      />
    </Switch>
  );
}

export default App;
