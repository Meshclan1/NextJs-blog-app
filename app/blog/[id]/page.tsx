import React from "react";
import { prisma } from "@/lib/prisma";

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return <div>Page: {params.id}</div>;
};

export default page;
