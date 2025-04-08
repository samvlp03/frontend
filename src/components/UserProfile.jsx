import { useContext } from "react";
import { Pencil, Mail } from "lucide-react";
import { FaUser, FaLock, FaPhone, FaBriefcase, FaVenusMars } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import PropTypes from "prop-types";

const UserProfile = () => {
  const {user} = useAuth();
  console.log(user);

  return (
    <div className="max-w-4xl min-h-screen mx-auto p-6 bg-white/18 shadow-lg rounded-lg my-12 border border-white/80 backdrop-blur ">
      <div className="flex items-center gap-6">
        {/* Profile Image */}
        <div className="relative w-32 h-32 text-black">
          <img src={"307ce493-b254-4b2d-8ba4-d12c080d6651.jpg"} 
          alt="Profile" 
          className="w-32 h-32 rounded-full object-cover shadow-md" />
        </div>

        {/* User Details */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-200 ">{user.username}</h1>
          <p className="text-blue-500 flex items-center gap-1">
            <Mail size={16} /> {user.email}
          </p>
          <p className="">Age: {user?.age || "34"} years</p>
          <p className="">{user?.gender || "Female"}</p>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-6 text-white">
        <h2 className="text-lg font-semibold border-b pb-2 ">Profile</h2>
        <div className="mt-4 space-y-3">
          <ProfileField icon={<FaUser size={16}/>} label="Username" value={user.username} />
          {/* <ProfileField icon={<Mail size={16}/>} label="Email" value={user.email} /> */}
          <ProfileField icon={<FaLock size={16}/>} label="Password" value="********" />
          <ProfileField icon={<FaPhone size={16}/>} label="Contact Number" value={user?.phone} />
          <ProfileField icon={<FaBriefcase size={16}/>} label="Profession" value={user?.role} />
          <ProfileField icon={<FaVenusMars size={16}/>} label="Gender" value={user?.gender} />
        </div>
      </div>
    </div>
  );
};



const ProfileField = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 border p-2 rounded-lg shadow-sm">
    <div className="text-white">{icon}</div>
    <input
      type="text"
      value={value}
      readOnly
      className="w-full bg-transparent outline-none"
    />
  </div>
);

ProfileField.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default UserProfile;

