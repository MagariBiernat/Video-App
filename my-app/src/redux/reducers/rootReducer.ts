import { combineReducers } from "redux"
import { searchReducerInterface } from "../../utils/interfaces"
import searchReducer from "./searchReducer"
const rootReducer = combineReducers({
  search: searchReducer,
})

export interface RootState {
  search: searchReducerInterface
  //   errors: ErrorsRegisterAndLoginFromServer
  //   auth: IAuthState
  //   user: IUserData
  //   posts: { didChange: boolean; posts: { data: [IPost]; postsCount: number } }
}

export default rootReducer
