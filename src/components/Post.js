// src/components/Post.jsx

import React, { useState } from 'react';

export default function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState(post.comments);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const addComment = (e) => {
    e.preventDefault();
    if (commentText.trim() === '') return;

    const newComment = {
      id: comments.length + 1,
      username: 'CurrentUser', // Replace with actual logged-in user
      text: commentText,
    };

    setComments([...comments, newComment]);
    setCommentText('');
  };

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg border border-gray-700 rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-2xl">
      {/* Post Header */}
      <div className="flex items-center px-4 py-2">
        <img
          src={post.avatar}
          alt={post.username}
          className="w-12 h-12 rounded-full object-cover border-2 border-white"
        />
        <span className="ml-3 font-orbitron text-white">{post.username}</span>
      </div>

      {/* Post Image */}
      <img src={post.image} alt="Post" className="w-full h-80 object-cover" />

      {/* Post Actions */}
      <div className="px-4 py-2 flex items-center">
        <button
          onClick={handleLike}
          className="flex items-center text-red-500 font-orbitron focus:outline-none"
        >
          ❤️ Like <span className="ml-1">{likes}</span>
        </button>
        <button
          onClick={toggleComments}
          className="ml-4 flex items-center text-blue-500 font-orbitron focus:outline-none"
        >
          💬 Comments <span className="ml-1">{comments.length}</span>
        </button>
      </div>

      {/* Post Caption */}
      <div className="px-4 py-2">
        <p className="text-white font-orbitron">{post.caption}</p>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="px-4 py-2">
          <div className="max-h-40 overflow-y-auto mb-4">
            {comments.map((comment) => (
              <div key={comment.id} className="mb-2">
                <span className="font-orbitron text-white">{comment.username}:</span>{' '}
                <span className="text-gray-200 font-orbitron">{comment.text}</span>
              </div>
            ))}
          </div>
          {/* Add Comment Form */}
          <form onSubmit={addComment} className="flex font-orbitron">
            <input
              type="text"
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-700 rounded-l-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-4 font-orbitron py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
            >
              Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
