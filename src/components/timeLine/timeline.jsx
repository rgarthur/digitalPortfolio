export function TimelineItem({ year, title, desc, side = 'right' }) {
  return (
    <div className={`flex w-full mb-12 items-center justify-between ${side === 'left' ? 'flex-row-reverse' : ''}`}>
      <div className="w-5/12 px-6 py-4 bg-slate-900/80 rounded-2xl shadow-lg border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:scale-[1.03] group">
        <span className="text-indigo-400 font-bold text-sm group-hover:text-blue-400 transition-colors">{year}</span>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
      </div>

      <div className="z-10 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)]">
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>

      <div className="w-5/12"></div>
    </div>
  );
}