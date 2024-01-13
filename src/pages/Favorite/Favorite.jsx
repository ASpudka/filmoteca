import React from 'react'
import { useState } from 'react'
import {
  getLocalStorege,
  LOCAL_STOREGE_KEY
} from '../../helpers/localStoregeOperation'

import FilmCard from '../../components/FilmCard/FilmCard'
import * as SC from './Favorite.styled'

export default function Favorite () {
  const [favoriteFilm] = useState(() => {
    const savedMoves = getLocalStorege(LOCAL_STOREGE_KEY)
    return savedMoves
  })

  // useEffect(() => {
  //   const savedMoves = getLocalStorege(LOCAL_STOREGE_KEY)
  //   console.log('savedMoves', savedMoves)
  //   setFavoriteFilm(savedMoves)
  // }, [])

  return (
    <>
      <SC.List>
        {favoriteFilm?.map(
          ({ id, title, popularity, release_date, poster_path, overview }) => (
            <FilmCard
              id={id}
              title={title}
              popularity={popularity}
              release_date={release_date}
              poster_path={poster_path}
              overview={overview}
            />
          )
        )}
      </SC.List>
    </>
  )
}
