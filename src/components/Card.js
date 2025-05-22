// import React from "react";

// const Card = ({ title, body }) => (
//   <div className="border border-gray-300 shadow-md rounded p-4">
//     <h2 className="text-xl font-semibold mb-2">{title}</h2>
//     <p>{body}</p>
//   </div>
// );

// export default Card;

import React, { useState } from "react";

const Card = ({ post, allPosts }) => {
  const [currentIndex, setCurrentIndex] = useState(post.id - 1);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % allPosts.length;
    setCurrentIndex(nextIndex);
  };

  const currentPost = allPosts[currentIndex];

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border border-gray-300 shadow-md rounded p-4 bg-white transform hover:scale-[1.02] transition-transform duration-300"
    >
      <h2 className="text-xl font-semibold mb-2 break-words">{currentPost.title}</h2>
      <p className="text-sm text-gray-700 break-words">{currentPost.body}</p>
    </div>
  );
};

export default Card;