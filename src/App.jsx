import './App.css'
import { Header } from './components/header/header'
import { HeroCard } from './components/heroCard/heroCard'
import { PresentationCard } from './components/presentationCard/presentationCard'
import { JourneySection } from './components/timeLine/journeySection'
import { Reveal } from './components/reveal/reveal'
import { SkillsSection } from './components/skillsCard/skillSelection'
import { useState } from 'react'
import profileImg from './assets/foto.jpg'
import skyStars from './assets/skyStars.mp4'
import winter from './assets/winter.mp4'

function App() {
  const [isLight, setIsLight] = useState(false);

  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full">
        <video 
          key={isLight ? 'winter' : 'stars'}
          autoPlay loop muted playsInline 
          className="w-full h-full object-cover transition-opacity duration-1000"
        >
          <source src={isLight ? winter : skyStars} type="video/mp4" />
        </video>
        <div className={`absolute inset-0 transition-colors duration-3000 ${isLight ? 'bg-white/20' : 'bg-black/40'}`} />
      </div>

      <div className="h-screen flex flex-col bg-transparent"> 
        <Header onThemeChange={(value) => setIsLight(value)} />
      
      <main className='flex-1 overflow-y-auto scroll-smooth no-scrollbar'>
        <section id='home' className='h-screen transition-all duration-1000 ease-in-out box-sizing: border-box;'>
          <Reveal direction='up' >
            <HeroCard />
          </Reveal>
        </section>
        
        <section id="presentationCard" className="h-screen bg-transparent flex items-center justify-center p-10 overflow-hidden">
          <div className="flex flex-row gap-8 items-center justify-center w-full max-w-6xl transition-all duration-500">
            <Reveal direction='up'>
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
            </Reveal>
          </div>
        </section>

        <section id='journey' className='bg-transparent'>
          <Reveal>
            <JourneySection />
          </Reveal>
        </section>

        <section id='skills' className='bg-transparent'>
          <Reveal>
            <SkillsSection />
          </Reveal>
        </section>

      </main>
    </div>
    </>
  )
}

export default App
