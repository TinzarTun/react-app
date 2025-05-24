export default function FeaturedPost() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Featured Post
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-64"
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
                alt="Mountain landscape"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-emerald-600 font-semibold">
                Travel
              </div>
              <a
                href="#"
                className="block mt-1 text-2xl font-semibold text-gray-900 hover:text-emerald-600"
              >
                Discovering Hidden Gems in the Mountains
              </a>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://randomuser.me/api/portraits/women/17.jpg"
                    alt="Author"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Sarah Johnson
                  </p>
                  <p className="text-sm text-gray-500">
                    May 15, 2025 · 6 min read
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
