import { motion } from "framer-motion";

interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
}

const AnimatedTitle = ({ title, containerClass = "" }: AnimatedTitleProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`text-center text-4xl font-bold md:text-6xl ${containerClass}`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};

export default AnimatedTitle;
