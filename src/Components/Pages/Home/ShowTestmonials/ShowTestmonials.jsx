// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const ShowTestmonials = ({ item }) => {
    const { name, details, rating } = item;
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <h2 className=' text-ora'>{rating}</h2>
                        <p>{details}</p>
                        <h2 className='text-2xl text-orange-600'>{name}</h2>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default ShowTestmonials;