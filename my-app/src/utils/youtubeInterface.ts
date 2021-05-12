export interface Default {
  url: string
  width: number
  height: number
}

export interface Medium {
  url: string
  width: number
  height: number
}

export interface High {
  url: string
  width: number
  height: number
}

export interface Thumbnails {
  default: Default
  medium: Medium
  high: High
}

export interface Localized {
  title: string
  description: string
}

export interface Snippet {
  publishedAt: Date
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  localized: Localized
}

export interface ContentRating {}

export interface ContentDetails {
  duration: string
  dimension: string
  definition: string
  caption: string
  licensedContent: boolean
  contentRating: ContentRating
  projection: string
}

export interface Status {
  uploadStatus: string
  privacyStatus: string
  license: string
  embeddable: boolean
  publicStatsViewable: boolean
  madeForKids: boolean
}

export interface Statistics {
  viewCount: string
  likeCount: string
  dislikeCount: string
  favoriteCount: string
  commentCount: string
}

export interface TopicDetails {
  topicCategories: string[]
}

export interface ItemYoutubeMovieInterface {
  kind: string
  etag: string
  id: string
  snippet: Snippet
  contentDetails: ContentDetails
  status: Status
  statistics: Statistics
  topicDetails: TopicDetails
}

export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}

export default interface RootObject {
  kind: string
  etag: string
  items: ItemYoutubeMovieInterface[]
  pageInfo: PageInfo
}
