import { searchReducerInterface } from "../../utils/interfaces"
import vimeoInterface from "../../utils/vimeoInterface"
import youtubeInterface from "../../utils/youtubeInterface"
import {
  SEARCH_VIDEO,
  SUCCESS_SEARCH,
  FAIL_SEARCH,
  CLEAR_SEARCH,
} from "../types"
import { ActionType } from "../types"

const initialState: searchReducerInterface = {
  searchValue: "",
  typeofService: "",
  success: false,
  data: {},
  loading: false,
}

type typeOfAction =
  | typeof SEARCH_VIDEO
  | typeof SUCCESS_SEARCH
  | typeof FAIL_SEARCH
  | typeof CLEAR_SEARCH

type payloadType = {
  searchValue?: string
  typeofService?: string
  data?: vimeoInterface | youtubeInterface
}

const searchReducer = (
  state = initialState,
  action: ActionType<typeOfAction, payloadType>
) => {
  console.log(action.type, action?.payload)

  switch (action.type) {
    case SEARCH_VIDEO:
      return { ...initialState, loading: true }

    case SUCCESS_SEARCH:
      return {
        ...initialState,
        searchValue: action.payload?.searchValue,
        typeofService: action.payload?.typeofService,
        data: action.payload?.data,
        success: true,
      }

    case FAIL_SEARCH:
      return {
        ...initialState,
        searchValue: action.payload?.searchValue,
        success: false,
      }

    case CLEAR_SEARCH:
      return initialState

    default:
      return state
  }
}

export default searchReducer
