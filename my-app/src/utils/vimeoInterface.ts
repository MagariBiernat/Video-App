export interface Live {
  streaming: boolean
  archived: boolean
}

export interface StaffPick {
  normal: boolean
  best_of_the_month: boolean
  best_of_the_year: boolean
  premiere: boolean
}

export interface Badges {
  hdr: boolean
  live: Live
  staff_pick: StaffPick
  vod: boolean
  weekend_challenge: boolean
}

export interface Embed {
  html: string
  badges: Badges
}

export interface Privacy {
  view: string
  embed: string
  download: boolean
  add: boolean
  comments: string
}

export interface Size {
  width: number
  height: number
  link: string
  link_with_play_button: string
}

export interface Pictures {
  uri: string
  active: boolean
  type: string
  sizes: Size[]
  resource_key: string
  default_picture: boolean
}

export interface Videos {
  uri: string
  options: string[]
  total: number
}

export interface Connections {
  videos: Videos
}

export interface Metadata {
  connections: Connections
}

export interface Tag {
  uri: string
  name: string
  tag: string
  canonical: string
  metadata: Metadata
  resource_key: string
}

export interface Stats {
  plays?: any
}

export interface Size2 {
  width: number
  height: number
  link: string
  link_with_play_button: string
}

export interface Pictures2 {
  uri: string
  active: boolean
  type: string
  sizes: Size2[]
  resource_key: string
  default_picture: boolean
}

export interface Parent {
  uri: string
  name: string
  link: string
}

export interface Channels {
  uri: string
  options: string[]
  total: number
}

export interface Groups {
  uri: string
  options: string[]
  total: number
}

export interface Users {
  uri: string
  options: string[]
  total: number
}

export interface Videos2 {
  uri: string
  options: string[]
  total: number
}

export interface Connections2 {
  channels: Channels
  groups: Groups
  users: Users
  videos: Videos2
}

export interface Metadata2 {
  connections: Connections2
}

export interface Subcategory {
  uri: string
  name: string
  link: string
}

export interface Size3 {
  width: number
  height: number
  link: string
}

export interface Icon {
  uri: string
  active: boolean
  type: string
  sizes: Size3[]
  resource_key: string
  default_picture: boolean
}

export interface Category {
  uri: string
  name: string
  link: string
  top_level: boolean
  is_deprecated: boolean
  pictures: Pictures2
  last_video_featured_time: Date
  parent: Parent
  metadata: Metadata2
  subcategories: Subcategory[]
  icon: Icon
  resource_key: string
}

export interface Comments {
  uri: string
  options: string[]
  total: number
}

export interface Credits {
  uri: string
  options: string[]
  total: number
}

export interface Likes {
  uri: string
  options: string[]
  total: number
}

export interface Pictures3 {
  uri: string
  options: string[]
  total: number
}

export interface Texttracks {
  uri: string
  options: string[]
  total: number
}

export interface Recommendations {
  uri: string
  options: string[]
}

export interface Connections3 {
  comments: Comments
  credits: Credits
  likes: Likes
  pictures: Pictures3
  texttracks: Texttracks
  related?: any
  recommendations: Recommendations
}

export interface Report {
  uri: string
  options: string[]
  reason: string[]
}

export interface Interactions {
  report: Report
}

export interface Metadata3 {
  connections: Connections3
  interactions: Interactions
  is_vimeo_create: boolean
  is_screen_record: boolean
}

export interface Capabilities {
  hasLiveSubscription: boolean
  hasEnterpriseLihp: boolean
  hasSvvTimecodedComments: boolean
}

export interface Size4 {
  width: number
  height: number
  link: string
}

export interface Pictures4 {
  uri: string
  active: boolean
  type: string
  sizes: Size4[]
  resource_key: string
  default_picture: boolean
}

export interface Website {
  uri: string
  name: string
  link: string
  type: string
  description?: any
}

export interface Albums {
  uri: string
  options: string[]
  total: number
}

export interface Appearances {
  uri: string
  options: string[]
  total: number
}

export interface Channels2 {
  uri: string
  options: string[]
  total: number
}

export interface Feed {
  uri: string
  options: string[]
}

export interface Followers {
  uri: string
  options: string[]
  total: number
}

export interface Following {
  uri: string
  options: string[]
  total: number
}

export interface Groups2 {
  uri: string
  options: string[]
  total: number
}

export interface Likes2 {
  uri: string
  options: string[]
  total: number
}

export interface Membership {
  uri: string
  options: string[]
}

export interface ModeratedChannels {
  uri: string
  options: string[]
  total: number
}

export interface Portfolios {
  uri: string
  options: string[]
  total: number
}

export interface Videos3 {
  uri: string
  options: string[]
  total: number
}

export interface Shared {
  uri: string
  options: string[]
  total: number
}

export interface Pictures5 {
  uri: string
  options: string[]
  total: number
}

export interface FoldersRoot {
  uri: string
  options: string[]
}

export interface Teams {
  uri: string
  options: string[]
  total: number
}

export interface Connections4 {
  albums: Albums
  appearances: Appearances
  channels: Channels2
  feed: Feed
  followers: Followers
  following: Following
  groups: Groups2
  likes: Likes2
  membership: Membership
  moderated_channels: ModeratedChannels
  portfolios: Portfolios
  videos: Videos3
  shared: Shared
  pictures: Pictures5
  folders_root: FoldersRoot
  teams: Teams
}

export interface Metadata4 {
  connections: Connections4
}

export interface LocationDetails {
  formatted_address: string
  latitude?: any
  longitude?: any
  city?: any
  state?: any
  neighborhood?: any
  sub_locality?: any
  state_iso_code?: any
  country?: any
  country_iso_code?: any
}

export interface User {
  uri: string
  name: string
  link: string
  capabilities: Capabilities
  location: string
  gender: string
  bio?: any
  short_bio: string
  created_time: Date
  pictures: Pictures4
  websites: Website[]
  metadata: Metadata4
  location_details: LocationDetails
  skills: any[]
  available_for_hire: boolean
  can_work_remotely: boolean
  resource_key: string
  account: string
}

export default interface RootObject {
  uri: string
  name: string
  description: string
  type: string
  link: string
  duration: number
  width: number
  language?: any
  height: number
  embed: Embed
  created_time: Date
  modified_time: Date
  release_time: Date
  content_rating: string[]
  license?: any
  privacy: Privacy
  pictures: Pictures
  tags: Tag[]
  stats: Stats
  categories: Category[]
  metadata: Metadata3
  user: User
  app?: any
  status: string
  resource_key: string
  upload?: any
  transcode?: any
  is_playable: boolean
}
