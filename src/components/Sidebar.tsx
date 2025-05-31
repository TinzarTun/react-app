import CategoriesSidebar from "./CategoriesSidebar";
import MostReadPosts from "./MostReadPosts";
import RecentPostsSidebar from "./RecentPostsSidebar";
import Search from "./Search";

export default function Sidebar() {
  return (
    // <!-- Sidebar -->
    <div className="lg:w-1/3 space-y-8">
      {/* <!-- Search --> */}
      <Search />
    
      {/* <!-- Recent Posts --> */}
      <RecentPostsSidebar />
    
      {/* <!-- Most Read Posts --> */}
      <MostReadPosts />
    
      {/* <!-- Categories --> */}
      <CategoriesSidebar />
    </div>
  );
}
