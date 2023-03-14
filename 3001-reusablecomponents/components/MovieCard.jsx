import React from 'react'

function MovieCard({item}) {
  return (
    <div>{item?.name}</div>
  )
}

export default MovieCard