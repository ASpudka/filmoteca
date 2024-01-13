import React from 'react'
import { getTrailersById } from '../../utils/service/service'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function Trailers() {

const [trailers, setTrailers]=useState(null)
const { filmid } = useParams()

useEffect(()=>{getTrailersById(filmid).then(data=>{setTrailers(data)})
.catch(error => {
  console.log(error)
})},[filmid])
// if (!trailers)return
  return (
    <div><VideoPlayer trailersData={trailers?.results}/></div>
  )
}
