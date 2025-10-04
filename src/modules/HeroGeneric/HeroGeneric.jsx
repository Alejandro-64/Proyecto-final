import "./HeroGeneric.css";

const HeroSection = ({title}) => {
  return (
    <>
      <section className="heroGeneric">
        <div className="container heroGeneric__container">
          <h1 className="heroGeneric__title">{title}</h1>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
