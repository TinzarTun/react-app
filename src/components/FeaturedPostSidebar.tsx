export default function FeaturedPostSidebar() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt="Featured post"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            Featured
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2">
          Building Scalable Web Applications: A Comprehensive Guide
        </h3>
        <p className="text-gray-600 mb-4">
          Learn how to design and build web applications that can handle
          millions of users without breaking a sweat.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-sm">March 10, 2025</span>
          <a
            href="#"
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
