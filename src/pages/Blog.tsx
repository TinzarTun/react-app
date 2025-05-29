import type { Post } from "../types/type";
import RecentPosts from "../components/RecentPosts";
import HeroSection from "../components/HeroSection";

export default function Blog() {
  const posts: Post = {
    title: "Welcome to Our Blog",
    description:
      "Exploring the latest trends, tips, and stories from our community.",
    label: "Start Reading",
  };
  const recentPosts: Post[] = [
    {
      id: 2,
      title: "The Future of Web Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      author: {
        name: "Alex Chen",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        date: "May 12, 2025",
      },
    },
    {
      id: 2,
      title: "10 Easy Recipes for Beginners",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Food",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      author: {
        name: "Maria Garcia",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        date: "May 10, 2025",
      },
    },
    {
      id: 3,
      title: "5 Morning Habits for Better Health",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Health",
      imageUrl: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
      author: {
        name: "James Wilson",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        date: "May 8, 2025",
      },
    },
  ];
  return (
    <div className="min-h-screen">
      <HeroSection
        title={posts.title}
        description={posts.description}
        label={posts.label!}
      />
      <RecentPosts recentPosts={recentPosts} />
    </div>
  );
}
