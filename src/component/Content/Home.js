import Slider from "react-slick";
import React from "react";

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        autoplay: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false
    }
    return(
        <section id="introduction">
            <Slider {...settings}>
                <div className="slick_slide_item">
                    <div className="slide_image">
                        <img src="/slider_image1.png"/>
                    </div>
                    <div className="slide_content">
                        <div>
                            <h1 className="text header_text white_text" data-aos='fade-up'>Salam</h1>
                            <h2 className="text content_text white_text" data-aos='fade-up'>Necesen?</h2>
                        </div>
                    </div>
                </div>
                <div className="slick_slide_item">
                    <div className="slide_image">
                        <img src="/slider_image2.png"/>
                    </div>
                    <div className="slide_content">
                        <div>
                            <h1 className="text header_text white_text" data-aos='fade-up'>Salam</h1>
                            <h2 className="text content_text white_text" data-aos='fade-up'>Necesen?</h2>
                        </div>
                    </div>
                </div>
                <div className="slick_slide_item">
                    <div className="slide_image">
                        <img src="/slider_image3.png"/>
                    </div>
                    <div className="slide_content">
                        <div>
                            <h1 className="text header_text white_text" data-aos='fade-up'>Salam</h1>
                            <h2 className="text content_text white_text" data-aos='fade-up'>Necesen?</h2>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    )
}
