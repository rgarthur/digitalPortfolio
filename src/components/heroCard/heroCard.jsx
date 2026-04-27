export function HeroCard(){
    return(
        <main className="h-screen flex items-center justify-center bg-transparent text-white p-10">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]">
                    <span className="absolute -inset-1 blur-2xl opacity-50 bg-purple"></span>
                    <span className="relative">Seja bem vindo(a) ao meu portifólio Digital!</span>
                </h1>
                <div className="w-16 h-1 bg-purple mx-auto mt-2 rounded-full"></div>
                <p className="text-xl text-gray-300 mt-6 mb-2">Clique no botão abaixo ou continue para ver mais</p>
                <a href="#presentationCard" className="inline-block mt-6 px-8 py-3 bg-slate-900/80 text-white font-medium rounded-full shadow-lg hover:bg-purple/80 hover:shadow-[0_0_15px_rgba(192,132,252,0.6)] hover:-translate-y-1 transition-all duration-300">
                    Ver meu trabalho
                </a>
            </div>
        </main>
    )
}