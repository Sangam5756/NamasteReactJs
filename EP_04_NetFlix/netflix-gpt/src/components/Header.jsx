import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearched } from "../redux/gptSlice";
import { LOGO, Supported_Languages } from "../utils/constants";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  const toggleSearch = () => {
    dispatch(toggleGptSearched());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute z-10 top-0 left-0 w-full px-8 py-4 flex bg-gradient-to-b bg-blend-multiply from-black  justify-between">
      <div>
        <img className="w-32 sm:w-48" src={LOGO} alt="logo" />
      </div>

      <div>
        {showGptSearch && (
          <select
            onChange={handleLanguageChange}
            className="px-2 mr-2 py-1 bg-gray-800 transition-all text-white  outline-none  rounded-lg text-center"
          >
            {Supported_Languages.map((language) => (
              <option key={language.identifier} value={language.identifier}>
                {language.name}
              </option>
            ))}
          </select>
        )}
        <button
          onClick={toggleSearch}
          className="bg-orange-600 hover:bg-orange-800   text-white rounded-lg px-2 py-1"
        >
          {showGptSearch ? "HomePage" : "GptSearch"}
        </button>
      </div>
    </div>
  );
};

export default Header;
