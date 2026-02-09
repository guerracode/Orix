
const Ganancias = () => {
    return (
        <section className="md:py-40 py-20" id="upgrade">
            <div className="container px-4">
                <div className="grid lg:grid-cols-2 sm:gap-10 gap-10 items-center">
                    <div>
                        <p className="text-primary sm:text-28 text-18 mb-3">
                            Ganancias
                        </p>
                        <h2 className="text-white sm:text-40 text-30  font-medium mb-5">
                            Modelo de retención de ganancias basado en
                            rendimiento
                        </h2>
                        <p className="text-muted/60 text-18 mb-7">
                            Maximizamos tus ganancias optimizando los costos.
                            Trabajamos arduamente para ofrecerte las comisiones
                            más competitivas del sector, asegurando que el foco
                            principal sea siempre el crecimiento de tu capital,
                            tomando en cuenta siempre la proteccion del mismo.
                            Tu éxito financiero es nuestra verdadera métrica de
                            valor.
                        </p>
                        {/* <div className="grid sm:grid-cols-2 lg:w-70% text-nowrap sm:gap-10 gap-5">
                            {upgradeData.map((item, index) => (
                                <div key={index} className="flex gap-5">
                                    <div>
                                        <Icon
                                            icon="la:check-circle-solid"
                                            width="24"
                                            height="24"
                                            className="text-white group-hover:text-primary"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-18 text-muted/60">
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    </div>
                    <div>
                        <div className="">
                            <h4 className="text-white sm:text-20 text-18  font-medium mb-2">
                                ORIX BRONCE
                            </h4>
                            <p className="text-muted/60 text-18">
                                Inversión entre $1,000 y $10,000 dls. <br />
                            </p>
                            <p className="text-muted/60 text-16 mb-7">
                                Conservas el 50% de las ganancias netas.
                            </p>
                        </div>
                        <div className="">
                            <h4 className="text-white sm:text-20 text-18  font-medium mb-2">
                                ORIX PLATA
                            </h4>
                            <p className="text-muted/60 text-18">
                                IInversión entre $10,000 y $100,000 dls. <br />
                            </p>
                            <p className="text-muted/60 text-16 mb-7">
                                Conservas el 60% de las ganancias netas.
                            </p>
                        </div>
                        <div className="">
                            <h4 className="text-white sm:text-20 text-18  font-medium mb-2">
                                ORIX ORO
                            </h4>
                            <p className="text-muted/60 text-18">
                                Inversión más de $100,000 dls. <br />
                            </p>
                            <p className="text-muted/60 text-16 mb-7">
                                A negociar directamente con un agente de Orix.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ganancias;
