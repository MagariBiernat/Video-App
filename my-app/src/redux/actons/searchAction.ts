import { Dispatch } from "redux"
import checkSearchUrl from "../../utils/checkSearchUrl"
import { Vimeo, Youtube } from "../../utils/interfaces"
import vimeoInterface from "../../utils/vimeoInterface"
import youtubeInterface from "../../utils/youtubeInterface"
import {
  ActionType,
  CLEAR_ERRORS,
  CLEAR_SEARCH,
  ERROR_FETCHING_VIDEO,
  FAIL_SEARCH,
  SEARCH_VIDEO,
  SUCCESS_SEARCH,
} from "../types"

type typeOfAction =
  | typeof SEARCH_VIDEO
  | typeof SUCCESS_SEARCH
  | typeof FAIL_SEARCH
  | typeof CLEAR_SEARCH
  | typeof CLEAR_ERRORS
  | typeof ERROR_FETCHING_VIDEO

type typeOfPayload = {
  searchValue?: string
  typeofService?: string
  data?: vimeoInterface | youtubeInterface
}

const ERROR_ID_NOT_YOUTUBE = "ERROR_ID_NOT_YOUTUBE"

const API_KEY_YOUTUBE = process.env.REACT_APP_API_KEY_YOUTUBE
const API_KEY_VIMEO = process.env.REACT_APP_API_KEY_VIMEO

const searchAction =
  (searchValue: string) =>
  (dispatch: Dispatch<ActionType<typeOfAction, typeOfPayload>>) => {
    dispatch({ type: SEARCH_VIDEO })
    dispatch({ type: CLEAR_ERRORS })

    const checkedUrl = checkSearchUrl(searchValue)

    setTimeout(() => {
      switch (checkedUrl?.typeOfService) {
        case Youtube:
          console.log("Youtube start")
          fetchData(
            `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2C%20snippet%2C%20statistics&id=${checkedUrl.urlLink}&key=${API_KEY_YOUTUBE}`
          )
            .then((response) => {
              if (response.ok) return response.json()

              throw new Error()
            })
            .then((response) => {
              if (response.items.length === 0) {
                throw new Error()
              }

              return response
            })
            .then((res) =>
              dispatch({
                type: SUCCESS_SEARCH,
                payload: {
                  typeofService: checkedUrl.typeOfService,
                  searchValue: searchValue,
                  data: res.items[0],
                },
              })
            )
            .catch((error) => {
              console.log(error)
              dispatchError(dispatch)
            })
          break
        case Vimeo:
          console.log("Vimeo start")
          fetchData(
            `https://api.vimeo.com/videos/${checkedUrl.urlLink}?access_token=${API_KEY_VIMEO}`
          )
            .then((response) => {
              if (response.ok) return response.json()

              throw new Error()
            })
            .then((res) =>
              dispatch({
                type: SUCCESS_SEARCH,
                payload: {
                  typeofService: checkedUrl.typeOfService,
                  searchValue: searchValue,
                  data: res,
                },
              })
            )
            .catch((error) => {
              console.log(error)
              dispatchError(dispatch)
            })
          break

        //if url has only id check yt -> vimeo
        default:
          console.log("default")
          fetchData(
            `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2C%20snippet%2C%20statistics&id=${checkedUrl?.urlLink}&key=${API_KEY_YOUTUBE}`
          )
            .then((response) => {
              if (response.ok) return response.json()

              throw new Error()
            })
            .then((res) => {
              if (!(res.items.length > 0)) {
                throw new Error(ERROR_ID_NOT_YOUTUBE)
              }
              dispatch({
                type: SUCCESS_SEARCH,
                payload: {
                  typeofService: Youtube,
                  searchValue: searchValue,
                  data: res.items[0],
                },
              })
            })
            .catch((error) => {
              if (error.message == ERROR_ID_NOT_YOUTUBE)
                fetchData(
                  `https://api.vimeo.com/videos/${checkedUrl?.urlLink}?access_token=${API_KEY_VIMEO}`
                )
                  .then((response) => {
                    console.log(response)
                    if (response.ok) return response.json()

                    throw new Error()
                  })
                  .then((res) =>
                    dispatch({
                      type: SUCCESS_SEARCH,
                      payload: {
                        typeofService: Vimeo,
                        searchValue: searchValue,
                        data: res,
                      },
                    })
                  )
                  .catch((error) => {
                    dispatchError(dispatch)
                    console.log(error)
                  })
            })
      }
    }, 1300)
  }

const fetchData = (url: string) => {
  return fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
}

const dispatchError = (dispatch: Dispatch) => {
  dispatch({ type: ERROR_FETCHING_VIDEO })
  dispatch({ type: FAIL_SEARCH })
}

export default searchAction
