import { useEffect } from 'react'
import { options } from "../utils/constants";
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from '../redux/moviesSlice';


const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcoming = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/upcoming", options);

    const data = await response.json()
    dispatch(addUpcomingMovies(data.results))
  }

  useEffect(() => {
    getUpcoming();

  }, [])
}

export default useUpcomingMovies;