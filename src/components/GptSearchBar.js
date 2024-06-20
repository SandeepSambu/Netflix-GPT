import React from "react";
import lang from "../utils/ConstantLanguages";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const { language } = useSelector((store) => store.config);

  return (
    <div className="p-[10%]">
      <div className="bg-black mx-48 flex justify-center grid grid-cols-12 rounded-md bg-opacity-80">
        <form className="col-span-12 mx-28 grid grid-cols-12 my-3">
          <input
            type="text"
            placeholder={lang[language].gptSearchPlaceholder}
            className="col-span-8 py-3 px-2 rounded-md"
          />
          <button className="bg-red-600 py-3 mx-2 col-span-4 rounded-md">
            {lang[language].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
