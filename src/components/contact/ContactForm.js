import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { RiInstagramLine } from "react-icons/ri";

const socialMediaLinks = [
  {
    icon: <RiFacebookCircleLine />,
    href: "https://www.facebook.com/",
  },
  {
    icon: <RiTwitterXFill />,
    href: "https://twitter.com/",
  },
  {
    icon: <RiInstagramLine />,
    href: "https://www.instagram.com/",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/",
  },
];

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    // Add your form submission logic here
    console.log(name, email, message);
  };

  return (
    <div className="py-10 my-28 mt- px-4 md:px-10 lg:px-24">
      <div className="flex flex-col justify-between items-start md:items-center gap-10">
        {/* Left Section */}
        <div className="w-full md:w-[45%] mb-10">
          <h2 className="text-3xl md:text-[44px] text-center font-medium text-primary">
            Get In Touch With Us
          </h2>
          <p className="text-lg mt-5 text-center">
            If you have any questions about our product, please contact us &
            we'll schedule a call soon!
          </p>
          {/* Social Media Icons */}
          <div className="flex items-center justify-center mt-7 mx-auto">
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 text-[25px] text-primary hover:text-primary/80 hover:scale-105 transition-all duration-200 ease-in-out"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[50%]">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-md font-medium text-black/60"
              >
                Name
              </label>
              <input
                placeholder="Your name..."
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full pl-3 pr-3 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary placeholder:text-black/30 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium text-black/60"
              >
                Email
              </label>
              <input
                placeholder="Your email..."
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full pl-3 pr-3 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary placeholder:text-black/30 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-md font-medium text-black/60"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-1 block w-full pl-3 pr-3 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary placeholder:text-black/30 sm:text-sm"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-[18px] font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
