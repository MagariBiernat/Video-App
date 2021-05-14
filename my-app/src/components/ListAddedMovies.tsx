import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/reducers/rootReducer"
import {
  savedMoviesType,
  videoInterface,
  Vimeo,
  Youtube,
} from "../utils/interfaces"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"
import { ListAddedMovies_DivWrapper } from "../utils/styledComponents"
import YoutubeCard from "./YoutubeCard"
import VimeoCard from "./VimeoCard"
import { REMOVE_MOVIE } from "../redux/types"

function ListAddedMovies() {
  const movies = useSelector((state: RootState) => state.movies)

  console.log(movies)
  return (
    <ListAddedMovies_DivWrapper>
      {movies.length > 0 ? (
        <>
          <h5>All of your added movies</h5>

          <div>
            {movies.map(
              (movie: videoInterface | any, index) => (
                <>
                  {movie.typeOfService === Youtube && (
                    <YoutubeCard
                      index={index}
                      movie={movie.data}
                      searchValue={movie.searchValue}
                      url={movie.url}
                      saved={true}
                    />
                  )}
                  {movie.typeOfService === Vimeo && (
                    <VimeoCard
                      index={index}
                      movie={movie.data}
                      searchValue={movie.searchValue}
                      url={movie.url}
                      saved={true}
                    />
                  )}
                </>
              )
              //         <div key={index}>
              //           <div>
              //             <Card
              //               style={{
              //                 padding: "8px",
              //                 height: " 400px",
              //               }}
              //             >
              //               <CardImg
              //                 top
              //                 className="cursor-pointer"
              //                 width={movie.data.snippet.thumbnails.medium.width}
              //                 height={movie.data.snippet.thumbnails.medium.height}
              //                 src={movie.data.snippet.thumbnails.medium.url}
              //                 alt="Card image cap"
              //                 onClick={() => window.open(movie.url, "_blank")}
              //               />
              //               <CardBody>
              //                 <CardTitle
              //                   tag="h6"
              //                   className=" text-primary cursor-pointer"
              //                 >
              //                   <a
              //                     target="_blank"
              //                     href={`https://www.youtube.com/channel/${movie.data.snippet.channelId}`}
              //                   >
              //                     by {movie.data.snippet.channelTitle}
              //                   </a>
              //                 </CardTitle>
              //                 <CardTitle tag="h5">
              //                   {movie.data.snippet.localized.title}
              //                 </CardTitle>
              //                 {/* <CardSubtitle tag="h6" className="mb-2 text-muted">
              //   {movie.data.snippet.description}
              // </CardSubtitle> */}
              //                 <CardText>
              //                   {movie.data.statistics.viewCount} views
              //                   <br />
              //                   {movie.data.statistics.likeCount} likes
              //                 </CardText>
              //                 {/* <Button onClick={handleAddMovie} color="primary">
              //   Add movie
              // </Button> */}
              //               </CardBody>
              //             </Card>
              //           </div>
              //         </div>
            )}
          </div>
        </>
      ) : (
        <h2>No movies added yet</h2>
      )}
    </ListAddedMovies_DivWrapper>
  )
}

export default ListAddedMovies
