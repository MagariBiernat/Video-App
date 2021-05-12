import { savedMoviesType, videoInterface } from "../../utils/interfaces"
import {
  ActionType,
  CLEAR_ALL,
  MARK_AS_FAVOURITE,
  REMOVE_MOVIE,
  SAVE_MOVIE,
  UNMARK_AS_FAVOURITE,
} from "../types"

const initialState: savedMoviesType = []

type typeOfAction =
  | typeof SAVE_MOVIE
  | typeof REMOVE_MOVIE
  | typeof MARK_AS_FAVOURITE
  | typeof UNMARK_AS_FAVOURITE
  | typeof CLEAR_ALL
type typeOfPayload = videoInterface

const moviesReducer = (
  state: savedMoviesType = initialState,
  action: ActionType<typeOfAction, typeOfPayload>
) => {
  switch (action.type) {
    case SAVE_MOVIE:
      return [...state, action.payload]

    case CLEAR_ALL:
      return initialState
    default:
      return state
  }
}

export default moviesReducer
