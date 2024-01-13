import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as SC from './FilmCard.styled'
import { BsFillStarFill, BsFillCalendarFill } from 'react-icons/bs'

export default function FilmCard ({
  id,
  title,
  vote_average,
  release_date,
  poster_path
}) {
  const location = useLocation()

  return (
    <>
      <SC.Wrapper key={id}>
        <SC.FilmLink to={`/mouve/${id}`} state={{ from: location }}>
          <SC.FilmImg
            src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
            alt={`${title}`}
          />
          <SC.FilmTitle>{title}</SC.FilmTitle>
          <SC.FilmInfo>
            <p>
              <BsFillStarFill /> {vote_average}
            </p>
            <p><BsFillCalendarFill/>  {release_date}</p>
          </SC.FilmInfo>
        </SC.FilmLink>
      </SC.Wrapper>
    </>
  )
}
