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
  const featuredPosts: Post[] = [
    {
      id: 1,
      category: "Travel",
      title: "Discovering Hidden Gems in the Mountains",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      author: {
        name: "Sarah Johnson",
        avatar: "https://randomuser.me/api/portraits/women/17.jpg",
        date: "May 15, 2025",
        readTime: "6 min read",
      },
    },
    {
      id: 2,
      category: "Technology",
      title: "The Future of Artificial Intelligence",
      description:
        "Exploring the latest developments in AI technology and their impact on our daily lives and future society.",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      author: {
        name: "Michael Chen",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        date: "May 12, 2025",
        readTime: "8 min read",
      },
    },
    {
      id: 3,
      category: "Lifestyle",
      title: "Minimalist Living: Less is More",
      description:
        "Discover how embracing minimalism can lead to a more fulfilling and stress-free lifestyle in our modern world.",
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      author: {
        name: "Emma Wilson",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        date: "May 10, 2025",
        readTime: "5 min read",
      },
    },
    {
      id: 4,
      category: "Food",
      title: "Farm-to-Table: A Culinary Journey",
      description:
        "Experience the freshest flavors and sustainable practices that define the farm-to-table movement.",
      imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      author: {
        name: "David Rodriguez",
        avatar: "https://randomuser.me/api/portraits/men/18.jpg",
        date: "May 8, 2025",
        readTime: "7 min read",
      },
    },
  ];
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <HeroSection
        title={posts.title}
        description={posts.description}
        label={posts.label!}
      />
      <FeaturedPost featuredPosts={featuredPosts} />
      <RecentPosts />
      <Newsletter />
      <Categories />
      <Footer />
    </div>
  );
};
