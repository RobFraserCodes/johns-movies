import React from 'react';
import { Post } from '@prisma/client';

interface NewsPageProps {
  posts: Post[];
}

const NewsPage: React.FC<NewsPageProps> = ({ posts }) => {
  return (
    <div>
      <h1>News</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Author: {post.author?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;