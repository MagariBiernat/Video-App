import { savedMoviesType, videoInterface } from "../../utils/interfaces"
import {
  ActionType,
  CLEAR_ALL,
  MARK_AS_FAVOURITE,
  REMOVE_MOVIE,
  SAVE_MOVIE,
  UNMARK_AS_FAVOURITE,
} from "../types"

import { defineState } from "redux-localstore"

const defaultStore: savedMoviesType = []

const initialState: savedMoviesType = defineState(defaultStore)("movies")

type typeOfAction =
  | typeof SAVE_MOVIE
  | typeof REMOVE_MOVIE
  | typeof MARK_AS_FAVOURITE
  | typeof UNMARK_AS_FAVOURITE
  | typeof CLEAR_ALL
// type typeOfPayload = videoInterface

const moviesReducer = (
  state: savedMoviesType = initialState,
  action: ActionType<typeOfAction, any>
) => {
  switch (action.type) {
    case SAVE_MOVIE:
      const movieAlreadyExists = state.indexOf(action.payload) > -1

      let copyState = state.slice()

      if (movieAlreadyExists) {
        copyState = copyState.filter((item) => item !== action.payload)
        copyState.push({ ...action.payload, alreadyAdded: true })
      } else {
        copyState.push(action.payload)
      }

      return copyState
    case REMOVE_MOVIE:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ]

    case CLEAR_ALL:
      return initialState
    default:
      return state
  }
}

export default moviesReducer
