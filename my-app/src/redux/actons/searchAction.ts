import { Dispatch } from "redux"
import checkSearchUrl from "../../utils/checkSearchUrl"
import { Vimeo, Youtube } from "../../utils/interfaces"
import vimeoInterface from "../../utils/vimeoInterface"
import youtubeInterface from "../../utils/youtubeInterface"
import {
  ActionType,
  CLEAR_SEARCH,
  FAIL_SEARCH,
  SEARCH_VIDEO,
  SUCCESS_SEARCH,
} from "../types"

type typeOfAction =
  | typeof SEARCH_VIDEO
  | typeof SUCCESS_SEARCH
  | typeof FAIL_SEARCH
  | typeof CLEAR_SEARCH

type typeOfPayload = {
  searchValue?: string
  typeofService?: string
  data?: vimeoInterface | youtubeInterface
}

const API_KEY_YOUTUBE = process.env.REACT_APP_API_KEY_YOUTUBE
const API_KEY_VIMEO = process.env.REACT_APP_API_KEY_VIMEO

const searchAction =
  (searchValue: string) =>
  async (dispatch: Dispatch<ActionType<typeOfAction, typeOfPayload>>) => {
    await dispatch({ type: SEARCH_VIDEO })

    const checkedUrl = checkSearchUrl(searchValue)
    console.log(checkedUrl)

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
          .catch((error) => console.log(error))
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
          .catch((error) => console.log(error))
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
            console.log(res.items)
            if (!(res.items.length > 0)) {
              throw new Error("length ==0 ")
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
            console.log(error)
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
              .catch((error) => console.log(error))
          })
    }
  }

const fetchData = (url: string) => {
  return fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
}

export default searchAction
