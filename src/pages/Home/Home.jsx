import HeroHome from '../../modules/HeroHome/HeroHome';
import BestAnimes from '../../modules/BestAnimes/BestAnimes';
import BannerAnime from '../../modules/BannerAnime/BannerAnime';
import Slider from '../../modules/Slider/Slider';
import './Home.css';

const Home = () => {
    return (
        <>
            <HeroHome />
            <BestAnimes />
            <BannerAnime />
            <Slider />
        </>
    );
}

export default Home;