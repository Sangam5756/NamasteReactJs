import { moviesImgUrl } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath?.backdrop_path) return null;
  return (
    <div className="w-60 h-full pr-4">
      <img src={moviesImgUrl + posterPath?.backdrop_path} alt="movieBanner" />
    </div>
  );
};

export default MovieCard;
