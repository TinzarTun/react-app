export default function PopularCategories() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-bold mb-4">Popular Categories</h3>
      <div className="space-y-2">
        <a
          href="#"
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition"
        >
          <span className="font-medium">JavaScript</span>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            42
          </span>
        </a>
        <a
          href="#"
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition"
        >
          <span className="font-medium">React</span>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            38
          </span>
        </a>
        <a
          href="#"
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition"
        >
          <span className="font-medium">Web Development</span>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            27
          </span>
        </a>
        <a
          href="#"
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition"
        >
          <span className="font-medium">Career Advice</span>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            15
          </span>
        </a>
        <a
          href="#"
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition"
        >
          <span className="font-medium">AI & Machine Learning</span>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            5
          </span>
        </a>
      </div>
    </div>
  );
}
