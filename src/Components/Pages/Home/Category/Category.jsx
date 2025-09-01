import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../../assets/home/slide1.jpg'
import slide2 from '../../../../assets/home/slide2.jpg'
import slide3 from '../../../../assets/home/slide3.jpg'
import slide4 from '../../../../assets/home/slide4.jpg'
import slide5 from '../../../../assets/home/slide5.jpg'
import SectionTitle from '../SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 10.00am to 11.00pm"}
                Heading={"ORDER ONLINE"}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}   // show 3 slides at once
                spaceBetween={6}   // reduce the gap
                centeredSlides={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper mb-6"
            >


                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className='text-3xl uppercase text-center font-semibold -mt-20 text-gray shadow-2xl'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className='text-3xl uppercase text-center font-semibold -mt-20 text-gray shadow-2xl'>Pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className='text-3xl uppercase text-center font-semibold -mt-20 text-gray shadow-2xl'>Coffee</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className='text-3xl uppercase text-center font-semibold -mt-20 text-gray shadow-2xl'>Dasert</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className='text-3xl uppercase text-center font-semibold -mt-20 text-gray shadow-2xl'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className='text-3xl uppercase text-center font-semibold -mt-20 text-gray shadow-2xl'>Pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className='text-3xl uppercase text-center font-semibold -mt-20 text-gray shadow-2xl'>Coffee</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className='text-3xl uppercase text-center font-semibold -mt-20 text-gray shadow-2xl'>Desert</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className='text-3xl uppercase text-center font-semibold -mt-20 text-gray shadow-2xl'>Salad</h1>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;