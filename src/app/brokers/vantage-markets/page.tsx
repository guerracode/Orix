import Image from 'next/image';

export default function Brokers() {
    return (
        <section className="py-10 z-1 overflow-hidden height-full">
            <div className="container px-4">
                <div className="backdrop-blur-xs mb-8 rounded-full w-fit">
                    <Image
                        src="https://orix-bot.s3.us-east-2.amazonaws.com/vantage-ferrari.webp"
                        alt="Vantage Logo"
                        width={500}
                        height={500}
                        loading="lazy"
                    />
                </div>
                <h2 className="text-white text-30 font-medium">
                    Tu Capital,{' '}
                    <span className="text-primary">
                        Custodiado por Gigantes
                    </span>
                </h2>
                <p className="text-white text-22 mt-2">
                    En <span className="text-primary">ORIX</span> nos encargamos
                    de la tecnología;{' '}
                    <span className="text-primary">Vantage Markets</span> se
                    encarga de la seguridad de tus fondos.
                </p>

                <div className="mt-6">
                    <h5 className="text-white text-18 font-bold">
                        1. Cuentas Segregadas (Tu dinero es solo tuyo)
                    </h5>
                    <p className="text-16">
                        Operamos bajo una política de estricta separación de
                        fondos. Cuando depositas en Vantage, tu dinero se aloja
                        directamente en un Banco de Nivel AA (clasificado entre
                        los 20 más seguros del mundo).
                    </p>
                    <p className="text-16 mt-2 pl-4">
                        ¿Qué significa esto? Que tu capital nunca se mezcla con
                        el dinero operativo de la empresa. Incluso en el
                        improbable caso de que Vantage tuviera problemas
                        financieros, tu dinero está blindado en una bóveda
                        ajena, listo para ser retirado por ti.
                    </p>
                </div>
                <div className="mt-6">
                    <h5 className="text-white text-18 font-bold">
                        2. Respaldo de Clase Mundial (El estándar Ferrari)
                    </h5>
                    <p className="text-16">
                        Operamos bajo una política de estricta separación de
                        fondos. Cuando depositas en Vantage, tu dinero se aloja
                        directamente en un Banco de Nivel AA (clasificado entre
                        los 20 más seguros del mundo).
                    </p>
                    <p className="text-16 mt-2 pl-4">
                        ¿Qué significa esto? Que tu capital nunca se mezcla con
                        el dinero operativo de la empresa. Incluso en el
                        improbable caso de que Vantage tuviera problemas
                        financieros, tu dinero está blindado en una bóveda
                        ajena, listo para ser retirado por ti.
                    </p>
                </div>
            </div>
        </section>
    );
}
