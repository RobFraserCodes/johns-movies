'use client'

import React, { useEffect, useState } from 'react';
import { Post } from '@prisma/client';

interface NewsPageProps {
  posts: Pick<Post, 'id' | 'title' | 'content'>[];
}

export default function NewsPage({ posts: initialPosts }: NewsPageProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>News</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {/* Uncomment this if you include author information in the posts */}
          {/* <p>Author: {post.author?.name}</p> */}
        </div>
      ))}
    </div>
  );
}
