import React from 'react';

import { Post } from './types/post';

type PostItemProps = {
  post: Post
}

function PostItem({ post }: PostItemProps) {
  return (
    <article className="post-item">
      <header className="post-header">
        <h3 className="post-author">{post.author || "名もなき旅人"}</h3>
        <time dateTime={post.timestamp.toISOString()} className="post-timestamp">
          {new Date(post.timestamp).toLocaleString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
        </time>
      </header>
      <p className="post-content">{
        // 改行を<br />に変換して表示するために
        post.content.split('\n').map((item, key) => (
          <React.Fragment key={key}>
            {item}
            <br />
          </React.Fragment>
        ))
      }</p>
    </article>
  );
}

export default PostItem;