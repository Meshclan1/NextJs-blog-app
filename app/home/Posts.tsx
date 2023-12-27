import { PrismaClient } from "@prisma/client";
import React from "react";
import PostCard from "./PostCard";

const prisma = new PrismaClient();

type Props = {};

const Posts = async (props: Props) => {
  const posts = await prisma.post.findMany();

  const bgClasses = [
    "bg-pink-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-orange-500",
    "bg-white-500",
    "bg-emerald-500",
    "bg-lilac-500",
  ];
  return (
    <div>
      <h2 className="text-4xl text-center mt-6">Trending:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} className={bgClasses[index]} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
