import React from 'react';

import PostItem from './PostItem';
import type { Post } from './types/post';

type TimelineProps = {
  posts: Post[]
}

function Timeline({ posts }: TimelineProps) {
  if (posts.length === 0) {
    return <p className="timeline-empty">まだ誰も、心の言葉を放っていませんね…静かな夜明けを待つようです。</p>;
  }
  return (
    <section className="timeline">
      <h2 className="timeline-title">みんなの言葉のささやき</h2>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </section>
  );
}

export default Timeline;