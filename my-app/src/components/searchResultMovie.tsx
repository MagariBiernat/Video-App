import React from "react"
import { searchReducerInterface } from "../utils/interfaces"

interface IProps {
  movie: searchReducerInterface
}
const SearchResultMovie: React.FC<IProps> = ({ movie }) => {
  console.log(movie)
  return (
    <div>
      <h2>This is search's result</h2>
    </div>
  )
}

export default SearchResultMovie
