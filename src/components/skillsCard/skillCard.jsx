export function SkillCard({ name, icon, percentage, color = "purple" }) {
  const glowStyles = {
    purple: "bg-purple-500 shadow-[0_0_10px_#a855f7]",
    blue: "bg-blue-500 shadow-[0_0_10px_#3b82f6]",
  };

  return (
    <div className="bg-slate-900/80 p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all group">
      <div className="flex flex-col items-center gap-4">
        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
           {icon}
        </div>
        <h3 className="text-white font-bold tracking-wider">{name}</h3>
        
        <div className="w-full bg-white/10 h-2 rounded-full mt-2 overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ease-out ${glowStyles[color]}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-xs text-gray-400 mt-1">{percentage}%</span>
      </div>
    </div>
  );
}