import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React from 'react'
import Iframe from 'react-iframe'

export default function VideoPlayer ({trailersData}) {
  return (
    <ul>
      {trailersData?.map(({id, key, name})=><li  key={id}><Iframe
        url={`https://www.youtube.com/embed/${key}?rel=0&showinfo=0&autoplay=1`}
        width='640px'
        height='320px'
        title={name}
        overflow='cover' 
       
      /></li>)}
      
    </ul>
  )
}
