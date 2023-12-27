"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { createPost } from "@/app/actions/publishPost";

type Props = {};

const NewBlogForm = (props: Props) => {
  const { data: session, status } = useSession();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!session) return <div> You must be signed in to post!</div>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = session?.user?.id;

    if (!userId && status !== "loading") return;
    try {
      const post = await createPost({ title, content, authorId: userId });
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (submitted) return <div>Post Submitted!</div>;

  return (
    <div className="min-h-[calc(100vh-130px)] py-2 container flex flex-col mt-12">
      <form
        className="flex flex-col flex-1 items-stretch justify-center h-full text-left"
        onSubmit={handleSubmit}
      >
        <input
          className="text-6xl focus-visible:outline-none shadow-[0px_0.25rem_0px_0px_rgba(0,0,0,1)]"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          name="title"
        />
        <textarea
          className="flex-1 focus-visible:outline-none text-4xl mt-8"
          value={content}
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
          name="content"
        />
        <button
          className="w-fit-content text-white bg-indigo-400 px-4 py-2 sm:px-6 sm:py-4 mt-6 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NewBlogForm;
