const Ganancias = () => {
    return (
        <section className="md:py-40 py-20" id="ganancias">
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
                            Nuestro compromiso es el crecimiento de tu
                            patrimonio bajo un esquema de beneficio compartido,
                            transparente y justo. Dependiendo de tu nivel de
                            inversión, optimizamos el profit split para asegurar
                            que conserves la mayor parte de los rendimientos
                            generados. Desde el acceso Bronce hasta la
                            exclusividad del nivel Elite, garantizamos que el
                            foco principal sea siempre maximizar el retorno de
                            tu capital con los estándares más altos de
                            protección.
                        </p>
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
                                Conservas el 70% de las ganancias netas.
                            </p>
                        </div>
                        <div className="">
                            <h4 className="text-white sm:text-20 text-18  font-medium mb-2">
                                ORIX ELITE
                            </h4>
                            <p className="text-muted/60 text-18">
                                Inversión más de $1,000,000 dls. <br />
                            </p>
                            <p className="text-muted/60 text-16 mb-7">
                                Conservas el 80% de las ganancias netas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ganancias;
