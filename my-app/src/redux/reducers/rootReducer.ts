import { combineReducers } from "redux"
import { searchReducerInterface, videoInterface } from "../../utils/interfaces"
import moviesReducer from "./moviesReducer"
import searchReducer from "./searchReducer"
import errorsReducer from "./errorsReducer"
const rootReducer = combineReducers({
  search: searchReducer,
  movies: moviesReducer,
  errors: errorsReducer,
})

export interface RootState {
  search: searchReducerInterface
  movies: Array<videoInterface>
  errors: boolean
}

export default rootReducer
