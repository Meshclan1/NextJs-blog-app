"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { createPost } from "@/app/actions/publishPost";

type Props = {};

const NewBlogForm = (props: Props) => {
  const { data: session } = useSession();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!session) return <div> You must be signed in to post!</div>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = session?.user?.id;

    if (!userId) return;
    try {
      const post = await createPost({ title, content, authorId: userId });
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (submitted) return <div>Post Submitted!</div>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="content"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewBlogForm;
