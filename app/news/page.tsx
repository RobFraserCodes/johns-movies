'use client'

import React, { useEffect, useState } from 'react';
import { Post } from '@prisma/client';

interface PostItemProps {
    post: Pick<Post, 'id' | 'title' | 'content'>;
}

export default function NewsPage({post}: PostItemProps) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
}
