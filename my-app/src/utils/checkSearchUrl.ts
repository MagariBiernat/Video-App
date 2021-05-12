import { Vimeo, Youtube } from "./interfaces"

const checkSearchUrl = (urlLink: string) => {
  if (!urlLink.includes("/")) {
    return { urlLink, typeOfService: null }
  }

  const tmp = urlLink.toLowerCase()

  if (tmp.includes("youtu")) {
    return { urlLink: get_video_id_youtube(urlLink), typeOfService: Youtube }
  }

  if (tmp.includes("vimeo")) {
    const vimeo = urlLink.split("/")
    return { urlLink: vimeo[vimeo.length - 1], typeOfService: Vimeo }
  }
}

function get_video_id_youtube(input: any) {
  return input.match(
    /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/
  )[1]
}

export default checkSearchUrl
