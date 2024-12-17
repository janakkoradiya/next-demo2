import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaShare,
  FaEdit,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdShareAlt } from "react-icons/io";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const Sidebar = ({ isOpen, onClose }) => {
  const router = useRouter();
  const menuItems = [
    { icon: <FaEdit />, label: "Edit Profile", href: "/edit-profile" },
    { icon: <FaTachometerAlt />, label: "Dashboard", href: "/dashboard" },
    { icon: <FaChartLine />, label: "Usage", href: "/usage" },
    { icon: <FaCog />, label: "Settings", href: "/settings" },
  ];

  const handleLogout = () => {
    toast.success("Logout successfully")
    router.push('./home')
  }

  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-primary/10  transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out z-30`}
    >
      <div className="flex flex-col h-full justify-between p-4">
        <div>
          <div className="mb-8 md:mb-3 text-xl font-bold text-primary"></div>
          <nav>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <button className="flex items-center space-x-3 p-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Full Stack Developer | AI Enthusiast",
    social: {
      twitter: "johndoe",
      linkedin: "johndoe",
      github: "johndoe",
    },
    chatbots: 3,
    conversations: 156,
    followers: 1234,
    following: 567,
  });

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Profile link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Hamburger Menu Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-5 z-40 p-2 rounded-lg bg-white shadow-lg"
      >
        <RiMenu2Fill className="text-primary" />
      </button>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 md:ml-64 md:py-8 px-0 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-full mx-auto"
        >
          <div className="bg-secondary/30 md:rounded-3xl overflow-hidden">
            {/* Profile Header */}
            <div className="relative h-32 bg-primary">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShare}
                className="absolute top-4 right-4 flex items-center space-x-2 p-2 bg-white backdrop-blur-sm text-primary rounded-lg hover:bg-white/20 hover:text-white"
              >
                <IoMdShareAlt className="scale-105" />
              </motion.button>
            </div>

            <div className="relative px-4 sm:px-8 pb-8">
              <div className="flex flex-col items-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white/50 shadow-lg -mt-12 sm:-mt-16"
                />

                <h1 className="mt-4 text-xl sm:text-2xl font-bold text-black/90 text-center">
                  {user.name}
                </h1>
                <p className="text-gray-600 font-medium text-center text-sm sm:text-base">
                  {user.bio}
                </p>
                <p className="text-gray-500 mt-1 text-sm sm:text-base">
                  {user.email}
                </p>

                {/* Stats Grid */}
                <div className="mt-8 w-full grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                  {[
                    { label: "Chatbots", value: user.chatbots },
                    { label: "Conversations", value: user.conversations },
                    { label: "Followers", value: user.followers },
                    { label: "Following", value: user.following },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-5 rounded-lg bg-secondary/50"
                    >
                      <p className="text-lg sm:text-2xl font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-6 sm:mt-8 flex space-x-4">
                  {[
                    {
                      icon: <FaTwitter />,
                      url: `https://twitter.com/${user.social.twitter}`,
                    },
                    {
                      icon: <FaLinkedin />,
                      url: `https://linkedin.com/in/${user.social.linkedin}`,
                    },
                    {
                      icon: <FaGithub />,
                      url: `https://github.com/${user.social.github}`,
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-primary/60 hover:text-primary text-lg sm:text-xl transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
