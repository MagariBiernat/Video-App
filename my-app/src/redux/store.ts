import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers/rootReducer"

export const localStorageKey = "reduxState"

// TODO: add middleware for jwt auth for actions with posts etc
const middlewares = [thunk]

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares))

// TODO: initialState from localStorage
const store = createStore(rootReducer, {}, composedEnhancers)

export default store
