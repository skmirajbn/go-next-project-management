import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
type TapProps = {
  children: React.ReactNode;
  className?: string;
};
export const Tap: React.FC<TapProps> = ({ children, className }) => {
  return (
    <motion.div layout className={cn("z-1 relative cursor-pointer", className)} whileTap={{ scale: 0.9, opacity: 0.5 }}>
      {children}
    </motion.div>
  );
};
