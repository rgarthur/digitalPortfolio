export function TimelineItem({ year, title, desc, side = 'right' }) {
  return (
    <div className={`flex w-full mb-12 items-center justify-between ${side === 'left' ? 'flex-row-reverse' : ''}`}>
      <div className="w-5/12 px-6 py-4 bg-white/10 bg-slate-900/90 rounded-xl border border-white/20 shadow-xl">
        <span className="text-blue-400 font-bold text-sm">{year}</span>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
      </div>

      <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]">
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>

      <div className="w-5/12"></div>
    </div>
  );
}