import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import PostContent from "../components/PostContent";

export default function PostDetail() {
  const { id } = useParams();
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* <!-- Post Content --> */}
          <PostContent id={id} />

          {/* <!-- Sidebar --> */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
