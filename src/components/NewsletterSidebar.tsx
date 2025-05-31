export default function NewsletterSidebar() {
  return (
    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-md p-6 text-white">
      <h3 className="text-lg font-bold mb-2">Subscribe to Alex's Newsletter</h3>
      <p className="mb-4 opacity-90">
        Get the latest articles and insights delivered straight to your inbox.
      </p>
      <form>
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-4 py-2 rounded-lg text-gray-800 mb-3"
        />
        <button
          type="submit"
          className="w-full bg-white text-emerald-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
