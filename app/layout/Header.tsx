import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="border-b flex justify-between">
      <div className="text-4xl px-2 py-4">LOGO</div>
      <button className="text-white bg-black px-4 py-4">Sign In</button>
    </div>
  );
};

export default Header;
