import React, {useState} from 'react';
import {motion} from 'framer-motion';

const styles = {
  visibleText: 'text-body text-brand-black',
  hiddenText: 'text-body text-brand-gray',
};

type Props = {
  text: string;
  justifyText?: 'start' | 'center' | 'end';
  visibleTextStyles?: string;
  hiddenTextStyles?: string;
};

export const AnimatedText: React.FC<Props> = ({
  text,
  justifyText = 'center',
  visibleTextStyles,
  hiddenTextStyles,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className={`w-full h-full flex flex-wrap justify-${justifyText} content-center overflow-hidden cursor-pointer`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <div className="relative">
        <motion.span
          initial={{y: '0%', opacity: 1}}
          animate={{y: isHover ? '-100%' : '0%', opacity: isHover ? 0 : 1}}
          className={`block bg-white/0 ${
            visibleTextStyles ? visibleTextStyles : styles.visibleText
          }`}>
          {text}
        </motion.span>
        <motion.span
          className={`block bg-white/0 absolute ${
            hiddenTextStyles ? hiddenTextStyles : styles.hiddenText
          }`}
          initial={{y: '100%', opacity: 0}}
          animate={{y: isHover ? '-100%' : '0%', opacity: isHover ? 1 : 0}}>
          {text}
        </motion.span>
      </div>
    </div>
  );
};
