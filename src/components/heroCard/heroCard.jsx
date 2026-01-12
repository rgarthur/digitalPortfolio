export function HeroCard(){
    return(
        <main className="h-screen flex items-center justify-center bg-transparent text-white p-10">
            <div className="max-w-4xl text-center transition-all duration-700">
                <h1 className="text-5xl font-extrabold mb-4">Seja bem vindo(a) ao meu portifólio Digital!</h1>
                <p className="text-xl text-white">Clique no botão abaixo ou continue para ver mais</p>
                <button className="mt-8 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                    <a href="#presentationCard">Ver meu trabalho</a>
                </button>
            </div>
        </main>
    )
}