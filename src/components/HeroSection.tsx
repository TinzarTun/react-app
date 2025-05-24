export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to BlogFolio
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-emerald-600 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Start Reading
          </a>
        </div>
      </div>
    </section>
  );
};
