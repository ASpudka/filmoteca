import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Loader } from '../../components/Loader/Loader'
import { getPopular } from '../../utils/service/service'
import FilmCard from '../../components/FilmCard/FilmCard'
import PaginatedItems from '../../components/Pagination/Pagination'
import * as SC from './Home.styled'

export default function Home () {
  const [loader, setLoader] = useState(false)
  const [topFilms, setTopFilms] = useState(null)
  const [error, setError] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const pageNumber = Number(searchParams.get('page') ?? 1)

  useEffect(() => {
    setLoader(true)
    setError(false)
    getPopular(pageNumber)
      .then(data => {
        setTopFilms(data)
        setLoader(false)
      })
      .catch(() => {
        setError(true)
        setLoader(false)
      })
  }, [pageNumber])
  console.log('topFilms', topFilms)
  if (!topFilms) return
  const { total_pages } = topFilms

  return (
    <>
      {loader && <Loader />}
      {error && <p> Sorry </p>}
      <SC.FilmList>
        {topFilms?.results.map(
          ({ id, title, vote_average, release_date, poster_path }) => (
            <FilmCard
              id={id}
              title={title}
              vote_average={vote_average}
              release_date={release_date}
              poster_path={poster_path}
            />
          )
        )}
      </SC.FilmList>
      <PaginatedItems
        setPageNumber={setSearchParams}
        totalPages={total_pages}
        currentPage={pageNumber - 1}
      />
    </>
  )
}
