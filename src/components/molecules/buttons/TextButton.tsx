import { AnimatedText } from "@atoms";
import React from "react";

type Props = {
  title: string;
  justifyTitle?: "start" | "center" | "end";
  visibleTextStyles?: string;
  hiddenTextStyles?: string;
  handleButtonClick: () => void;
};

export const TextButton: React.FC<Props> = ({
  title,
  justifyTitle = "center",
  visibleTextStyles,
  hiddenTextStyles,
  handleButtonClick,
}) => {
  return (
    <button
      className="border-none bg-black/0 p-0 outline-none focus:outline-none"
      onClick={handleButtonClick}
    >
      <AnimatedText
        text={title}
        justifyText={justifyTitle}
        visibleTextStyles={
          visibleTextStyles ?? "text-heading-6 text-brand-black"
        }
        hiddenTextStyles={hiddenTextStyles ?? "text-heading-6 text-brand-gray"}
      />
    </button>
  );
};
