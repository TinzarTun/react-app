import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedPost from "./components/FeaturedPost";
import RecentPosts from "./components/RecentPosts";
import Newsletter from "./components/Newsletter";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import type { Post } from "./types/type";

export default function App() {
  const posts: Post =
  {
    title: "Welcome to My Blog",
    description: "Explore the latest articles on web development, design, and more.",
    label: "Get Started",
  }
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <HeroSection title={posts.title} description={posts.description} label={posts.label!} />
      <FeaturedPost />
      <RecentPosts />
      <Newsletter />
      <Categories />
      <Footer />
    </div>
  );
};
