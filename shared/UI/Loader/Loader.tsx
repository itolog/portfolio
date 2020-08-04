import { motion } from 'framer-motion';

// const list = { hidden: { opacity: 0 } };
const item = { hidden: { x: -10, opacity: 0 } };
const Loader = () => {
  return (
    <motion.ul animate='hidden'>
      <motion.li style={{ color: 'red' }} variants={item}>
        s
      </motion.li>
      <motion.li style={{ color: 'red' }} variants={item}>
        f
      </motion.li>
      <motion.li style={{ color: 'red' }} variants={item}>
        d
      </motion.li>
    </motion.ul>
  );
};

export default Loader;
