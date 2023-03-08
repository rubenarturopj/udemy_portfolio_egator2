// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
// import function to autoplay
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
//
import data from "./data";
import SingleTestimony from "./SingleTestimony";
import "./testimonials.css";

export function Testimonials() {
    return (
        <>
            <section id="testimonials">
                <h2>What My Clients Say</h2>
                <p>These are unbiased testimonials from some of my clients</p>
                <div className="container">
                    <Swiper
                        // how many slides should fit the screen at the same time. First one is for mobile
                        slidesPerView={1}
                        // for different screen sizes. bigger is desktop, medium is tablet.
                        breakpoints={{
                            601: { slidesPerView: 2 },
                            1025: { slidesPerView: 3 },
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        // importing the modules needed
                        modules={[Pagination, Autoplay]}
                        // for slides to play automatically
                        autoplay={true}
                        className="mySwiper"
                    >
                        {data.map((eachTestimony) => (
                            <SwiperSlide key={eachTestimony.id}>
                                <SingleTestimony testimonial={eachTestimony} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Testimonials;
