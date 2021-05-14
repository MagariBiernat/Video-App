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
import VimeoInterface from "../utils/vimeoInterface"
interface IProps {
  movie: VimeoInterface
  searchValue: string
  url: string
  handleAddMovie?: () => void
  saved?: boolean
  index?: number
}
const VimeoCard: React.FC<IProps> = ({
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
    <div style={{ marginTop: "50px" }}>
      <div>
        <Card
          style={{ maxWidth: "400px", padding: "8px", height: "480px" }}
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
              <a target="_blank" href={`${movie.user.link}`}>
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

export default VimeoCard
