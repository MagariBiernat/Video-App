import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers/rootReducer"
import storeSynchronize from "redux-localstore"

export const localStorageKey = "reduxState"

const middlewares = [thunk]

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares))

// TODO: initialState from localStorage
const store = createStore(rootReducer, composedEnhancers)

storeSynchronize(store, {
  whitelist: ["movies"],
}) // the default config synchronizes the whole store

export default store
