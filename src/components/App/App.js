import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getImageDetails } from '../../apiCalls';
import Header from '../Header/Header';
import ImageCard from '../ImageCard/ImageCard';
import './App.css';

const App = () => {

  const [imageDetails, setImageDetails] = useState([])
  const [favorites, setFavorites] = useState([])
  const [icons, setIcons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getImageDetails()
    .then(details => {
      setImageDetails(details.reverse())
      setLoading(false)
    })
  }, [])

  const favoriteImage = e => {
    const targetId = e.target.id
    const searchFavorites = favorites.findIndex(favorite => favorite.date === targetId)
    if (searchFavorites === -1) {
      const foundImage = imageDetails.find(image => targetId === image.date)
      setFavorites([...favorites, foundImage])
      setIcons([...icons, targetId])
    } else {
      const filteredFavs = favorites.filter(favorite => favorite.date !== targetId)
      const filteredIcons = icons.filter(icon => icon !== targetId)
      setFavorites([...filteredFavs])
      setIcons([...filteredIcons])
    }
  }

  return (
    <Switch>
      <Route exact path='/' render={() => {
        return (
          <section className='main-container'>
            <Header />
            <ImageCard imageDetails={imageDetails} favoriteImage={favoriteImage} icons={icons}/>
            {loading && <h2>Loading...</h2>}
          </section>
        )}}
      />
    </Switch>
  );
}

export default App;
