import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DesktopNav = () => {
  // ✅ Parent animation (controls children animation delay)
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15, // delay between each menu item
        duration: 0.4,
      },
    },
  };

  // ✅ Child animation (each menu item)
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.ul
        className="flex flex-row space-x-[5vw] text-white text-[10px] z-10 md:text-[12px] lg:text-[15px]  w-full items-center whitespace-nowrap font-mono 2xl:text-2xl"
        variants={containerVariants}
      >
        <motion.li variants={itemVariants}><Link to="/about">ABOUT ME</Link></motion.li>
        <motion.li variants={itemVariants}><Link to="/education">EDUCATION</Link></motion.li>
        <motion.li variants={itemVariants}><Link to="/experience">EXPERIENCE</Link></motion.li>
        <motion.li variants={itemVariants}><Link to="/projects">PROJECT</Link></motion.li>
        <motion.li variants={itemVariants}><Link to="/contact">CONTACT</Link></motion.li>

        {/* Line + Circle */}
        <motion.li 
          className="flex flex-row items-center"
          variants={itemVariants}
        >
          <div className="border-b-4 border-white w-[10vw]"></div>
          <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default DesktopNav;
