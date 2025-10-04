import { SliderAnime } from "../../data/sliderAnime";
import "./Slider.css";

const Slider = () => {
  
  const carouselAnimes = [...SliderAnime, ...SliderAnime];
  
  return (
    <>
      <section className="slider">
        <div className="container slider__container">
          <div className="slider__wrapper">
            <div className="slider__content">
              {
                carouselAnimes.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="slider__image">
                    <img className="slider__image-img" src={item.url} alt={item.name} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
