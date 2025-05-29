import type { Post } from "../types/type";
import HeroSection from "../components/HeroSection";
import FeaturedPost from "../components/FeaturedPost";
// import RecentPosts from "../components/RecentPosts";
import Newsletter from "../components/Newsletter";
import Categories from "../components/Categories";

export default function Home() {
  const posts: Post = {
    title: "The Power of Positive Thinking",
    description:
      "Learn how to cultivate a positive mindset and transform your life.",
    label: "Start Reading",
  };
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
  // const recentPosts: Post[] = [
  //   {
  //     title: "The Future of Web Development",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     category: "Technology",
  //     imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  //     author: {
  //       name: "Alex Chen",
  //       avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  //       date: "May 12, 2025",
  //     },
  //   },
  //   {
  //     title: "10 Easy Recipes for Beginners",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     category: "Food",
  //     imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
  //     author: {
  //       name: "Maria Garcia",
  //       avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  //       date: "May 10, 2025",
  //     },
  //   },
  //   {
  //     title: "5 Morning Habits for Better Health",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     category: "Health",
  //     imageUrl: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
  //     author: {
  //       name: "James Wilson",
  //       avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  //       date: "May 8, 2025",
  //     },
  //   },
  // ];
  const categories: Post[] = [
    {
      category: "Technology",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      category: "Food",
      icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z",
    },
    {
      category: "Travel",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      category: "Health",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    },
  ];
  return (
    <div className="bg-gray-50 text-gray-800">
      <HeroSection
        title={posts.title}
        description={posts.description}
        label={posts.label!}
      />
      <FeaturedPost featuredPosts={featuredPosts} />
      {/* <RecentPosts recentPosts={recentPosts} /> */}
      <Newsletter />
      <Categories categories={categories} />
    </div>
  );
}
