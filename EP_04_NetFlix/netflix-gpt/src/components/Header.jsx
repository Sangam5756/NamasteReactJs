import { useDispatch } from "react-redux";
import { toggleGptSearched } from "../redux/gptSlice";

const Header = () => {

    const dispatch = useDispatch();

    const toggleSearch = ()=>{

        dispatch(toggleGptSearched());

    }
    

  return (
      <div className="absolute z-10 top-0 left-0 w-full px-8 py-4 flex   justify-between">
          <div>
          <img
              className="w-32 sm:w-48"
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="logo"
          />
          </div>

          <div onClick={toggleSearch}>
            <button className="bg-orange-600 hover:bg-orange-800  text-white rounded-lg px-2 py-1">GptSearch</button>
          </div>
      </div>
  );
};

export default Header;
