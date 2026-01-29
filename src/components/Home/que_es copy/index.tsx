'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Que_es = () => {
    const ref = useRef(null);
    const inView = useInView(ref);

    const TopAnimation = {
        initial: { y: '-100%', opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
        transition: { duration: 0.6, delay: 0.4 },
    };

    const bottomAnimation = {
        initial: { y: '100%', opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 },
        transition: { duration: 0.6, delay: 0.4 },
    };

    const services = [
        {
            icon: '/images/icons/icon-consulting.svg',
            text: 'Blockchain Consulting',
        },
        {
            icon: '/images/icons/icon-blockchain.svg',
            text: 'Blockchain Solutions',
        },
        {
            icon: '/images/icons/icon-Services.svg',
            text: 'Custom Development',
        },
    ];

    return (
        <section className="md:pt-28" id="work">
            <div className="container px-4 mx-auto lg:max-w-(--breakpoint-xl) px-4">
                <div ref={ref} className="grid grid-cols-12 items-center">
                    <motion.div
                        {...bottomAnimation}
                        className="lg:col-span-7 col-span-12"
                    >
                        <h2 className="sm:text-40 text-30 text-white lg:w-full md:w-70% font-medium">
                            ¿QUÉ ES ORIX?
                        </h2>
                        <p className="sm:text-24 text-18 text-white">
                            Trading{' '}
                            <span className="text-primary">Automatizado</span>
                        </p>
                        <div className="mt-11 mr-20">
                            <p className="sm:text-20 text-18 text-white">
                                ORIX es un sistema de trading algorítmico de
                                alta precisión, especializado exclusivamente en
                                el mercado del Oro. Nuestra tecnología está
                                diseñada para gestionar operaciones de forma
                                100% automática, buscando un objetivo de
                                rendimiento promedio del 5% mensual. En ORIX, el
                                éxito es compartido: trabajamos bajo un esquema
                                de comisiones basado únicamente en resultados,
                                lo que garantiza que nuestro mayor incentivo sea
                                el crecimiento constante de tu capital.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        {...TopAnimation}
                        className="lg:col-span-5 col-span-12"
                    >
                        <div className="2xl:-mr-40 mt-9 flex justify-center">
                            <Image
                                src="/images/que_es/MyFxbookBarsGold.png"
                                alt="image"
                                width={600}
                                height={425}
                                className="lg:w-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Que_es;
