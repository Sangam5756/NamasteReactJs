import { useSelector } from 'react-redux';
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerId = useSelector((state) => state?.movies?.trailerId);
    useMovieTrailer(movieId);

    return (
        <div className="absolute inset-0 z-0">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${trailerId?.key}?&autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerId?.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
    );
};

export default VideoBackground;
