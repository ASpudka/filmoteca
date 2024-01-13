import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCastById } from '../../utils/service/service'
import * as SC from './FilmDetails.styled'

export default function Cast () {
  const [castFilm, setCastFilm] = useState(null)
  const { filmid } = useParams()

  useEffect(() => {
    getCastById(filmid)
      .then(data => {
        setCastFilm(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [filmid])

  return (
    <>
      {castFilm?.cast.length === 0 && <p>Sorry</p>}
      {castFilm?.cast.length > 0 && (
        <SC.List>
          {castFilm.cast.map(({ credit_id, name, profile_path, character }) => (
            <SC.Item key={credit_id}>
              <SC.CastImg
                loading='lazy'
                src={`https://image.tmdb.org/t/p/w400/${profile_path}`}
                alt=''
              />
              <p>{name}</p>
              <p>{character}</p>
            </SC.Item>
          ))}
        </SC.List>
      )}
    </>
  )
}
