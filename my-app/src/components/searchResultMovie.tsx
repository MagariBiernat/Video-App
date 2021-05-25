import React from "react"
import { searchReducerInterface, Vimeo, Youtube } from "../utils/interfaces"

import { useDispatch, useSelector } from "react-redux"
import { CLEAR_SEARCH, SAVE_MOVIE } from "../redux/types"
import YoutubeCard from "./YoutubeCard"
import VimeoCard from "./VimeoCard"
import { RootState } from "../redux/reducers/rootReducer"

interface IProps {
  movie: searchReducerInterface
}
const SearchResultMovie: React.FC<IProps> = ({ movie }) => {
  const movieAlreadyExists = useSelector((state: RootState) =>
    state.movies.map((item) => item.url)
  )
  const dispatch = useDispatch()
  const url =
    movie.typeofService === Youtube
      ? `https://www.youtube.com/watch?v=${movie.data.id}`
      : movie.typeofService === Vimeo
      ? `${movie.data.link}`
      : ""
  const handleAddMovie = () => {
    if (!movieAlreadyExists.includes(url)) {
      dispatch({
        type: SAVE_MOVIE,
        payload: {
          url: url,
          favourite: false,
          typeOfService: movie.typeofService,
          data: movie.data,
          dateAdded: Date.now(),
        },
      })
      dispatch({ type: CLEAR_SEARCH })
    } else {
      alert("It is already added")
    }
  }
  return (
    <>
      {movie.typeofService === Youtube && (
        <YoutubeCard
          movie={movie.data}
          url={url}
          handleAddMovie={handleAddMovie}
          toggleMovieModal={() => {}}
        />
      )}
      {movie.typeofService === Vimeo && (
        <VimeoCard
          movie={movie.data}
          url={url}
          handleAddMovie={handleAddMovie}
        />
      )}
    </>
  )
}

export default SearchResultMovie
