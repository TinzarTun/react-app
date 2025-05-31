import AboutAuthor from "./AboutAuthor";
import AuthorPosts from "./AuthorPosts";
import FeaturedPostSidebar from "./FeaturedPostSidebar";
import NewsletterSidebar from "./NewsletterSidebar";
import PopularCategories from "./PopularCategories";

export default function ProfileContent() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* <!-- Author's Posts --> */}
        <AuthorPosts />

        {/* <!-- Sidebar --> */}
        <div className="lg:w-1/3 space-y-8">
          {/* <!-- About the Author --> */}
          <AboutAuthor />

          {/* <!-- Popular Categories --> */}
          <PopularCategories />

          {/* <!-- Featured Post --> */}
          <FeaturedPostSidebar />

          {/* <!-- Newsletter --> */}
          <NewsletterSidebar />
        </div>
      </div>
    </div>
  );
}
