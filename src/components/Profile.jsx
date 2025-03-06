const Profile = ({ name, email }) => {
  return (
    <div className="border p-4 shadow-md rounded-md bg-gray-100 text-center">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default Profile;
