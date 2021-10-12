import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SearchResultMovie from "../components/searchResultMovie"
import searchAction from "../redux/actons/searchAction"
import { RootState } from "../redux/reducers/rootReducer"
import { InputGroup, InputGroupAddon, Button, Input, Spinner } from "reactstrap"
import { MainPageWrapper } from "../utils/styledComponents"
import ListAddedMovies from "../components/ListAddedMovies"
import { CLEAR_ERRORS, CLEAR_SEARCH } from "../redux/types"

function MainPage() {
  const [searchValue, setSearchValue] = useState<string>("")
  const movie = useSelector((state: RootState) => state.search)
  const error = useSelector((state: RootState) => state.errors)
  const dispatch = useDispatch()

  const handleSearchForm = (event: React.FormEvent) => {
    event.preventDefault()

    if (searchValue.length > 0) {
      dispatch(searchAction(searchValue))
    }
  }

  const handleResetForm = (event: React.FormEvent) => {
    setSearchValue("")
    dispatch({ type: CLEAR_SEARCH })
    dispatch({ type: CLEAR_ERRORS })
  }

  return (
    <MainPageWrapper>
      <form onSubmit={handleSearchForm} onReset={handleResetForm}>
        <InputGroup style={{ width: "100%" }}>
          <Input
            style={{ width: "70%" }}
            type="search"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <InputGroupAddon addonType="append">
            <Button color="primary">Search</Button>
          </InputGroupAddon>
        </InputGroup>
        {searchValue.length > 0 && (
          <Button style={{ marginTop: "20px" }} color="primary" type="reset">
            Clear
          </Button>
        )}
      </form>
      {movie.loading ? (
        <Spinner
          style={{ width: "10rem", height: "10rem", marginTop: "30px" }}
          color="info"
          children={null}
        />
      ) : (
        <>
          {error && (
            <h2 style={{ marginTop: "120px", fontWeight: 300 }}>
              Error loading
            </h2>
          )}
          {movie?.success && <SearchResultMovie movie={movie} />}
        </>
      )}
      <ListAddedMovies />
    </MainPageWrapper>
  )
}

export default MainPage
