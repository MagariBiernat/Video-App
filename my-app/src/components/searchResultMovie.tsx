import React, { useEffect, useState } from "react"
import { searchReducerInterface, Vimeo, Youtube } from "../utils/interfaces"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"
import { ItemYoutubeMovieInterface } from "../utils/youtubeInterface"
import vimeoInterface from "../utils/vimeoInterface"
import { useDispatch } from "react-redux"
import { SAVE_MOVIE } from "../redux/types"

interface IProps {
  movie: searchReducerInterface
}
const SearchResultMovie: React.FC<IProps> = ({ movie }) => {
  const dispatch = useDispatch()
  const url =
    movie.typeofService === Youtube
      ? `https://www.youtube.com/watch?v=${movie.data.id}`
      : movie.typeofService === Vimeo
      ? `https://vimeo.com/${movie.data.id}`
      : ""
  const handleAddMovie = () => {
    dispatch({
      type: SAVE_MOVIE,
      payload: {
        url: url,
        favourite: false,
        typeOfService: movie.typeofService,
        data: movie.data,
      },
    })
  }
  return (
    <>
      {movie.typeofService === Youtube && (
        <div style={{ marginTop: "50px" }}>
          <p className="text-center">
            This is search's result for <br /> {movie.searchValue}
          </p>
          <div>
            <Card style={{ maxWidth: "400px", padding: "8px" }}>
              <CardImg
                top
                className="cursor-pointer"
                width={movie.data.snippet.thumbnails.medium.width}
                height={movie.data.snippet.thumbnails.medium.height}
                src={movie.data.snippet.thumbnails.medium.url}
                alt="Card image cap"
                onClick={() => window.open(url, "_blank")}
              />
              <CardBody>
                <CardTitle tag="h6" className=" text-primary cursor-pointer">
                  <a
                    target="_blank"
                    href={`https://www.youtube.com/channel/${movie.data.snippet.channelId}`}
                  >
                    by {movie.data.snippet.channelTitle}
                  </a>
                </CardTitle>
                <CardTitle tag="h5">
                  {movie.data.snippet.localized.title}
                </CardTitle>
                {/* <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {movie.data.snippet.description}
                </CardSubtitle> */}
                <CardText>
                  {movie.data.statistics.viewCount} views
                  <br />
                  {movie.data.statistics.likeCount} likes
                </CardText>
                <Button onClick={handleAddMovie} color="primary">
                  Add movie
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}

export default SearchResultMovie
