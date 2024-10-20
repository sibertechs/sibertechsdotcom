import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];

  return (
    <footer className="py-16 text-white bg-gray-800">
      <div className="container px-4 mx-auto md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between pt-6 border-t border-gray-700 md:flex-row md:items-start">
          {/* Logo and Description */}
          <div className="flex flex-col w-full mb-8 md:w-1/3 md:mb-0">
            <a href="#" className="flex items-center space-x-3">
              <h2 className="px-4 py-2 text-3xl text-white bg-indigo-600 rounded-full">
                S
              </h2>
              <span className="text-2xl font-semibold text-indigo-600">Siber Techs</span>
            </a>
            <p className="mt-4 text-gray-400">
              Take your IT skills to the next level with our comprehensive program designed to help you reach your professional goals.
            </p>
            <div className="flex gap-4 mt-6">
              {iconsTab.map(({ icon }, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 text-2xl transition-colors bg-gray-700 rounded-full hover:bg-indigo-600 hover:text-white"
                  aria-label="Social media"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Privacy Policy | © {new Date().getFullYear()} Siber Techs <br />
              Design by{" "}
              <a
                href="http://localhost:5173/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-600"
              >
                Tiroug Boadzie Ebenezer
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col w-full gap-8 md:flex-row md:gap-16 md:w-2/3">
            {/* Services */}
            <div className="flex flex-col">
              <p className="mb-4 text-lg font-semibold text-indigo-400">Our Services</p>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">Web Development</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">Mobile Apps Development</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">Graphic Designs</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">AWS</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">Video Editing</a>
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div className="flex flex-col">
              <p className="mb-4 text-lg font-semibold text-indigo-400">Tools</p>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">Android Studio</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">Blender</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">Photoshop</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">Adobe Illustrator</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">Adobe Express</a>
                </li>
              </ul>
            </div>

            {/* Programming Languages */}
            <div className="flex flex-col">
              <p className="mb-4 text-lg font-semibold text-indigo-400">Programming Languages</p>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">PHP</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">JavaScript</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">C++</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">Python</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
