// searchReducerTypes
export const SEARCH_VIDEO = "SEARCH_VIDEO"
export const SUCCESS_SEARCH = "SUCCESS_SEARCH"
export const FAIL_SEARCH = "FAIL_SEARCH"
export const CLEAR_SEARCH = "CLEAR_SEARCH"

//moviesTypes

export const SAVE_MOVIE = "SAVE_MOVIE"
export const REMOVE_MOVIE = "REMOVE_MOVIE"
export const MARK_AS_FAVOURITE = "MARK_AS_FAVOURITE"
export const UNMARK_AS_FAVOURITE = "UNMARK_AS_FAVOURITE"
export const CLEAR_ALL = "CLEAR_ALL"

//errorTypes

export const ERROR_FETCHING_VIDEO = "ERROR_FETCHING_VIDEO"
export const CLEAR_ERRORS = "CLEAR_ERRORS"

export interface ActionType<ActionType, PayloadType> {
  type: ActionType
  payload?: PayloadType
}
