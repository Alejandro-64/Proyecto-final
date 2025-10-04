import { useEffect, useState } from "react";
import "./AnimeSearch.css";

const AnimeSearch = ({ onSearch }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(input)
    }, 500)

    return () => clearTimeout(handler)

  }, [input, onSearch]);

  return (
    <>
      <form className="animeForm" aria-label="Anime search form">
        <input
          className="animeForm__input"
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search your favorite anime"
        />
      </form>
    </>
  );
};

export default AnimeSearch;
