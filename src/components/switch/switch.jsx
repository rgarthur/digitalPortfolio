export function Switch({ text1, text2, onToggle }) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <span className="text-white text-sm font-medium">{text1}</span>
      <input 
        type="checkbox" 
        className="sr-only peer" 
        onChange={(e) => onToggle(e.target.checked)} 
      />
      <div className="relative mx-3 w-9 h-5 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
      <span className="text-white text-sm font-medium">{text2}</span>
    </label>
  );
}
