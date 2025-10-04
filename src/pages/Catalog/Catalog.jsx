import HeroGeneric from "../../modules/HeroGeneric/HeroGeneric";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import Slider from "../../modules/Slider/Slider";
import Spinner from "../../components/Spinner/Spinner";
import "./Catalog.css";
import { useEffect, useState } from "react";
import AnimeSearch from "../../components/Search/AnimeSearch";

const Catalog = () => {
  const [anime, setAnime] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const limit = 15;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getAnimes = async () => {
      setIsLoading(true)

      const url = searchTerm
      ? `https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=${limit}&page=${page}`
      : `https://api.jikan.moe/v4/anime?limit=${limit}&page=${page}`

      const response = await fetch(url);
      const data = await response.json();
      setAnime(data.data);
      setHasNext(data.pagination.has_next_page)
      setIsLoading(false)
    };
    getAnimes();
  }, [page, searchTerm]);

  useEffect(() => {
    if (searchTerm) {
      setPage(1);
    }
  }, [searchTerm]);

  // const filteredAnime = anime.filter(animeItem => animeItem.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <HeroGeneric title={"Explore our entire catalog"} />
      <section className="catalog">
        <div className="container catalog__container">
          <AnimeSearch onSearch={setSearchTerm} />
          <h2 className="catalog__title">Anime catalog</h2>
            {
              isLoading ?
              (
                <Spinner />
              )
              : (
                <>
                  {/* Catalog cards animes */}
                  <div className="catalog__cards" >
                    {
                      anime.map((item) => (
                        <AnimeCard key={item.mal_id} anime={item} />
                      ))
                    }
                  </div>
                  {/* Nav buttons */}
                  <nav className="catalog__buttons">
                    <button
                      onClick={() => {
                        setPage(page - 1);
                        window.scrollTo({ top: 0 });
                      }}
                      disabled={page <= 1}
                      className={`catalog__button-btn`}
                    >
                      <i className="bi bi-arrow-left"></i> Prev
                    </button>
                    <button
                      onClick={() => {
                        setPage(page + 1);
                        window.scrollTo({ top: 0 });
                      }}
                      disabled={!hasNext}
                      className={`catalog__button-btn`}
                    >
                      Next <i className="bi bi-arrow-right"></i>
                    </button>
                  </nav>
                </>
              )
            }
        </div>
      </section>
      <Slider />
    </>
  );
};

export default Catalog;
