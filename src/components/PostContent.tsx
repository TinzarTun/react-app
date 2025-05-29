export default function PostContent() {
  return (
    // <!-- Blog Post Content -->
    <div className="lg:w-2/3">
      {/* <!-- Breadcrumbs --> */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2">
          <li className="mb-2 leading-7">
            <a
              href="index.html"
              className="text-gray-500 hover:text-emerald-600"
            >
              Home
            </a>
          </li>
          <li className="text-gray-500">/</li>
          <li className="mb-2 leading-7">
            <a href="#" className="text-gray-500 hover:text-emerald-600">
              Blog
            </a>
          </li>
          <li className="text-gray-500">/</li>
          <li className="mb-2 leading-7">
            <a href="#" className="text-gray-500 hover:text-emerald-600">
              Technology
            </a>
          </li>
          <li className="text-gray-500">/</li>
          <li className="text-gray-800 font-medium">
            The Future of Web Development
          </li>
        </ol>
      </nav>

      {/* <!-- Post Header --> */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="The Future of Web Development"
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="p-6 md:p-8">
          <div className="flex items-center mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Technology
            </span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-500 text-sm">May 12, 2025</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-500 text-sm">10 min read</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            The Future of Web Development: What to Expect in 2026
          </h1>
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full mr-4"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Alex Chen"
            />
            <div>
              <a
                href="author-profile.html"
                className="font-medium hover:text-emerald-600"
              >
                Alex Chen
              </a>
              <p className="text-gray-500 text-sm">
                Senior Tech Writer & Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Post Content --> */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
        <div className="blog-content text-gray-700 space-y-5">
          <p className="font-medium text-lg">
            As we approach 2026, the web development landscape continues to
            evolve at a rapid pace. In this article, I explore the emerging
            technologies and trends that will shape the future of web
            development.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">
            The Rise of AI-Powered Development
          </h2>
          <p>
            Artificial Intelligence is no longer just a buzzword in web
            development. By 2026, we expect to see AI deeply integrated into the
            development workflow. Code assistants will evolve beyond simple
            autocomplete to understand project context and suggest entire
            solutions to complex problems.
          </p>

          <p>Here are some ways AI will transform web development:</p>
          <ul className="mb-5 pl-6 list-disc">
            <li className="mb-2 leading-7">
              Automated code generation for repetitive tasks
            </li>
            <li className="mb-2 leading-7">
              Intelligent debugging that not only identifies issues but suggests
              fixes
            </li>
            <li className="mb-2 leading-7">
              UI/UX recommendations based on user behavior analysis
            </li>
            <li className="mb-2 leading-7">
              Performance optimization through predictive analytics
            </li>
          </ul>

          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095"
            alt="AI in Development"
            className="w-full"
          />

          <h2 className="text-2xl font-bold mt-6 mb-4">
            WebAssembly: The New Standard
          </h2>
          <p>
            WebAssembly (Wasm) has been gaining traction, and by 2026, it will
            become a standard technology in web development. This binary
            instruction format provides near-native performance for web
            applications, enabling complex applications that were previously
            impossible to run efficiently in browsers.
          </p>

          <blockquote className="border-l-4 border-emerald-500 pl-4 italic my-6 text-gray-600">
            "WebAssembly is not just about performance; it's about bringing the
            entire ecosystem of programming languages to the web." — Sarah
            Johnson, WebAssembly Core Team
          </blockquote>

          <p>
            The ability to use languages like C++, Rust, and Go directly in web
            applications will open new possibilities for web developers and blur
            the line between web and native applications.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">
            Edge Computing Takes Center Stage
          </h2>
          <p>
            By 2026, edge computing will be a fundamental part of web
            architecture. Instead of processing everything in centralized data
            centers, computation will happen closer to the user, reducing
            latency and improving performance.
          </p>

          <p>
            This shift will require developers to think differently about
            application architecture:
          </p>
          <ol className="mb-5 pl-6 list-decimal">
            <li className="mb-2 leading-7">
              Distributed state management becomes critical
            </li>
            <li className="mb-2 leading-7">
              Serverless functions will be deployed globally at the edge
            </li>
            <li className="mb-2 leading-7">
              Data synchronization patterns will evolve
            </li>
            <li className="mb-2 leading-7">
              New frameworks optimized for edge computing will emerge
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-6 mb-4">
            The End of Traditional JavaScript Frameworks?
          </h2>
          <p>
            While frameworks like React, Vue, and Angular have dominated the
            landscape, by 2026, we may see a shift toward more lightweight,
            specialized tools. The "framework fatigue" of the early 2020s will
            give way to a more modular approach where developers pick smaller,
            purpose-built libraries rather than committing to monolithic
            frameworks.
          </p>

          <p>Here's an example of how component code might look in 2026:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto my-6">
            <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">
              {`// Using a hypothetical future syntax
        component Counter {
          state count = 0;

          increment() {
            this.count++;
          }

          render() {
            return \`
              <div className="counter">
                <p>Count: \${this.count}</p>
                <button @click="increment()">Increment</button>
              </div>
            \`;
          }
        }`}
            </code>
          </pre>

          <h2 className="text-2xl font-bold mt-6 mb-4">
            Accessibility as a Core Requirement
          </h2>
          <p>
            By 2026, accessibility will no longer be an afterthought but a core
            requirement for all web projects. This shift will be driven by both
            regulatory requirements and a broader understanding of the
            importance of inclusive design.
          </p>

          <p>
            Development tools will integrate accessibility testing at every
            stage, and frameworks will include accessible components by default.
            The result will be a more inclusive web for everyone.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Conclusion</h2>
          <p>
            The web development landscape of 2026 will be characterized by AI
            assistance, WebAssembly performance, edge computing architecture,
            modular tooling, and built-in accessibility. Developers who start
            preparing for these changes now will be well-positioned for the
            future.
          </p>

          <p>
            What trends do you think will shape web development in the coming
            years? Share your thoughts in the comments below!
          </p>
        </div>

        {/* <!-- Tags Section --> */}
        <div className="mt-8 pt-6 border-t">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 mr-2">
              Tags:
            </span>
            <a
              href="#"
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded hover:bg-gray-200"
            >
              Web Development
            </a>
            <a
              href="#"
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded hover:bg-gray-200"
            >
              JavaScript
            </a>
            <a
              href="#"
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded hover:bg-gray-200"
            >
              AI
            </a>
            <a
              href="#"
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded hover:bg-gray-200"
            >
              WebAssembly
            </a>
            <a
              href="#"
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded hover:bg-gray-200"
            >
              Edge Computing
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Share and Reactions --> */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-emerald-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>142 Likes</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-emerald-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>38 Comments</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Share:</span>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600"
              aria-label="Share on Twitter"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-800"
              aria-label="Share on Facebook"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              aria-label="Share on LinkedIn"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-red-600"
              aria-label="Share on Pinterest"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <button
              className="text-gray-500 hover:text-emerald-600"
              aria-label="Copy link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Author Bio --> */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <img
            className="h-20 w-20 rounded-full"
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Alex Chen"
          />
          <div>
            <h3 className="text-lg font-bold mb-2">
              Written by
              <a
                href="author-profile.html"
                className="text-emerald-600 hover:underline"
              >
                Alex Chen
              </a>
            </h3>
            <p className="text-gray-600 mb-4">
              Alex is a passionate tech writer with over 10 years of experience
              in web development. He loves sharing his knowledge about the
              latest technologies and helping others learn to code.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-600 transition"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-600 transition"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-600 transition"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Comments Section --> */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-xl font-bold mb-6">Comments (38)</h3>

        {/* <!-- Comment Form --> */}
        <div className="mb-8">
          <div className="flex items-start gap-4">
            <img
              className="h-10 w-10 rounded-full"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Your Avatar"
            />
            <div className="flex-grow">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                rows={3}
                placeholder="Add a comment..."
              ></textarea>
              <div className="mt-2 flex justify-end">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Comments List --> */}
        <div className="space-y-6">
          {/* <!-- Comment 1 --> */}
          <div className="flex gap-4">
            <img
              className="h-10 w-10 rounded-full"
              src="https://randomuser.me/api/portraits/women/17.jpg"
              alt="Sarah Johnson"
            />
            <div className="flex-grow">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-medium">Sarah Johnson</span>
                    <span className="text-gray-500 text-sm ml-2">
                      2 days ago
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-700">
                  Great article! I'm particularly excited about the potential of
                  WebAssembly. The performance gains could be game-changing for
                  complex web applications.
                </p>
                <div className="mt-3 flex items-center space-x-4 text-sm">
                  <button className="flex items-center text-gray-500 hover:text-emerald-600">
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
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                    <span>24</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-emerald-600">
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
                        d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2"
                      />
                    </svg>
                    <span>2</span>
                  </button>
                  <button className="text-gray-500 hover:text-emerald-600">
                    Reply
                  </button>
                </div>
              </div>

              {/* <!-- Nested Reply --> */}
              <div className="mt-4 ml-6">
                <div className="flex gap-4">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Alex Chen"
                  />
                  <div className="flex-grow">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-medium">Alex Chen</span>
                          <span className="text-emerald-600 text-xs ml-1">
                            (Author)
                          </span>
                          <span className="text-gray-500 text-sm ml-2">
                            1 day ago
                          </span>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-700">
                        Thanks, Sarah! I agree - WebAssembly is going to be
                        transformative. I'm working on a follow-up article that
                        goes deeper into specific use cases.
                      </p>
                      <div className="mt-3 flex items-center space-x-4 text-sm">
                        <button className="flex items-center text-gray-500 hover:text-emerald-600">
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
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                          </svg>
                          <span>12</span>
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-emerald-600">
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
                              d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2"
                            />
                          </svg>
                          <span>0</span>
                        </button>
                        <button className="text-gray-500 hover:text-emerald-600">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Comment 2 --> */}
          <div className="flex gap-4">
            <img
              className="h-10 w-10 rounded-full"
              src="https://randomuser.me/api/portraits/men/67.jpg"
              alt="James Wilson"
            />
            <div className="flex-grow">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-medium">James Wilson</span>
                    <span className="text-gray-500 text-sm ml-2">
                      3 days ago
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-700">
                  I'm skeptical about the "end of traditional JavaScript
                  frameworks" prediction. React has shown incredible staying
                  power and continues to evolve. What makes you think developers
                  will move away from these established ecosystems?
                </p>
                <div className="mt-3 flex items-center space-x-4 text-sm">
                  <button className="flex items-center text-gray-500 hover:text-emerald-600">
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
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                    <span>8</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-emerald-600">
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
                        d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2"
                      />
                    </svg>
                    <span>1</span>
                  </button>
                  <button className="text-gray-500 hover:text-emerald-600">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- View More Comments Button --> */}
          <div className="text-center pt-4">
            <button className="text-emerald-600 hover:text-emerald-700 font-medium">
              View More Comments
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Related Posts --> */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-6">Related Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <!-- Related Post 1 --> */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="Code on screen"
            />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  JavaScript
                </span>
              </div>
              <h4 className="font-bold mb-2">
                10 JavaScript Tricks That Will Blow Your Mind
              </h4>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                JavaScript is full of surprises and powerful features that many
                developers aren't aware of. In this article, I share 10 advanced
                JavaScript techniques...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-xs">May 5, 2025</span>
                <a
                  href="#"
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Related Post 2 --> */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095"
              alt="AI concept"
            />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  AI
                </span>
              </div>
              <h4 className="font-bold mb-2">
                How AI is Transforming Web Development in 2025
              </h4>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                Artificial Intelligence is revolutionizing how we build websites
                and web applications. In this article, I explore the latest AI
                tools and technologies...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-xs">April 15, 2025</span>
                <a
                  href="#"
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
