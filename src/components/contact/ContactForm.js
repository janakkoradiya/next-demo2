import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { MdFacebook } from "react-icons/md";
import { PiLinkedinLogoFill } from "react-icons/pi";

const socialMediaLinks = [
  {
    icon: <MdFacebook />,
    href: "https://www.facebook.com/",
  },
  {
    icon: <RiTwitterXLine />,
    href: "https://twitter.com/",
  },
  {
    icon: <AiFillInstagram />,
    href: "https://www.instagram.com/",
  },
  {
    icon: <PiLinkedinLogoFill />,
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
    <div className="py-10 mb-20 px-4 md:px-10 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Section */}
        <div className="w-full md:w-[45%]">
          <h2 className="text-3xl md:text-[44px] font-medium text-primary">
            Get In Touch With Us
          </h2>
          <p className="text-lg mt-5">
            If you have any questions about our product, please contact us &
            we'll schedule a call soon!
          </p>
          {/* Social Media Icons */}
          <div className="flex items-center mt-7">
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                placeholder="Your name..."
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                placeholder="Your email..."
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-1 block w-full pl-3 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
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
