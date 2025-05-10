import React, { useState } from 'react';

import type { PostInput } from './types/post';

type PostFormProps = {
  onAddPost: (newPost: PostInput) => any
}

function PostForm({ onAddPost }: PostFormProps) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const MAX_CHARS = 280;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) {
      alert("お名前とつぶやきの両方を入力してくださいね。");
      return;
    }
    onAddPost({ author, content });
    // 投稿後は名前を保持し、内容のみクリアするのも一興かもしれません
    // setAuthor(''); 
    setContent('');
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= MAX_CHARS) {
      setContent(e.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <div className="form-group">
        <label htmlFor="author">あなたのお名前：</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="名もなき旅人"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">心のつぶやき (残り {MAX_CHARS - content.length} 字)：</label>
        <textarea
          id="content"
          value={content}
          onChange={handleChangeContent}
          maxLength={MAX_CHARS}
          required
          rows={5}
          placeholder="今、どんなことを感じていますか…？"
        />
      </div>
      <button type="submit" className="submit-button">言葉を放つ</button>
    </form>
  );
}

export default PostForm;