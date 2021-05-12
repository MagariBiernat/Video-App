import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SearchResultMovie from "../components/searchResultMovie"
import searchAction from "../redux/actons/searchAction"
import { RootState } from "../redux/reducers/rootReducer"

function MainPage() {
  const [searchValue, setSearchValue] = useState<string>("")
  const { typeofService, success, loading, data } = useSelector(
    (state: RootState) => state.search
  )
  const dispatch = useDispatch()

  console.log(typeofService, success, loading, data)
  const handleSearchForm = (event: React.FormEvent) => {
    event.preventDefault()

    if (searchValue.length > 0) {
      dispatch(searchAction(searchValue))
    }
  }
  return (
    <div>
      <h1>MainPage</h1>
      <form onSubmit={handleSearchForm}>
        <input type="search" onChange={(e) => setSearchValue(e.target.value)} />
        <button>Search</button>
      </form>
      {success && <SearchResultMovie />}
    </div>
  )
}

export default MainPage
