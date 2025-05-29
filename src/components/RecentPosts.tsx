import { Link } from "react-router-dom";
import type { Post } from "../types/type";
function getCategory(category: string | undefined) {
  switch (category) {
    case "Technology":
      return "bg-blue-100 text-blue-800";
    case "Food":
      return "bg-amber-100 text-amber-800";
    default:
      return "bg-green-100 text-green-800";
  }
}

export default function RecentPosts({ recentPosts }: { recentPosts: Post[] }) {
  return (
    <section className="py-12 bg-gray-100" id="blog">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Recent Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Link to={`/posts/${post.id}/post-detail`}>
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt={post.title}
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span
                    className={`${getCategory(
                      post.category
                    )} text-xs font-semibold px-2.5 py-0.5 rounded`}
                  >
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full mr-2"
                    src={post.author?.avatar}
                    alt="Author"
                  />
                  <div>
                    <p className="text-sm font-medium">{post.author?.name}</p>
                    <p className="text-xs text-gray-500">{post.author?.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-emerald-700 transition"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}
