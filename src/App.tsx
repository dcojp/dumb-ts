import React from 'react';
import './App.css';
import PostForm from './PostForm';
import Timeline from './Timeline';

import type { Post, PostInput } from './types/post';

function App() {
  // ページを読み込んだ時にローカルストレージから投稿を読み込む
  const [posts, setPosts] = React.useState<Post[]>(() => {
    const savedPosts = localStorage.getItem('miniSocialAppPosts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  // postsが更新されるたびにローカルストレージに保存する
  React.useEffect(() => {
    localStorage.setItem('miniSocialAppPosts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost: PostInput) => {
    setPosts(prevPosts => [
      { ...newPost, id: Date.now(), timestamp: new Date() } as Post,
      ...prevPosts
    ]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>ささやかな言葉の広場</h1>
        <p className="app-subtitle">～いいねのない、静かな場所～</p>
      </header>
      <PostForm onAddPost={addPost} />
      <Timeline posts={posts} />
      <footer className="app-footer">
        <p>あなたの手で育む、小さな言葉の庭。</p>
      </footer>
    </div>
  );
}

export default App;