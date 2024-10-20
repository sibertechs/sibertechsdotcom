import React from 'react';
import { FaArrowLeft, FaArrowRight, FaCloud, FaLock, FaCode, FaMobileAlt, FaDatabase, FaRobot } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";

const blogPosts = [  // Corrected: Added "="
    {
        
    },
    // You can add more posts here
];

function Sidebar() {
  return (
    <div>
      <aside className="p-6 bg-gray-100 rounded-lg shadow-lg lg:w-64 lg:sticky lg:top-24">
        <h3 className="mb-4 text-xl font-semibold">Categories</h3>
        <ul>
          <li className="flex items-center mb-3">
            <FaCloud className="mr-2 text-indigo-600" />
            <a href="/category/cloud-computing" className="text-gray-700 hover:text-indigo-600">Cloud Computing</a>
          </li>
          <li className="flex items-center mb-3">
            <FaLock className="mr-2 text-indigo-600" />
            <a href="/category/cybersecurity" className="text-gray-700 hover:text-indigo-600">Cybersecurity</a>
          </li>
          <li className="flex items-center mb-3">
            <FaCode className="mr-2 text-indigo-600" />
            <a href="/category/software-development" className="text-gray-700 hover:text-indigo-600">Software Development</a>
          </li>
          <li className="flex items-center mb-3">
            <AiOutlineCloudServer className="mr-2 text-indigo-600" />
            <a href="/category/devops" className="text-gray-700 hover:text-indigo-600">DevOps</a>
          </li>
          <li className="flex items-center mb-3">
            <FaMobileAlt className="mr-2 text-indigo-600" />
            <a href="/category/iot" className="text-gray-700 hover:text-indigo-600">IoT</a>
          </li>
          <li className="flex items-center mb-3">
            <FaRobot className="mr-2 text-indigo-600" />
            <a href="/category/ai" className="text-gray-700 hover:text-indigo-600">Artificial Intelligence</a>
          </li>
          <li className="flex items-center mb-3">
            <FaDatabase className="mr-2 text-indigo-600" />
            <a href="/category/data-science" className="text-gray-700 hover:text-indigo-600">Data Science</a>
          </li>
        </ul>

        <h3 className="mt-6 mb-4 text-xl font-semibold">Recent Posts</h3>
        <ul>
          {blogPosts.slice(0, 5).map((post, index) => (
            <li key={index} className="mb-2">
              <a href={post.link} className="text-gray-700 hover:text-indigo-600">{post.title}</a>
            </li>
          ))}
        </ul>

        <h3 className="mt-6 mb-4 text-xl font-semibold">Tags</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {blogPosts.flatMap(post => post.tags).map((tag, index) => (
            <span key={index} className="px-2 py-1 text-sm text-indigo-800 bg-indigo-200 rounded-full cursor-pointer hover:bg-indigo-300">{tag}</span>
          ))}
        </div>

        <h3 className="mt-6 mb-4 text-xl font-semibold">Search</h3>
        <input 
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-500"
        />

        {/* Featured Post Section */}
        <h3 className="mt-6 mb-4 text-xl font-semibold">Featured Post</h3>
        {blogPosts[0] && (
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-auto mb-2 rounded-md"/>
            <h4 className="font-semibold">{blogPosts[0].title}</h4>
            <p>{blogPosts[0].excerpt}</p>
            <a href={blogPosts[0].link} className="text-indigo-600 hover:underline">Read More</a>
          </div>
        )}
      </aside>
    </div>
  );
}

export default Sidebar;
