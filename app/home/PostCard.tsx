import React from "react";
import type { Post } from "@prisma/client";

type Props = {
  post: Post;
  className?: string;
};

const PostCard = ({ post, className }: Props) => {
  return (
    <div
      className={`${className} p-4 rounded border-2 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]`}
    >
      <h3 className="text-2xl sm:text-3xl mb-3">{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default PostCard;
