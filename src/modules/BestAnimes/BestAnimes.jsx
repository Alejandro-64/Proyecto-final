import { Link } from "react-router-dom";
import "./BestAnimes.css";
import { InfoBestAnimes } from "../../data/bestAnimes";

const BestAnimes = () => {
  return (
    <>
      <section className="bestAnimes">
        <div className="container bestAnimes__container">
          {/* Heading */}
          <header className="bestAnimes__header">
            <h2 className="bestAnimes__title">Best Animes</h2>
            <Link className="bestAnimes__link" to="/catalog">
              Watch all animes <i className="bi bi-arrow-right"></i>
            </Link>
          </header>

          {/* Cards Animes */}
          <div className="bestAnimes__cards">
            {
              InfoBestAnimes.map((item) => (
                <article key={item.id} className="bestAnimes__card">
                  <div className="bestAnimes__image">
                    <img className="bestAnimes__image-img" src={item.url} alt={item.title} loading="lazy"/>
                    <div className="bestAnimes__image-overlay"></div>
                  </div>
                  <h3 className="bestAnimes__name">{item.title}</h3>
                </article>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default BestAnimes;
