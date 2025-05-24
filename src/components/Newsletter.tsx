export default function Newsletter () {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest posts delivered right to your inbox.
          </p>
          <form className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-emerald-700 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
