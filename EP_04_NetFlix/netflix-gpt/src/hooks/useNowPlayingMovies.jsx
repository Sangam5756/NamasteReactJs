import { useEffect } from 'react'
import { options } from "../utils/constants";
import { useDispatch } from "react-redux"
import { addNowPlaying } from '../redux/moviesSlice';


const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", options);

    const data = await response.json()
    dispatch(addNowPlaying(data.results))
  }

  useEffect(() => {
    getNowPlayingMovie();

  }, [])
}

export default useNowPlayingMovies;