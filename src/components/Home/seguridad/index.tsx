import Image from 'next/image';
import Link from 'next/link';

const Seguridad = () => {
    return (
        <section className="pb-28 relative" id='seguridad'>
            <div className="container px-4 relative z-2">
                <div className="text-center">
                    <p className="text-muted sm:text-28 text-18 mb-4 pb-6 relative after:content-[''] after:w-8 after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-1/2">
                        Trabajamos con{' '}
                        <span className="text-primary">
                            los mejores brokers
                        </span>{' '}
                        de talla mundial
                    </p>
                    <h2 className="text-white sm:text-40 text-30 font-medium">
                        Tu inversion{' '}
                        <span className="text-primary">esta 100% segura</span>
                    </h2>
                    <p className="text-white text-16 mt-2">
                        Para tu total tranquilidad, operamos exclusivamente a
                        través de instituciones financieras de prestigio global,{' '}
                        <span className="text-primary">
                            donde tú depositas directamente tu capital y
                            mantienes el control total y acceso a tus fondos en
                            todo momento.{' '}
                        </span>
                        Colaboramos con plataformas de primer nivel que cumplen
                        con los más estrictos marcos regulatorios, garantizando
                        que tu inversión esté respaldada por los más altos
                        estándares de seguridad y transparencia.
                    </p>
                    <div className="mt-10 border border-border/20 grid lg:grid-cols-3 sm:grid-cols-2 py-16 gap-10 px-20 rounded-3xl sm:bg-perk bg-dark_grey/35 lg:bg-bottom bg-center bg-no-repeat">
                        <div className="text-center flex items-center justify-between flex-col">
                            <div className="bg-white backdrop-blur-xs p-4 rounded-full w-fit">
                                <Image
                                    src="https://orix-bot.s3.us-east-2.amazonaws.com/StartraderLogo.png"
                                    alt="Startrader Logo"
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <p className="text-white text-16 pt-4 ">
                                Startrader es un bróker global de alto
                                crecimiento que ofrece tecnología avanzada y
                                soluciones de inversión seguras bajo múltiples
                                regulaciones internacionales.
                            </p>
                            <div className="mt-8 justify-center">
                                <Link
                                    href="#"
                                    className="text-darkmode bg-primary border border-primary py-3 px-5 rounded-lg text-16 font-medium hover:bg-transparent hover:text-primary"
                                >
                                    Más Información
                                </Link>
                            </div>
                        </div>
                        <div className="text-center flex items-center justify-between flex-col">
                            <div className="bg-white backdrop-blur-xs p-4 rounded-full w-fit">
                                <Image
                                    src="https://orix-bot.s3.us-east-2.amazonaws.com/VantageLogo.jpg"
                                    alt="Vantage Logo"
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <p className="text-white text-16 pt-4">
                                Vantage Markets destaca como un ecosistema
                                financiero líder, diseñado para potenciar el
                                éxito de sus clientes a través de soluciones
                                integrales de trading y una sólida
                                infraestructura de inversión.
                            </p>
                            <div className="mt-8 justify-center">
                                <Link
                                    href="#"
                                    className="text-darkmode bg-primary border border-primary py-3 px-5 rounded-lg text-16 font-medium hover:bg-transparent hover:text-primary"
                                >
                                    Más Información
                                </Link>
                            </div>
                        </div>
                        <div className="text-center flex items-center justify-between flex-col">
                            <div className="bg-white backdrop-blur-xs p-4 rounded-full w-fit">
                                <Image
                                    src="https://orix-bot.s3.us-east-2.amazonaws.com/VTMarketsLogo.jpg"
                                    alt="Vantage Logo"
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <p className="text-white text-16 pt-4">
                                VT Markets es un bróker multiactivos de clase
                                mundial, reconocido por su ejecución
                                ultrarrápida y un ecosistema tecnológico
                                diseñado para hacer el trading accesible y
                                transparente para todos.
                            </p>
                            <div className="mt-8 justify-center">
                                <Link
                                    href="#"
                                    className="text-darkmode bg-primary border border-primary py-3 px-5 rounded-lg text-16 font-medium hover:bg-transparent hover:text-primary"
                                >
                                    Más Información
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-linear-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 z-0 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 absolute sm:-left-48 opacity-60"></div>
        </section>
    );
};

export default Seguridad;
