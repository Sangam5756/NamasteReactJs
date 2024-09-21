import { moviesImgUrl } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-60 h-full pr-4">
      <img src={moviesImgUrl + posterPath?.backdrop_path} alt="movieBanner" />
    </div>
  );
};

export default MovieCard;
