import AuthorBio from "./AuthorBio";
import Breadcrumbs from "./Breadcrumbs";
import Comments from "./Comments";
import PostContentDetail from "./PostContentDetail";
import PostHeader from "./PostHeader";
import RelatedPosts from "./RelatedPosts";
import ShareAndReactions from "./ShareAndReactions";

export default function PostContent({ id }: { id: string | undefined }) {
  return (
    // <!-- Blog Post Content -->
    <div className="lg:w-2/3">
      {/* <!-- Breadcrumbs --> */}
      <Breadcrumbs id={id} />

      {/* <!-- Post Header --> */}
      <PostHeader />

      {/* <!-- Post Content --> */}
      <PostContentDetail />

      {/* <!-- Share and Reactions --> */}
      <ShareAndReactions />

      {/* <!-- Author Bio --> */}
      <AuthorBio />

      {/* <!-- Comments Section --> */}
      <Comments />

      {/* <!-- Related Posts --> */}
      <RelatedPosts />
    </div>
  );
}
