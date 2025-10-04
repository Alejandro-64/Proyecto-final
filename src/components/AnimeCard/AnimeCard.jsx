import "./AnimeCard.css";

const AnimeCard = ({ anime }) => {
  const { title, images, genres, synopsis } = anime;
  return (
    <>
      <article className="animeCard">
        <div className="animeCard__title">
          <h3 className="animeCard__title-text">{title}</h3>
        </div>
        <div className="animeCard__image">
          <img
            className="animeCard__image-img"
            src={images.webp.image_url}
            alt={title}
            loading="lazy"
          />
        </div>
        <ul className="animeCard__list">
          {genres.slice(0, 2).map((gener) => (
            <li key={gener.mal_id} className="animeCard__item">
              {gener.name}
            </li>
          ))}
        </ul>
        <div className="animeCard__paragraph">
          <p className="animeCard__paragraph-text">{synopsis}</p>
        </div>
      </article>
    </>
  );
};

export default AnimeCard;
