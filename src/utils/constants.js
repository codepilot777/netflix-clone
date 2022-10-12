import requests from '../utils/requests'

export const ROWS = [
  {
    title: "NETFLIX ORIGINALS",
    fetchURL: requests.fetchNetflixOriginals,
  },
  {
    title: "TRENDING NOW",
    fetchURL: requests.fetchTrending,
  },
  {
    title: "TOP RATED",
    fetchURL: requests.fetchTopRated,
  },
  {
    title: "ACTION MOVIES",
    fetchURL: requests.fetchActionMovies,
  },
  {
    title: "COMEDY MOVIES",
    fetchURL: requests.fetchComedyMoives,
  },
  {
    title: "HORROR MOVIES",
    fetchURL: requests.fetchHorrorMovies,
  },
  {
    title: "ROMANCE MOVIES",
    fetchURL: requests.fetchRomanceMovies,
  },
  {
    title: "DOCUMENTARIES",
    fetchURL: requests.fetchDocumentaries,
  }
]