import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../../assets/home/01.jpg'
import banner2 from '../../../../assets/home/02.jpg'
import banner3 from '../../../../assets/home/03.png'
import banner4 from '../../../../assets/home/04.jpg'
import banner5 from '../../../../assets/home/05.png'
import banner6 from '../../../../assets/home/06.png'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={banner1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={banner2} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={banner3} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={banner4} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={banner5} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={banner6} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Banner;