'use client';
import Image from 'next/image';
import { portfolioData } from '@/app/api/data';
import { motion } from 'framer-motion';

const ModeloExito = () => {
    return (
        <section className="md:pt-48 sm:pt-28 pt-12" id="modeloExito">
            <div className="container px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 items-center gap-20">
                    <motion.div
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: '-100%', opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:-ml-32"
                    >
                        <Image
                            src="https://orix-bot.s3.us-east-2.amazonaws.com/robotResultados.webp"
                            alt="Crypto Portfolio"
                            width={780}
                            height={700}
                            loading="lazy"
                        />
                    </motion.div>

                    <motion.div
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: '100%', opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="sm:text-28 text-18 text-muted mb-4">
                            💰 Modelo de{' '}
                            <span className="text-primary"> éxito </span> mutuo
                        </p>
                        <h2 className="text-white sm:text-40 text-30 mb-4 font-medium">
                            Claro. Justo. basado en el{' '}
                            <span className="text-primary">Rendimiento.</span>
                        </h2>
                        <p className="text-muted/60 text-18">
                            Tu tranquilidad es nuestra prioridad. Por ello,
                            operamos bajo un esquema de comisiones por
                            resultados: los costos de gestión solo se activan
                            cuando tu cuenta cierra el mes en positivo. Las
                            comisiones se deducen únicamente del rendimiento
                            generado durante ese periodo, asegurando que el
                            servicio sea rentable y justo para el inversionista
                            en todo momento.
                        </p>

                        <table className="w-full sm:w-[80%]">
                            <tbody>
                                {portfolioData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-dark_border/10"
                                    >
                                        <td className="py-5">
                                            <div className="bg-primary/20 p-4 rounded-full w-fit">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={25}
                                                    height={25}
                                                />
                                            </div>
                                        </td>
                                        <td className="py-5">
                                            <h4 className="text-muted sm:text-22 text-18 ml-5">
                                                {item.title}
                                            </h4>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ModeloExito;
