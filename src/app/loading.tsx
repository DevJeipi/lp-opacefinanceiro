'use client'

export default function Loading() {
    return (
        <div className="bg-primary-black fixed inset-0 flex items-center justify-center">
            <style>{`
                @keyframes float-coin {
                    0%, 100% { transform: translateY(0) rotateZ(0deg); opacity: 1; }
                    50% { transform: translateY(-20px) rotateZ(180deg); }
                }
                @keyframes glow-pulse {
                    0%, 100% { box-shadow: 0 0 20px rgba(240, 88, 36, 0.4); }
                    50% { box-shadow: 0 0 40px rgba(240, 88, 36, 0.8); }
                }
                @keyframes slide-bars {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(0); }
                    100% { transform: translateX(100%); }
                }
                .animate-float-coin {
                    animation: float-coin 3s ease-in-out infinite;
                }
                .animate-glow-pulse {
                    animation: glow-pulse 2s ease-in-out infinite;
                }
                .animate-slide-bars {
                    animation: slide-bars 1.5s ease-in-out infinite;
                }
            `}</style>

            <div className="flex flex-col items-center gap-12">
                {/* Moeda animada */}
                <div className="relative flex h-32 w-32 items-center justify-center">
                    {/* Anel externo */}
                    <div className="border-primary-orange/30 animate-glow-pulse absolute inset-0 rounded-full border-4"></div>

                    {/* Moeda principal */}
                    <div className="animate-float-coin from-primary-orange to-secondary-orange flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br shadow-lg">
                        <div className="text-primary-white text-4xl font-bold">
                            $
                        </div>
                    </div>

                    {/* Partículas ao redor */}
                    <div
                        className="border-t-primary-orange absolute inset-0 rounded-full border-2 border-transparent opacity-50"
                        style={{ animation: 'spin 4s linear infinite reverse' }}
                    ></div>
                </div>

                {/* Texto com tipografia do site */}
                <div className="text-center">
                    <h2 className="font-heading text-primary-orange mb-2 text-3xl font-bold">
                        Carregando
                    </h2>
                    <p className="font-body text-primary-white text-sm">
                        Preparando seu caminho para a
                        <span className="text-primary-orange block font-bold">
                            independência financeira
                        </span>
                    </p>
                </div>

                {/* Barras de progresso animadas */}
                <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="bg-primary-orange/30 h-8 w-2 overflow-hidden rounded-full"
                            style={{
                                animation: `slide-bars 1.5s ease-in-out infinite`,
                                animationDelay: `${i * 0.2}s`,
                            }}
                        >
                            <div className="from-primary-orange to-secondary-orange h-full w-full bg-gradient-to-b"></div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes spin {
                    to { transform: rotateZ(360deg); }
                }
            `}</style>
        </div>
    )
}
