import ProfileContent from "../components/ProfileContent";
import ProfileHeader from "../components/ProfileHeader";

export default function Profile() {
  return (
    <div className="min-h-screen">
      {/* <!-- Author Profile Header --> */}
      <ProfileHeader />

      {/* <!-- Main Content --> */}
      <ProfileContent />
    </div>
  );
}
