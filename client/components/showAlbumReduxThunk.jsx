import React, { useEffect } from 'react'
import { fetchAlbums } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'


function ShowAlbumsReduxThunk() {

const dispatch = useDispatch()

  useEffect(() => {
    return dispatch(fetchAlbums())
  },[])

  const albums = useSelector(state => state.albums)

  return (
    <div className='show-albums'>
      <h1>Redux Thunk Album List</h1>
      {albums.map(albums => {
        return (
        <>
          <h2>Album: {albums.album}</h2>
          <ul key={albums.id}>
            <li>Artist: {albums.artist}</li>
            <li>Year: {albums.year}</li>
          </ul>
        </>
      )})}
    </div>
  )
}

export default ShowAlbumsReduxThunk