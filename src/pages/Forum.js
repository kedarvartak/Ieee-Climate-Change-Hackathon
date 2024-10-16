// src/pages/Forum.jsx

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import NewPostForm from '../components/NewPostForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Forum() {
  // Sample initial posts data with Unsplash images
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'EcoWarrior',
      avatar: 'https://i.pravatar.cc/150?img=1',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvcmVzdCUyMHBsYW50aW5nfGVufDB8fHx8MTYwOTk0MzA2Mw&ixlib=rb-1.2.1&q=80&w=800',
      caption: 'Planting trees to combat deforestation! 🌳 #ClimateAction',
      likes: 120,
      comments: [
        { id: 1, username: 'GreenThumb', text: 'Great initiative!' },
        { id: 2, username: 'NatureLover', text: 'Keep it up!' },
      ],
    },
    {
      id: 2,
      username: 'GreenGenius',
      avatar: 'https://i.pravatar.cc/150?img=2',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvcmVzdCUyMHBsYW50aW5nfGVufDB8fHx8MTYwOTk0MzA2Mw&ixlib=rb-1.2.1&q=80&w=800',
      caption: 'Reducing plastic usage is crucial for our oceans. 🌊 #SaveTheSea',
      likes: 95,
      comments: [
        { id: 1, username: 'OceanFriend', text: 'Absolutely agree!' },
        { id: 2, username: 'PlasticFree', text: 'Every bit helps.' },
      ],
    },
    // Add more initial posts as needed
  ]);

  // Function to add a new post
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample stories data
  const stories = [
    { id: 1, username: 'EcoWarrior', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, username: 'GreenGenius', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, username: 'NatureLover', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, username: 'OceanFriend', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, username: 'PlasticFree', avatar: 'https://i.pravatar.cc/150?img=5' },
    // Add more stories as needed
  ];

  return (
    <div className="bg-black min-h-screen text-white relative">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      {/* Stories Section */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex space-x-4 overflow-x-auto">
          {stories.map((story) => (
            <div key={story.id} className="flex-shrink-0 text-center">
              <img
                src={story.avatar}
                alt={story.username}
                className="w-16 h-16 rounded-full border-2 border-green-500 object-cover"
              />
              <p className="text-sm font-orbitron mt-1">{story.username}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Posts Feed - Vertical */}
      <div className="container mx-auto px-4 py-4">
        <div className="space-y-6">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Add Post Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-white bg-opacity-20 backdrop-blur-lg border border-white text-white h-16 w-16 flex items-center justify-center rounded-full shadow-lg focus:outline-none transition"
        aria-label="Add Post"
        >
        <FontAwesomeIcon icon={faPlus} size="lg" />
      </button>

      {/* Modal for Adding Post */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg border border-gray-700 rounded-lg p-6 w-11/12 max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-caramel text-white">Add New Post</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white text-2xl font-bold focus:outline-none"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <NewPostForm addPost={addPost} closeModal={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
