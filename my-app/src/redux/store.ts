import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers/rootReducer"
import storeSynchronize from "redux-localstore"

const middlewares = [thunk]

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares))

const store = createStore(rootReducer, composedEnhancers)

storeSynchronize(store, {
  whitelist: ["movies"],
})

export default store
