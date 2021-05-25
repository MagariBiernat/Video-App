import React from "react"
import { useDispatch } from "react-redux"
import { AiOutlineHeart as FavouriteIcon } from "react-icons/ai"

import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap"
import {
  MARK_AS_FAVOURITE,
  REMOVE_MOVIE,
  UNMARK_AS_FAVOURITE,
} from "../redux/types"
import VimeoInterface from "../utils/vimeoInterface"
interface IProps {
  movie: VimeoInterface
  url: string
  handleAddMovie?: () => void
  saved?: boolean
  index?: number
  favourite?: boolean
}
const VimeoCard: React.FC<IProps> = ({
  movie,
  url,
  handleAddMovie,
  saved,
  index,
  favourite,
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
          <CardImg
            top
            className="cursor-pointer maxResolution"
            src={
              movie.pictures.sizes?.filter((item: any) => item.height > 166)[1]
                .link
            }
            alt="Card image cap"
            onClick={() => window.open(url, "_blank")}
          />
          <CardBody className="flex flex-col justify-between">
            <CardTitle tag="h6" className=" text-primary cursor-pointer ">
              <a target="_blank" rel="noreferrer" href={`${movie.user.link}`}>
                by {movie.user.name}
              </a>
            </CardTitle>
            <CardTitle tag="h5">{movie.name}</CardTitle>
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

export default React.memo(VimeoCard)
