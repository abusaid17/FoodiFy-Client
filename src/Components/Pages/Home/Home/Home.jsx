import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefRecomend from '../ChefRecomend/ChefRecomend';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testmonials from '../Testmonials/Testmonials';
import { Helmet } from '@dr.pogodin/react-helmet';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FoodiFy | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <PopularMenu />
            <ChefRecomend />
            <Featured />
            <Testmonials />
        </div>
    );
};

export default Home;