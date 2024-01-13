import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as SC from './FullFilmCard.styled'
import { BsFillStarFill, BsFillCalendarFill,BsArrowDownCircleFill, BsArrowBarLeft, BsFillCameraReelsFill} from 'react-icons/bs'

export default function FuulFilmCard ({
  id,
  title,
  genres,
  vote_average,
  release_date,
  poster_path,
  overview,
  popularity
}) {
  const location = useLocation()
  const backLink = location.state?.from ?? '/'
  const backLocation = useRef(backLink)
  console.log(backLocation)
  return (
    <>
      <Link to={backLocation.current}><BsArrowBarLeft/> go back</Link>
      <SC.Title>{title}</SC.Title>
      <SC.Wrapper key={id}>
        <SC.FilmImg src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt='' />
        <SC.Container>
          <SC.GenerList> <BsFillCameraReelsFill/> Generes:
            {genres.map(({ idGenre, name }) => (
              <SC.GenerItem key={idGenre}>
                <p>{name}</p>
              </SC.GenerItem>
            ))}
          </SC.GenerList>
          <SC.Property><BsFillStarFill/> {vote_average}</SC.Property>
          <SC.Property><BsFillCalendarFill/> {release_date}</SC.Property>
          <SC.Property><BsArrowDownCircleFill/>{popularity}</SC.Property>
          <p>{overview}</p>
        </SC.Container>
      </SC.Wrapper>
    </>
  )
}
