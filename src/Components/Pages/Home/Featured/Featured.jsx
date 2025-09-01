import image from '../../../../assets/home/featured.jpg'
import SectionTitle from '../SectionTitle/SectionTitle';
import './Featured.css'

const Featured = () => {
    return (
        <section
            className="fearured bg-fixed bg-center bg-cover text-white"
        >
            <div className="bg-black/70 w-full h-full">
                <SectionTitle
                    subHeading={'Check it Out'}
                    Heading={'FROM OUR MENU'}
                ></SectionTitle>
                <div className="flex flex-col md:flex-row space-x-8 items-center p-8">
                    <div>
                        <img src={image} alt="" className=" rounded-xl" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="py-4 font-semibold">March 20, 2023</h3>
                        <h3 className="uppercase font-semibold">WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus molestias sint sed nobis eum accusamus expedita repellat tempore? A, dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa totam quidem molestiae minima eum delectus, assumenda dignissimos dolores explicabo. Dolore, suscipit? Eos labore, ex impedit corporis maiores architecto qui.</p>
                        <button className="btn btn-outline border-4 border-b-yellow-600 uppercase">Read More</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Featured;