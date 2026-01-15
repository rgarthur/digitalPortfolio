import logoGithub from '../../assets/github.svg'
import { Switch } from '../switch/switch'

export function Header({ onThemeChange }){
    return (
        <header className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4
        bg-white/5 backdrop-blur-lg border-b border-white/10 text-white transition-all duration-300 hover:bg-white/10">

            <a href="#home">
                <h2 className="text-2xl font-bold tracking-tighter hover:text-blue-400 transition-colors cursor-pointer"
                style={{ textShadow: '0 0 8px rgba(255,255,255,0.3)' }}>
                    Portifólio
                </h2>
            </a>

        <nav className="flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="https://github.com/rgarthur" className="hover:text-blue-400 hover:drop-shadow-[0_0_5px_rgba(96,165,250,0.8)] transition-all">
                <img src={logoGithub} alt="" className="w-8 h-8" />
            </a>
            <a href="#presentationCard" className="hover:text-blue-400 hover:drop-shadow-[0_0_5px_rgba(96,165,250,0.8)] transition-all">
                Sobre Mim
            </a>
            <Switch text1="Dark" text2="Light" onToggle={onThemeChange} />
        </nav>
        </header>
    )
}