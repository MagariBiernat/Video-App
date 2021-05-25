import React from "react"
import { useDispatch } from "react-redux"
import { AiOutlineHeart as FavouriteIcon } from "react-icons/ai"

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap"
import {
  MARK_AS_FAVOURITE,
  REMOVE_MOVIE,
  UNMARK_AS_FAVOURITE,
} from "../redux/types"
import { ItemYoutubeMovieInterface } from "../utils/youtubeInterface"
import { Youtube } from "../utils/interfaces"

interface IProps {
  movie: ItemYoutubeMovieInterface
  url: string
  handleAddMovie?: () => void
  saved?: boolean
  index?: number
  favourite?: boolean
  toggleMovieModal: (movieUrl?: string, type?: string) => void
}

const YoutubeCard: React.FC<IProps> = ({
  movie,
  url,
  handleAddMovie,
  saved,
  index,
  favourite,
  toggleMovieModal,
}) => {
  const dispatch = useDispatch()

  const handleDeleteMovie = (index: number) => {
    dispatch({
      type: REMOVE_MOVIE,
      payload: index,
    })
  }

  const handleFavourite = () => {
    if (!favourite) {
      dispatch({ type: MARK_AS_FAVOURITE, payload: url })
    } else {
      dispatch({ type: UNMARK_AS_FAVOURITE, payload: url })
    }
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <div>
        <Card
          style={{
            maxWidth: "400px",
            padding: "8px",
            height: "540px",

            minWidth: "380px",
          }}
          className="flex flex-col justify-between"
        >
          {saved ? (
            <CardImg
              top
              className="cursor-pointer maxResolution"
              // width={movie.snippet.thumbnails.high.width}
              // height={movie.snippet.thumbnails.medium.height}
              src={movie.snippet.thumbnails.high.url}
              alt="Card image cap"
              onClick={() => toggleMovieModal(movie.id, Youtube)}
            />
          ) : (
            <CardImg
              top
              className="cursor-pointer maxResolution"
              // width={movie.snippet.thumbnails.high.width}
              // height={movie.snippet.thumbnails.medium.height}
              src={movie.snippet.thumbnails.high.url}
              alt="Card image cap"
              onClick={() => window.open(url, "_blank")}
            />
          )}

          <CardBody className="flex flex-col justify-between">
            <CardTitle tag="h6" className=" text-primary cursor-pointer">
              <a
                target="_blank"
                rel="noreferrer"
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
                  <FavouriteIcon
                    style={
                      favourite
                        ? {
                            fill: "red",
                            height: " 32px",
                            width: "32px",
                            color: "red",
                          }
                        : { height: " 32px", width: "32px" }
                    }
                    onClick={handleFavourite}
                  />
                </div>
              )}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default React.memo(YoutubeCard)
