import React, { useEffect, useState } from "react"
import { searchReducerInterface, Vimeo, Youtube } from "../utils/interfaces"

import { ItemYoutubeMovieInterface } from "../utils/youtubeInterface"
import vimeoInterface from "../utils/vimeoInterface"
import { useDispatch } from "react-redux"
import { CLEAR_SEARCH, SAVE_MOVIE } from "../redux/types"
import YoutubeCard from "./YoutubeCard"
import VimeoCard from "./VimeoCard"

interface IProps {
  movie: searchReducerInterface
}
const SearchResultMovie: React.FC<IProps> = ({ movie }) => {
  const dispatch = useDispatch()
  const url =
    movie.typeofService === Youtube
      ? `https://www.youtube.com/watch?v=${movie.data.id}`
      : movie.typeofService === Vimeo
      ? `${movie.data.link}`
      : ""
  const handleAddMovie = async () => {
    await dispatch({
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
  }
  return (
    <>
      {movie.typeofService === Youtube && (
        <YoutubeCard
          movie={movie.data}
          searchValue={movie.searchValue}
          url={url}
          handleAddMovie={handleAddMovie}
        />
      )}
      {movie.typeofService === Vimeo && (
        <VimeoCard
          movie={movie.data}
          searchValue={movie.searchValue}
          url={url}
          handleAddMovie={handleAddMovie}
        />
      )}
    </>
  )
}

export default SearchResultMovie
