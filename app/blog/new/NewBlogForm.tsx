import React from "react";

type Props = {};

const NewBlogForm = (props: Props) => {
  return (
    <div>
      <form>
        <input type="text" name="title" />
        <textarea name="content" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewBlogForm;
