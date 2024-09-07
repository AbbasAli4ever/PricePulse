import HomeCarousel from '../components/HomeCarousel';
import CategoryBox from '../components/CategoryBox';
import CardSlider from '../components/CardSlider';
import TrendCard from '../components/TrendCard';

const Home = ({array}) => {
    return (
        <div>
            
            <HomeCarousel />
            <CategoryBox />
            <CardSlider array={array}/>
            <TrendCard/>
            

        </div>
    );
};

export default Home;

