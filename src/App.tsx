import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedPost from "./components/FeaturedPost";
import RecentPosts from "./components/RecentPosts";
import Newsletter from "./components/Newsletter";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

export default function App ()  {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <HeroSection />
      <FeaturedPost />
      <RecentPosts />
      <Newsletter />
      <Categories />
      <Footer />
    </div>
  );
};
