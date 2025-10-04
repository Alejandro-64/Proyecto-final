import { Link } from "react-router-dom";
import "./HeroHome.css";
import VideoHome from "../../assets/video/HeroHome.mp4";

const HeroHome = () => {
  return (
    <>
      <section className="heroHome">
        <div className="container heroHome__container">
          <h1 className="heroHome__title">Explore the world of anime</h1>
          <div className="heroHome__content">
            {/* Content */}
            <article className="heroHome__information">
              <div className="heroHome__description">
                <p className="heroHome__paragraph">
                  Immerse yourself in a universe filled with adventures,
                  emotions, and diverse cultures, where each story conveys
                  unique values and unforgettable characters that have shaped
                  generations of fans around the world.
                </p>
              </div>
              <nav className="heroHome__buttons">
                <Link className="heroHome__button" to="/catalog">
                  Watch Anime
                </Link>
                <Link
                  className="heroHome__button heroHome__button--secondary"
                  to="/blog"
                >
                  Read Blog
                </Link>
              </nav>
            </article>

            {/* Video */}
            <div className="heroHome__video">
              <video
                className="heroHome__video-media"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={VideoHome} type="video/mp4" />
              </video>
              {/* Difuminado */}
              <div className="heroHome__video-overlay"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHome;
