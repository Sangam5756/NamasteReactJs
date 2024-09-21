import { useEffect } from 'react'
import { options } from "../utils/constants";
import { useDispatch } from "react-redux"
import { addPopularMovies } from '../redux/moviesSlice';


const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopular = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular", options);

    const data = await response.json()
    dispatch(addPopularMovies(data.results))
  }

  useEffect(() => {
    getPopular();

  }, [])
}

export default usePopularMovies;