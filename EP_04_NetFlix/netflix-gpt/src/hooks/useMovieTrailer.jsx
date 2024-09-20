import { useEffect } from 'react'
import { options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerId } from '../redux/moviesSlice';

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();


    const getMoviesVideos = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options)
        const data = await response.json();
        const filter = data?.results?.filter((id) => id?.type === "Trailer");
        dispatch(addTrailerId(filter[0]));

    }

    useEffect(() => {
        getMoviesVideos()
    }, [])


}

export default useMovieTrailer