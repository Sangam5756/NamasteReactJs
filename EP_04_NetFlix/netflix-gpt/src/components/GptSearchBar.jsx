import { useEffect, useRef } from "react";
import lang from "../utils/LanguageConstant";
import { useDispatch, useSelector } from "react-redux";
import { cohere } from "../utils/OpenAI";
import { options } from "../utils/constants";
import { addGptMovies } from "../redux/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state?.config?.lang);

  const searchTerm = useRef();
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await response?.json();
    return data?.results;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.current.value === "") {
      alert("Search can not be Blank");
      return;
    }
    const query =
      "Act as a Movie recommondation system " +
      searchTerm.current.value +
      " only give the name of 5 movies with coma separated. i will provide example ahead. example moviname1,moviname2,moviname3,moviname4,moviname5. just provide name with coma separated not text";

    const gptResult = await cohere.chat({ role: "USER", message: query });

    if (!gptResult?.chatHistory) {
      return "No Movies Found";
    }

    const gptMovies = gptResult?.chatHistory[1]?.message.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(addGptMovies({ movieNames: null, movieResults: null }));
    searchTerm.current.value = "";
  };

  return (
    <div className="pt-[30%] lg:pt-[10%]   px-4 md:px-0">
      <form className="w-full md:w-1/2 bg-black  py-2 mx-auto rounded-md flex flex-col md:flex-row justify-center items-center">
        <input
          ref={searchTerm}
          className="w-full md:w-[70%]  mx-2  py-2 px-2 rounded-md outline-none mb-4 md:mb-0"
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceHolder}
        />
        {/* small device */}

        <div className="flex px-2 w-full  lg:hidden">
          <button
            onClick={handleSubmit}
            className="w-full md:w-[20%] text-white py-2 bg-red-600 rounded-lg"
          >
            {lang[langKey]?.search}
          </button>
          <button
            onClick={handleReset}
            className="bg-red-700  text-white px-2 mx-2 rounded-full py-1"
          >
            <i className="fas fa-undo"></i>
          </button>
        </div>

{/* Large device */}
        <button
          onClick={handleSubmit}
          className="w-full md:w-[20%] hidden lg:block text-white py-2 bg-red-600 rounded-lg"
        >
          {lang[langKey]?.search}
        </button>
        <button
          onClick={handleReset}
          className="bg-red-700 hidden lg:block text-white px-2 mx-2 rounded-full py-1"
        >
          <i className="fas fa-undo"></i>
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
