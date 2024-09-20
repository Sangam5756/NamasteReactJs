import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    console.log("movieslist", movies)
    if (!movies) return;
    return (
        <div className="px-6 text-white bg-black">
            <h1 className="text-lg py-2 font-bold">{title}</h1>
            <div className="flex overflow-x-scroll ">
                <div className="flex">
                    {movies?.map(movie => <MovieCard key={movie?.id} posterPath={movie} />)}

                </div>
            </div>
        </div>)
}

export default MovieList