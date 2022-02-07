import { motion } from "framer-motion";

const AnimatedEntry = () => (
  <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
    <div className="animated-entry">this is the entry</div>
  </motion.div>
);

export default AnimatedEntry;
