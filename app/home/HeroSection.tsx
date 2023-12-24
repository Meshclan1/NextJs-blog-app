import React from "react";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section>
      <Image
        src="/VideoCall.png"
        width={300}
        height={300}
        alt="Person video call"
      />
    </section>
  );
};

export default HeroSection;
