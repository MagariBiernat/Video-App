import vimeoInterface from "./vimeoInterface"
import youtubeInterface, { ItemYoutubeMovieInterface } from "./youtubeInterface"

export const Youtube = "Youtube"
export const Vimeo = "Vimeo"

type typeOfService = typeof Youtube | typeof Vimeo | ""

export interface videoInterface {
  url: string
  favourite: boolean
  typeOfService: typeOfService
  data: vimeoInterface | ItemYoutubeMovieInterface
  dateAdded: string
}

export interface searchReducerInterface {
  searchValue: string
  typeofService: typeOfService
  success: boolean
  loading: boolean
  // alreadyAdded: boolean
  data: ItemYoutubeMovieInterface | vimeoInterface | {} | any
}

export type savedMoviesType = Array<videoInterface>
