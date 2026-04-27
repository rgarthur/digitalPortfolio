import { useState } from 'react'
import logoGithub from '../../assets/github.svg'
import { Switch } from '../switch/switch'

export function Header({ onThemeChange }){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 lg:px-8 py-4
        bg-slate-900/80 backdrop-blur-md border-b border-white/10 text-white transition-all duration-300">

            <a href="#home">
                <h2 className="text-2xl font-bold tracking-tighter hover:text-indigo-400 transition-colors cursor-pointer"
                style={{ textShadow: '0 0 10px rgba(99,102,241,0.5)' }}>
                    Arthur Gaspar
                </h2>
            </a>

            {/* Navegação Desktop */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
                <a href="https://github.com/rgarthur" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-all group">
                    <img src={logoGithub} alt="GitHub" className="w-8 h-8 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#presentationCard" className="hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-all">
                    Sobre Mim
                </a>
                <a href="#journey" className="hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-all">
                    Jornada
                </a>
                <a href="#skills" className="hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-all">
                    Linguagens e Frameworks
                </a>
                <a href="#projects" className="hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-all">
                    Projetos
                </a> 
                <Switch text1="Dark" text2="Light" onToggle={onThemeChange} />
            </nav>

            {/* Menu Hambúrguer (Mobile) */}
            <button onClick={toggleMenu} className="lg:hidden text-gray-300 hover:text-indigo-400 focus:outline-none transition-colors">
                {isMenuOpen ? (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                )}
            </button>

            {/* Dropdown Mobile */}
            <div className={`absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-white/10 flex flex-col items-center gap-6 py-8 transition-all duration-300 lg:hidden ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                <a href="#presentationCard" onClick={toggleMenu} className="text-base font-medium uppercase tracking-widest hover:text-indigo-400 transition-all">Sobre Mim</a>
                <a href="#journey" onClick={toggleMenu} className="text-base font-medium uppercase tracking-widest hover:text-indigo-400 transition-all">Jornada</a>
                <a href="#skills" onClick={toggleMenu} className="text-base font-medium uppercase tracking-widest hover:text-indigo-400 transition-all">Linguagens e Frameworks</a>
                <a href="#projects" onClick={toggleMenu} className="text-base font-medium uppercase tracking-widest hover:text-indigo-400 transition-all">Projetos</a>
                <a href="https://github.com/rgarthur" onClick={toggleMenu} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-all">
                    <img src={logoGithub} alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform" />
                </a>
                <div className="pt-4 border-t border-white/10 w-1/2 flex justify-center">
                    <Switch text1="Dark" text2="Light" onToggle={onThemeChange} />
                </div>
            </div>

        </header>
    )
}