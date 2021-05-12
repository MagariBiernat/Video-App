import vimeoInterface from "./vimeoInterface"
import youtubeInterface from "./youtubeInterface"

export const Youtube = "Youtube"
export const Vimeo = "Vimeo"

type typeOfService = typeof Youtube | typeof Vimeo | ""

export interface videoInterface {
  url: string
  favourite: boolean
  typeOfService: typeOfService
  data: vimeoInterface | youtubeInterface
}

export interface searchReducerInterface {
  searchValue: string
  typeofService: typeOfService
  success: boolean
  loading: boolean
  data: vimeoInterface | youtubeInterface | {}
}

export type savedMoviesType = Array<videoInterface> | []
