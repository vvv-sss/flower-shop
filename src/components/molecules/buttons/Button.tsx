import React from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "@atoms";

const styles = {
  base: {
    all: [
      "box-border w-full h-[48px] md:h-[56px] md:min-w-[175px] p-0 rounded-none outline-none",
      "flex flex-wrap self-start justify-center content-center",
      "text-button",
      "focus:outline-none",
      "transition-all",
    ],
    text: "text-button",
  },
  primary: {
    all: [
      "border-none",
      "text-brand-white bg-brand-black",
      "hover:bg-brand-dark-gray",
      "disabled:bg-brand-light-gray",
    ],
    text: "text-brand-white bg-brand-black",
  },
  secondary: {
    all: [
      "border border-solid border-brand-black",
      "text-brand-black bg-brand-white",
      "hover:border-brand-black hover:text-brand-white hover:bg-brand-black",
      "disabled:text-brand-gray disabled:bg-brand-white disabled:border-brand-light-gray",
    ],
    text: "text-brand-black bg-brand-white",
  },
  tertiary: {
    all: [
      "border border-solid border-brand-white",
      "text-brand-white bg-brand-black/0",
      "hover:border-brand-white hover:bg-brand-white hover:text-brand-black",
      "disabled:text-brand-gray disabled:bg-brand-black/0 disabled:border-brand-light-gray",
    ],
    text: "text-brand-white bg-brand-black/0",
  },
};

type Props = {
  title: string;
  handleButtonClick: () => void;
  type?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
};

export const Button: React.FC<Props> = ({
  title,
  handleButtonClick,
  type = "primary",
  disabled = false,
}) => {
  const classes = styles.base.all.concat(styles[type].all).join(" ");

  return (
    <motion.button
      className={classes}
      whileTap={{ scale: 0.9 }}
      disabled={disabled}
      onClick={handleButtonClick}
    >
      <AnimatedText
        text={title}
        visibleTextStyles={styles[type].text}
        hiddenTextStyles={
          type === "tertiary" ? styles.secondary.text : styles.primary.text
        }
      />
    </motion.button>
  );
};
