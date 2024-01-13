import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Loader } from '../../components/Loader/Loader'
import { getByName } from '../../utils/service/service'
import FullFilmCard from '../../components/FilmCard/FilmCard'
import * as SC from './Mouve.styled'
import { BsSearch, BsFillTrash3Fill } from 'react-icons/bs'
import PaginatedItems from '../../components/Pagination/Pagination'

export default function Mouve () {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageNumber = Number(searchParams.get('page') ?? 1)
  const name = searchParams.get('name') ?? ''

  const [loader, setLoader] = useState(false)
  const [films, setFilms] = useState(null)
  const [error, setError] = useState(false)
  const [filmName, setFilmName] = useState(name ? name : '')

  const inputRef = useRef()

  useEffect(() => {
    if (name !== '') {
      console.log('worcks')
      setLoader(true)
      setError(false)
      getByName(name, pageNumber)
        .then(data => {
          setFilms(data)
          setLoader(false)
        })
        .catch(() => {
          setError(true)
          setLoader(false)
        })
    }
  }, [pageNumber, name])

  const hendlerImputChange = event => {
    setFilmName(event.target.value)
  }
  const hendlerSubmit = event => {
    event.preventDefault()
    setSearchParams(filmName === '' ? {} : { name: filmName })
  }
  const clearInput = () => {
    setFilmName('')
    setSearchParams({})
    setFilms(null)
    inputRef.current.focus()
  }

  return (
    <>
      {loader && <Loader />}
      {error && <p> Sorry </p>}
      <SC.Title>What movie are you looking for?</SC.Title>
      <SC.Container>
        <form onSubmit={hendlerSubmit}>
          <input
            type='text'
            value={filmName}
            ref={inputRef}
            onChange={hendlerImputChange}
          />
          <button type='submit'>{<BsSearch />}</button>
          <button type='button' onClick={clearInput}>
            {<BsFillTrash3Fill />}
          </button>
        </form>
      </SC.Container>
      <SC.Wrapper>
        {films?.results.map(
          ({ id, title, vote_average, release_date, poster_path }) => (
            <FullFilmCard
              id={id}
              title={title}
              vote_average={vote_average}
              release_date={release_date}
              poster_path={poster_path}
            />
          )
        )}
      </SC.Wrapper>
      {films?.results.length > 0 && (
        <PaginatedItems
          setPageNumber={setSearchParams}
          totalPages={films?.total_pages}
          name={name}
          currentPage={pageNumber - 1}
        />
      )}
    </>
  )
}
