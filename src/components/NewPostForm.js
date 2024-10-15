// src/components/NewPostForm.jsx

import React, { useState } from 'react';

export default function NewPostForm({ addPost, closeModal }) {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !avatar || !image || !caption) {
      alert('Please fill in all fields.');
      return;
    }

    const newPost = {
      id: Date.now(),
      username,
      avatar,
      image,
      caption,
      likes: 0,
      comments: [],
    };

    addPost(newPost);
    closeModal();

    // Reset form fields
    setUsername('');
    setAvatar('');
    setImage('');
    setCaption('');
  };

  return (
    <div className="bg-white bg-opacity-20 font-orbitron backdrop-blur-lg border border-gray-700 rounded-lg shadow-md p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div>
          <label className="block text-gray-200 font-orbitron">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your name"
            required
          />
        </div>

        {/* Avatar URL */}
        <div>
          <label className="block text-gray-200 font-orbitron">Avatar URL</label>
          <input
            type="url"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="https://example.com/avatar.jpg"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-200 font-orbitron">Image URL</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        {/* Caption */}
        <div>
          <label className="block text-gray-200 font-orbitron">Caption</label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Describe your idea..."
            rows="3"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
