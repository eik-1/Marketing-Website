import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const GetInTouchButton = ({
  href = "/get-audit",
  buttonStyle,
  label = "GET IN TOUCH",
  icon: Icon = ArrowUpRight,
}) => {
  return (
    <motion.a
      href={href}
      className={buttonStyle}
      whileHover="hover"
      whileTap="tap"
      variants={{
        tap: { scale: 0.95 },
      }}
    >
      <motion.span className="flex items-center justify-center gap-2 relative z-10">
        {label} <Icon />
      </motion.span>
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-blue-500 origin-left"
        initial={{ scaleX: 0 }}
        variants={{
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

export default GetInTouchButton;
