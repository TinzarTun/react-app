export default function Sidebar() {
  return (
    // <!-- Sidebar -->
    <div className="lg:w-1/3 space-y-8">
      {/* <!-- Search --> */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <div
            className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    
      {/* <!-- Recent Posts --> */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
        <div className="space-y-4">
          <div className="flex gap-3">
            <img
              className="h-16 w-16 object-cover rounded-md"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="JavaScript Tricks"
            />
            <div>
              <h4 className="font-medium text-sm line-clamp-2">
                <a href="#" className="hover:text-emerald-600"
                  >10 JavaScript Tricks That Will Blow Your Mind</a
                >
              </h4>
              <p className="text-gray-500 text-xs mt-1">May 5, 2025</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img
              className="h-16 w-16 object-cover rounded-md"
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
              alt="Career Development"
            />
            <div>
              <h4 className="font-medium text-sm line-clamp-2">
                <a href="#" className="hover:text-emerald-600"
                  >From Junior to Senior Developer: A Roadmap for Success</a
                >
              </h4>
              <p className="text-gray-500 text-xs mt-1">April 28, 2025</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img
              className="h-16 w-16 object-cover rounded-md"
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095"
              alt="AI in Development"
            />
            <div>
              <h4 className="font-medium text-sm line-clamp-2">
                <a href="#" className="hover:text-emerald-600"
                  >How AI is Transforming Web Development in 2025</a
                >
              </h4>
              <p className="text-gray-500 text-xs mt-1">April 15, 2025</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img
              className="h-16 w-16 object-cover rounded-md"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Scalable Web Applications"
            />
            <div>
              <h4 className="font-medium text-sm line-clamp-2">
                <a href="#" className="hover:text-emerald-600"
                  >Building Scalable Web Applications: A Comprehensive
                  Guide</a
                >
              </h4>
              <p className="text-gray-500 text-xs mt-1">March 10, 2025</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img
              className="h-16 w-16 object-cover rounded-md"
              src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613"
              alt="React Hooks"
            />
            <div>
              <h4 className="font-medium text-sm line-clamp-2">
                <a href="#" className="hover:text-emerald-600"
                  >Advanced React Hooks: Patterns and Best Practices</a
                >
              </h4>
              <p className="text-gray-500 text-xs mt-1">March 2, 2025</p>
            </div>
          </div>
        </div>
      </div>
    
      {/* <!-- Most Read Posts --> */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Most Read Posts</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div
              className="bg-emerald-100 text-emerald-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              1
            </div>
            <div>
              <h4 className="font-medium text-sm line-clamp-2">
                <a href="#" className="hover:text-emerald-600"
                  >From Junior to Senior Developer: A Roadmap for Success</a
                >
              </h4>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span>42.5K views</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="bg-emerald-100 text-emerald-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              2
            </div>
            <div>
              <h4 className="font-medium text-sm line-clamp-2">
                <a href="#" className="hover:text-emerald-600"
                  >10 JavaScript Tricks That Will Blow Your Mind</a
                >
              </h4>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span>38.2K views</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="bg-emerald-100 text-emerald-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              3
            </div>
            <div>
              <h4 className="font-medium text-sm line-clamp-2">
                <a href="#" className="hover:text-emerald-600"
                  >Building Scalable Web Applications: A Comprehensive
                  Guide</a
                >
              </h4>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span>29.7K views</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="bg-emerald-100 text-emerald-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              4
            </div>
            <div>
              <h4 className="font-medium text-sm line-clamp-2">
                <a href="#" className="hover:text-emerald-600"
                  >How AI is Transforming Web Development in 2025</a
                >
              </h4>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span>24.3K views</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="bg-emerald-100 text-emerald-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              5
            </div>
            <div>
              <h4 className="font-medium text-sm line-clamp-2">
                <a href="#" className="hover:text-emerald-600"
                  >Advanced React Hooks: Patterns and Best Practices</a
                >
              </h4>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span>19.8K views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {/* <!-- Categories --> */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Categories</h3>
        <div className="space-y-2">
          <a
            href="#"
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition"
          >
            <span className="font-medium">JavaScript</span>
            <span
              className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded"
              >42</span
            >
          </a>
          <a
            href="#"
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition"
          >
            <span className="font-medium">PHP</span>
            <span
              className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded"
              >22</span
            >
          </a>
        </div>
      </div>
    </div>
  );
}
