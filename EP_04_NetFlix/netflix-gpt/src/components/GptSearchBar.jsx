import React from "react";
import lang from "../utils/LanguageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state?.config?.lang);

  return (
    <div className="pt-[10%]">
      <form className="w-1/2 bg-black py-2 mx-auto rounded-md">
        <input
          className="w-[70%] mx-2 py-2 px-2 rounded-md outline-none "
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceHolder}
        />
        <button className="mx-5 rounded-lg w-[20%] text-white py-2 bg-red-600">
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
