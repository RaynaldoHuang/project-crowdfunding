import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DetailCampaign({ params }: { params: { slug: string } }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='ml-64'>
            <div className="w-full px-5 mt-20 mb-5 mb-10">
                <div className="bg-white px-3 py-3 rounded-2xl">
                    <div className="flex gap-x-4">
                        <div className="bg-red-600 w-4/6 h-32">
                            <div className="slider-container">
                                {/* <Slider {...settings}>
                                    <div>
                                        <h3>1</h3>
                                    </div>
                                    <div>
                                        <h3>2</h3>
                                    </div>
                                    <div>
                                        <h3>3</h3>
                                    </div>
                                    <div>
                                        <h3>4</h3>
                                    </div>
                                    <div>
                                        <h3>5</h3>
                                    </div>
                                    <div>
                                        <h3>6</h3>
                                    </div>
                                </Slider> */}
                            </div>
                        </div>
                        <div className="bg-blue-600 w-2/6 h-32">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

