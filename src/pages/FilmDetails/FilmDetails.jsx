import React from 'react'
import { useState, useEffect } from 'react'
import { getById } from '../../utils/service/service'
import { useParams } from 'react-router-dom'
import { Loader } from '../../components/Loader/Loader'
import FullFilmCard from '../../components/FullFilmCard/FullFilmCard'
import { Outlet } from 'react-router-dom'
import { LOCAL_STOREGE_KEY } from '../../helpers/localStoregeOperation'
import {
  setLocalStorege,
  getLocalStorege
} from '../../helpers/localStoregeOperation'
import * as SC from './FilmDetails.styled'

export default function FilmDetails () {
  const [loader, setLoader] = useState(false)
  const [film, setFilm] = useState(null)
  const [error, setError] = useState(false)
  const [isInFavorite, setIsInFavorite] = useState(false)
  const { filmid } = useParams()

  useEffect(() => {
    setLoader(true)
    setError(false)
    getById(filmid)
      .then(data => {
        setFilm(data)
        setLoader(false)
      })
      .catch(() => {
        setError(true)
        setLoader(false)
      })
  }, [filmid])

  const hendlerFavorite = () => {
    const isInStorege = setLocalStorege(LOCAL_STOREGE_KEY, film)
    setIsInFavorite(isInStorege)
  }
  useEffect(() => {
    const savedMoves = getLocalStorege(LOCAL_STOREGE_KEY)
    if (savedMoves && savedMoves.some(data => data.id === Number(filmid))) {
      setIsInFavorite(true)
    }
  }, [filmid])

  return (
    <>
      {loader && <Loader />}
      {error && <p> Sorry </p>}
      {film && (
        <FullFilmCard
          id={film.id}
          title={film.title}
          genres={film.genres}
          vote_average={film.vote_average}
          popularity={film.popularity}
          release_date={film.release_date}
          poster_path={film.poster_path}
          overview={film.overview}
        />
      )}
       <SC.WrapperBtn>
      <SC.Button type='button' onClick={hendlerFavorite}>
          {isInFavorite ? 'Remove from favorite' : 'Add to favorite'}
        </SC.Button>
        </SC.WrapperBtn>
        
        <SC.Detail>
        <SC.DetailLink to='cast'> Cast </SC.DetailLink>
        <SC.DetailLink to='reveiews'> Reveiwes </SC.DetailLink>
        <SC.DetailLink to='trailers'> Trailers </SC.DetailLink>
        <Outlet />
        </SC.Detail>
      
    </>
  )
}
