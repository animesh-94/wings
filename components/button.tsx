import { motion } from 'framer-motion';

interface ButtonProps {
  id: string;
  title: string;
  containerClass?: string;
}

const Button = ({ id, title, containerClass = '' }: ButtonProps) => {
  return (
    <motion.button
      id={id}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-full bg-violet-500 px-6 py-2 font-medium text-white transition-colors hover:bg-violet-600 ${containerClass}`}
    >
      {title}
    </motion.button>
  );
};

export default Button;
