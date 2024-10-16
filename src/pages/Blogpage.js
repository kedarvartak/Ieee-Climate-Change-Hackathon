// src/pages/Blogpage.jsx

import React from 'react';
import Navbar from '../components/Navbar';

export default function Blogpage() {
  // Sample blog data with placeholder images
  const blogs = [
    {
      id: 1,
      title: 'The Impact of Global Warming on Polar Bears',
      author: 'Jane Doe',
      date: 'October 15, 2023',
      excerpt:
        'As the Arctic ice melts, polar bears are struggling to survive in their changing habitat...',
      image: 'https://picsum.photos/id/1011/600/400', // Placeholder image
    },
    {
      id: 2,
      title: 'Renewable Energy Sources: The Future is Now',
      author: 'John Smith',
      date: 'October 10, 2023',
      excerpt:
        'Exploring the latest advancements in renewable energy technologies and their impact on reducing carbon emissions...',
      image: 'https://picsum.photos/id/1003/600/400', // Placeholder image
    },
    {
      id: 3,
      title: 'Deforestation and Its Global Impact',
      author: 'Emily Johnson',
      date: 'October 5, 2023',
      excerpt:
        'An in-depth look at how deforestation is accelerating climate change and what can be done to stop it...',
      image: 'https://picsum.photos/id/1015/600/400', // Placeholder image
    },
    // Add more blog entries as needed
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="flex-grow container mx-auto px-4 py-8">
        {/* Page Header */}
        <h1 className="text-7xl mt-28 md:mt-16 xl:text-[130px] 2xl:text-[150px] mb-20 text-center font-caramel text-white font-bold m-0 leading-none">
          Climate Change Blog
        </h1>

        {/* Blog List */}
        <div className="space-y-12">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col md:flex-row bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Blog Image */}
              <div className="md:w-1/3">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              {/* Blog Content */}
              <div className="flex flex-col p-6 md:w-2/3">
                <h2 className="text-2xl sm:text-3xl font-orbitron mb-2 text-red-600">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-400 mb-4 font-orbitron">
                  By {blog.author} | {blog.date}
                </p>
                <p className="text-gray-200 flex-grow font-orbitron">
                  {blog.excerpt}
                </p>
                <button className="mt-4 self-start px-6 py-2 bg-red-600 rounded-full hover:bg-red-500 transition font-orbitron">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}
