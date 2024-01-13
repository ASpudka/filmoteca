import axios from 'axios'

const API_KEY = 'aa929e8eb05346640dc2d5ac9519d0d3'
export const getPopular = async page => {
  const searchParams = new URLSearchParams({ api_key: API_KEY, page: page })
  const url = `https://api.themoviedb.org/3/trending/movie/week?${searchParams}`
  const {data} = await axios.get(url)
  return data
}

export const getById = async id => {
  const searchParams = new URLSearchParams({ api_key: API_KEY })
  const url = `https://api.themoviedb.org/3/movie/${id}?${searchParams}`
  const {data} = await axios.get(url)
  return data
}

export const getCastById = async id => {
  const searchParams = new URLSearchParams({ api_key: API_KEY })
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?${searchParams}`
  const {data} = await axios.get(url)
  return data
}

export const getReviewById = async id => {
  const searchParams = new URLSearchParams({ api_key: API_KEY })
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?${searchParams}`
  const {data} = await axios.get(url)
  return data
}

export const getByName = async (name, page) => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    page: page,
    query: name,
    include_adult: false
  })
  const url = `https://api.themoviedb.org/3/search/movie?${searchParams}`
  const {data} = await axios.get(url)
  return data
}

export const getTrailersById = async id => {
  const searchParams = new URLSearchParams({ api_key: API_KEY })
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?${searchParams}`
  const {data} = await axios.get(url)
  return data
}
