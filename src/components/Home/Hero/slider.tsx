import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { pricedeta } from '@/app/api/data';
import Image from 'next/image';

const CardSlider = () => {
    const settings = {
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        autoplaySpeed: 2500,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'ease-in-out',
        responsive: [
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    };
    return (
        <div className="lg:mt-10 mt-10">
            <Slider {...settings}>
                <div className="pr-6">
                    <div className="px-5 py-6 bg-dark_grey/80 rounded-xl">
                        <div className="flex items-center gap-5">
                            <p className="text-white text-xs font-normal ">
                                Rendimiento anual inigualable y sin hacer nada.
                            </p>
                        </div>
                        <div className="flex justify-between mt-7">
                            <div className="">
                                <p className="text-16 font-bold text-white mb-0 leading-none">
                                    60% promedio anual
                                </p>
                            </div>
                            <div className="">
                                <span className="text-success text-xs">
                                    +60%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pr-6">
                    <div className="px-5 py-6 bg-dark_grey/80 rounded-xl">
                        <div className="flex items-center gap-5">
                            <p className="text-white text-xs font-normal ">
                                El rendimiento mensual más alto del mercado
                            </p>
                        </div>
                        <div className="flex justify-between mt-7">
                            <div className="">
                                <p className="text-16 font-bold text-white mb-0 leading-none">
                                    +5% promedio mensual
                                </p>
                            </div>
                            <div className="">
                                <span className="text-success text-xs">
                                    +5%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pr-6">
                    <div className="px-5 py-6 bg-dark_grey/80 rounded-xl">
                        <div className="flex items-center gap-5">
                            <p className="text-white text-xs font-normal ">
                                Sin bloquear el capital invertido.
                            </p>
                        </div>
                        <div className="flex justify-between mt-7">
                            <div className="">
                                <p className="text-16 font-bold text-white mb-0 leading-none">
                                    Puedes depositar y retirar dinero cuando
                                    quieras
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pr-6">
                    <div className="px-5 py-6 bg-dark_grey/80 rounded-xl">
                        <div className="flex items-center gap-5">
                            <p className="text-white text-xs font-normal ">
                                Tú tienes el control total del dinero.
                            </p>
                        </div>
                        <div className="flex justify-between mt-7">
                            <div className="">
                                <p className="text-16 font-bold text-white mb-0 leading-none">
                                    Inversión 100% segura
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pr-6">
                    <div className="px-5 py-6 bg-dark_grey/80 rounded-xl">
                        <div className="flex items-center gap-5">
                            <p className="text-white text-xs font-normal ">
                                Solo aplicamos una comisión sobre las nuevas
                                ganancias netas
                            </p>
                        </div>
                        <div className="flex justify-between mt-7">
                            <div className="">
                                <p className="text-16 font-bold text-white mb-0 leading-none">
                                    Solo ganamos si tú ganas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default CardSlider;
