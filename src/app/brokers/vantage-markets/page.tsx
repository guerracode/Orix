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
                        <strong>¿Qué significa esto?</strong> Que tu capital
                        nunca se mezcla con el dinero operativo de la empresa.
                        Incluso en el improbable caso de que Vantage tuviera
                        problemas financieros, tu dinero está blindado en una
                        bóveda ajena, listo para ser retirado por ti.
                    </p>
                </div>
                <div className="mt-6">
                    <h5 className="text-white text-18 font-bold">
                        2. Respaldo de Clase Mundial (El estándar Ferrari)
                    </h5>
                    <p className="text-16">
                        Vantage es patrocinador oficial de la escudería Ferrari
                        en la Fórmula 1.
                    </p>
                    <p className="text-16 mt-2 pl-4">
                        <strong>¿Por qué importa?</strong> Marcas de élite como
                        Ferrari no asocian su imagen con cualquiera. Para lograr
                        esta alianza, Vantage ha pasado por rigurosas auditorías
                        financieras y legales que certifican su solvencia y
                        transparencia. Si Ferrari confía en ellos, tú también
                        puedes hacerlo.
                    </p>
                </div>
                <div className="mt-6">
                    <h5 className="text-white text-18 font-bold">
                        3. Protección contra Errores (Seguro de Indemnización)
                    </h5>
                    <p className="text-16">
                        Tu tranquilidad tiene un respaldo adicional. Vantage
                        cuenta con una póliza millonaria de Indemnización
                        Profesional.
                    </p>
                    <p className="text-16 mt-2 pl-4">
                        <strong>La garantía:</strong> Este seguro protege tus
                        fondos contra errores administrativos, fallas internas o
                        negligencias. Es un paracaídas de seguridad que muy
                        pocos brokers pueden costear, asegurando que tu saldo
                        esté protegido ante imprevistos operativos.
                    </p>
                </div>
                <div className="mt-6">
                    <h5 className="text-white text-18 font-bold">
                        4. Regulación Global (Vigilancia Estricta)
                    </h5>
                    <p className="text-16">
                        Aunque operes desde México o Latinoamérica, tu cuenta
                        está bajo el paraguas de una institución regulada en los
                        mercados más exigentes: Reino Unido y Australia.
                    </p>
                    <p className="text-16 mt-2 pl-4">
                        <strong>El beneficio:</strong> Al tener licencias
                        globales, Vantage está obligado a cumplir con los
                        estándares más altos de honestidad y transparencia.
                        Arriesgar su reputación en un país significaría perder
                        sus licencias en todo el mundo.
                    </p>
                </div>
            </div>
        </section>
    );
}
