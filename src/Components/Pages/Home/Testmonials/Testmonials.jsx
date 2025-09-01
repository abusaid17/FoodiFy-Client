import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { FaCanadianMapleLeaf } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";

const Testmonials = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/reviews')
            .then(res => res.json())
            .then(data => {
                setTestimonials(data);
            })
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={'What Our Clients Say'}
                Heading={'TESTIMONIALS'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    testimonials.map(item => (<SwiperSlide
                        key={item._id}
                    >
                        <div className="my-16 mx-30 flex flex-col items-center">
                            <p className="text-2xl mx-auto py-4">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={item.rating}
                                    readOnly
                                /></p>
                            <p className="text-6xl pb-4" >< FaCanadianMapleLeaf /></p>
                            <p>{item.details}</p>
                            <h2 className="text-2xl py-4 text-orange-600 font-semibold">{item.name}</h2>
                        </div>
                    </SwiperSlide>)
                    )}

            </Swiper>
        </section>
    );
};

export default Testmonials;