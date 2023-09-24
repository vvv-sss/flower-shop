import { AnimatedText } from "@atoms";
import React from "react";

type Props = {
  title: string;
  href: string;
};

export const NavLink: React.FC<Props> = ({ title, href }) => {
  return (
    <a href={href}>
      <AnimatedText text={title} />
    </a>
  );
};
