export default function FilterBar() {
  return (
    <div className="flex gap-3 mb-4">
      <input type="text" placeholder="Kalit so'z" className="border px-3 py-2 rounded w-1/3" />
      <select className="border px-3 py-2 rounded">
        <option>Hammasi</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Design</option>
      </select>
      <select className="border px-3 py-2 rounded">
        <option>Maosh bo'yicha</option>
        <option>Yuqoridan pastga</option>
        <option>Pastdan yuqoriga</option>
      </select>
      <button className="px-4 py-2 bg-indigo-600 text-white rounded">Izlash</button>
    </div>
  );
}

