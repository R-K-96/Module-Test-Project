import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className='detail-container'>
      <p>Details Page For Post With ID {post.id}</p>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <p>User ID : {post.userId}</p>
      <p>Title : {post.title}</p>
      <p>Body : {post.body}</p>
      
      
    </div>
  );
};

export default Detail;
