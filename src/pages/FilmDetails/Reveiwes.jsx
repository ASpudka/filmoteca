import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getReviewById } from '../../utils/service/service'
import * as SC from './FilmDetails.styled'

export default function Reveiwes () {
  const [reveiwesFilm, setReveiwesFilm] = useState(null)
  const { filmid } = useParams()

  useEffect(() => {
    getReviewById(filmid)
      .then(data => {
        setReveiwesFilm(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [filmid])
  console.log(reveiwesFilm)
  return (
    <>
      {reveiwesFilm?.results.length === 0 && <p>Sorry</p>}
      {reveiwesFilm?.results.length > 0 && (
        <SC.List>
          {reveiwesFilm.results.map(({ id, author, content }) => (
            <SC.Item key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </SC.Item>
          ))}
         </SC.List>
      )}
    </>
  )
}
