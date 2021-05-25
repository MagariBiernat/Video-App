import { ActionType, ERROR_FETCHING_VIDEO, CLEAR_ERRORS } from "../types"

const initialState: boolean = false

type typeOfAction = typeof ERROR_FETCHING_VIDEO | typeof CLEAR_ERRORS

const errorsReducer = (
  state: boolean = initialState,
  action: ActionType<typeOfAction, null>
) => {
  switch (action.type) {
    case ERROR_FETCHING_VIDEO:
      return true
    case CLEAR_ERRORS:
      return initialState
    default:
      return state
  }
}

export default errorsReducer
