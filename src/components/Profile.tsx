
const Profile = () => {
  return (
    <div className="profile">
      <img
        src="/images/profile.jpg"
        alt="Profile"
        className="rounded-full w-32 h-32"
      />
      <h1 className="text-xl font-bold mt-4">Your Name</h1>
      <p className="text-gray-600">Your short bio or description</p>
    </div>
  );
};

export default Profile;
