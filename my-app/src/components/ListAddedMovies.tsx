import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/reducers/rootReducer"
import { videoInterface, Vimeo, Youtube } from "../utils/interfaces"

import { ListAddedMovies_DivWrapper } from "../utils/styledComponents"
import YoutubeCard from "./YoutubeCard"
import VimeoCard from "./VimeoCard"
import Pagination from "./Pagination"
import { Button } from "reactstrap"
import ModalMovie from "./ModalMovie"

const itemsPerPage = 6

function ListAddedMovies() {
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [onlyFavourite, setOnlyFavourite] = useState<boolean>(false)
  const [movies, setMovies] = useState<Array<videoInterface>>([])
  const [modal, setModal] = useState<boolean>(false)
  const [modalMovieUrl, setModalMovieUrl] = useState<string>("")
  const [modalMovieType, setModalMovieType] = useState<string>("")
  const allMoviesLength = useSelector((state: RootState) => state.movies.length)
  const moviesState = useSelector((state: RootState) => state.movies)

  console.log(moviesState)

  const toggleModal = () => setModal(!modal)

  const toggleMovieModal = (movieId?: string, type?: string) => {
    if (movieId && type) {
      setModalMovieUrl(movieId)
      setModalMovieType(type)
      toggleModal()
    }
  }

  useEffect(() => {
    if (onlyFavourite) {
      setMovies(
        moviesState
          .filter((item) => item.favourite)
          .slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage)
      )
    } else {
      setMovies(
        moviesState.slice(
          (pageNumber - 1) * itemsPerPage,
          pageNumber * itemsPerPage
        )
      )
    }
  }, [pageNumber, moviesState, onlyFavourite])

  return (
    <>
      <ListAddedMovies_DivWrapper>
        {allMoviesLength > 0 ? (
          <>
            <h5>All of your added movies</h5>

            <div className="listAdded-Options">
              <Pagination
                moviesLength={moviesState.length}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />

              <Button
                color={onlyFavourite ? "primary" : "danger"}
                onClick={() => setOnlyFavourite(!onlyFavourite)}
              >
                Favourite
              </Button>
            </div>

            <div>
              {movies.length > 0 ? (
                movies.map((movie: videoInterface | any, index) => (
                  <>
                    {movie.typeOfService === Youtube && (
                      <YoutubeCard
                        index={index}
                        movie={movie.data}
                        favourite={movie.favourite}
                        url={movie.url}
                        saved={true}
                        toggleMovieModal={toggleMovieModal}
                      />
                    )}
                    {movie.typeOfService === Vimeo && (
                      <VimeoCard
                        index={index}
                        movie={movie.data}
                        favourite={movie.favourite}
                        url={movie.url}
                        saved={true}
                      />
                    )}
                  </>
                ))
              ) : (
                <h2>No movies to display</h2>
              )}
            </div>
          </>
        ) : (
          <h2>No movies added yet</h2>
        )}
      </ListAddedMovies_DivWrapper>
      {modal && (
        <ModalMovie
          type={modalMovieType}
          showModal={modal}
          movieUrl={modalMovieUrl}
          toggleModal={toggleModal}
        />
      )}
    </>
  )
}

export default React.memo(ListAddedMovies)
