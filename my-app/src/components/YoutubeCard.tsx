import React from "react"
import { useDispatch } from "react-redux"

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"
import { REMOVE_MOVIE } from "../redux/types"
import { ItemYoutubeMovieInterface } from "../utils/youtubeInterface"

interface IProps {
  movie: ItemYoutubeMovieInterface
  searchValue: string
  url: string
  handleAddMovie?: () => void
  saved?: boolean
  index?: number
}

const YoutubeCard: React.FC<IProps> = ({
  movie,
  searchValue,
  url,
  handleAddMovie,
  saved,
  index,
}) => {
  const dispatch = useDispatch()

  const handleDeleteMovie = (index: number) => {
    dispatch({
      type: REMOVE_MOVIE,
      payload: index,
    })
  }

  return (
    <div style={{ marginTop: "20px" }}>
      {/* {!saved ? (
        <p className="text-center m-4">
          <strong>This is search's result for</strong> <br /> <br />
          {searchValue}
        </p>
      ) : null} */}
      <div>
        <Card
          style={{
            maxWidth: "400px",
            padding: "8px",
            minHeight: "480px",
            minWidth: "380px",
          }}
          className="flex flex-col justify-between"
        >
          <CardImg
            top
            className="cursor-pointer maxResolution"
            // width={movie.snippet.thumbnails.high.width}
            // height={movie.snippet.thumbnails.medium.height}
            src={movie.snippet.thumbnails.high.url}
            alt="Card image cap"
            onClick={() => window.open(url, "_blank")}
          />
          <CardBody className="flex flex-col justify-between">
            <CardTitle tag="h6" className=" text-primary cursor-pointer">
              <a
                target="_blank"
                href={`https://www.youtube.com/channel/${movie.snippet.channelId}`}
              >
                by {movie.snippet.channelTitle}
              </a>
            </CardTitle>
            <CardTitle tag="h5">{movie.snippet.localized.title}</CardTitle>
            <CardText>
              {movie.statistics.viewCount} views
              <br />
              {movie.statistics.likeCount} likes
            </CardText>
            <div>
              {!saved ? (
                <Button onClick={handleAddMovie} color="primary">
                  Add movie
                </Button>
              ) : (
                <div className="flex justify-between">
                  <Button
                    color="danger"
                    onClick={() => handleDeleteMovie(index ? index : 0)}
                  >
                    Remove movie
                  </Button>
                  <Button color="success"> Favourite</Button>
                </div>
              )}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default YoutubeCard
