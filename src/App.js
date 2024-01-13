import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Mouve from './pages/Mouve/Mouve'
import Favorite from './pages/Favorite/Favorite'
import Layout from './components/Layout/Layout'
import FilmDetails from './pages/FilmDetails/FilmDetails'
import Cast from './pages/FilmDetails/Cast'
import Reveiwes from './pages/FilmDetails/Reveiwes'
import Trailers from './pages/FilmDetails/Trailers'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Navigate to="home"/>} />
        <Route path='home' element={<Home />} />
        <Route path='mouve' element={<Mouve />} />
        <Route path='favorite' element={<Favorite />} />
        <Route path='mouve/:filmid' element={<FilmDetails/>}> 
        <Route path='cast' element={<Cast />} />
        <Route path='reveiews' element={<Reveiwes />} />
         <Route path='trailers' element={<Trailers />} />
        
        </Route>

      </Route>
    </Routes>
  )
}

export default App
