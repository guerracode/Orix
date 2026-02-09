'use client';
import { motion } from 'framer-motion';

const ComoFunciona = () => {

    return (
        <section className="md:pt-40 pt-9" id="development">
            <div className="container lg:px-16 px-4">
                <div className="text-center">
                    <motion.div
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: '-100%', opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-muted sm:text-22 text-18 mb-4">
                            Algoritmo{' '}
                            <span className="text-primary">avanzado</span> con
                            IA
                        </p>
                        <h2 className="text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-20">
                            COMO FUNCIONA
                        </h2>
                    </motion.div>
                    <motion.div
                        whileInView={{ scale: 1, opacity: 1 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="md:block hidden relative">
                            <p className="sm:text-20 text-18 text-white">
                                Gracias a la optimización de IA, 13 indicadores
                                personalizados y 7 mecanismos de protección, el
                                bot selecciona únicamente los puntos de entrada
                                más óptimos. Las operaciones se realizan en
                                momentos específicos según patrones históricos,
                                lo que garantiza la consistencia y la limitación
                                del riesgo. Con el protector de stop de capital
                                integrado (30%), el capital permanece protegido
                                mientras la estrategia aprovecha las operaciones
                                cortas y eficientes (con un promedio de 5
                                minutos).
                            </p>
                        </div>
                        <div className="md:block hidden relative mt-5">
                            <p className="sm:text-20 text-18 text-white">
                                <strong className="text-primary">Certeza </strong>
                                Orix, al ser un algoritmo muy avanzado, solo
                                arriesga dinero cuando tiene certeza de que va a
                                ganar.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ComoFunciona;
