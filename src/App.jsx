import './App.css'
import { Header } from './components/header/header'
import { HeroCard } from './components/heroCard/heroCard'
import { Reveal } from './components/reveal/reveal'
import { PresentationCard } from './components/presentationCard/presentationCard'
import Background from './assets/sky.mp4'
import profileImg from './assets/foto.jpg'

function App() {
  return (
    <>
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src={Background} type="video/mp4"/>
      </video>
      <div className="absolute inset-0 bg-black/40" />
    </div>
    <div className="h-screen flex flex-col overflow-hidden bg-transparent"> 
      <Header />
      <main className='flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar'>
        <section id='home' className='h-screen snap-start snap-stop-always box-sizing: border-box;'>
            <HeroCard />
        </section>
        
        <section id="presentationCard" className="h-screen snap-start bg-transparent flex items-center justify-center p-10 overflow-hidden">
          <div className="flex flex-row gap-8 items-center justify-center w-full max-w-6xl transition-all duration-500">
            <PresentationCard 
              title={'Arthur Rocha Gaspar'} 
              desc={'19 anos'}
              img={profileImg} 
              longDesc={`Minha paixão pela tecnologia começou cedo: o computador faz parte do meu cotidiano desde a infância. 
                Aos 12 anos, movido pela necessidade e pela curiosidade, aprendi a manipular hardware para realizar meus próprios reparos. 
                O que começou como um desafio pessoal tornou-se minha porta de entrada no mercado de trabalho. Aos 15, eu já prestava suporte técnico para amigos e conhecidos. 
                Embora o hardware tenha sido minha base, meu verdadeiro sonho sempre foi o de desenvolver. Inspirado pelo sucesso dos meus irmãos na programação, decidi transicionar para o desenvolvimento de software. 
                Hoje, uno a experiência prática de quem entende como a máquina funciona com a sede de criar soluções inovadoras através do código.`}
            />
          </div>
        </section>
      </main>
    </div>
    </>
  )
}

export default App
