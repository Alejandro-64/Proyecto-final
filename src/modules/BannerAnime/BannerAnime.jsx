import { Link } from "react-router-dom";
import "./BannerAnime.css";
import BannerImage from "../../assets/image/BannerBlog.webp"

const BannerAnime = () => {
  return (
    <>
      <section className="bannerAnime">
        <div className="container bannerAnime__container">
          <article className="bannerAnime__content">
            <h2 className="bannerAnime__title">
              Want to dive deeper into anime?
            </h2>
            <p className="bannerAnime__paragraph">
              Check out our blog for reviews, news, and fun facts about the
              anime world.
            </p>
            <Link className="bannerAnime__link" to="/blog">
              Go to Blog <i className="bi bi-arrow-right"></i>
            </Link>
          </article>

          <div className="bannerAnime__image">
            <img
              className="bannerAnime__image-img"
              src={BannerImage}
              alt="Banner Blog Image"
              loading="lazy"
            />
            <div className="bannerAnime__overlay"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerAnime;
