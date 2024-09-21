import { BANNER_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div
      className="h-screen bg-gradient-to-tl  bg-opacity-45 from-black bg-cover bg-center"
      style={{ backgroundImage: `url(${BANNER_URL})` }}
    >
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
