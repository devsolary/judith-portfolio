import oluchi from "/images/oluchi1.png";
import oluchiPlain from "/images/oluchi-plain.png";
import { motion, easeOut } from "framer-motion";

const Home = () => {
  // ✅ Parent variant for staggering
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  // ✅ Child fade + slide-up animation
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut }
    }
  };

  return (
    <motion.div
      className="h-screen bg-hero-bg bg-cover bg-no-repeat flex flex-col justify-center overflow-y-scroll w-full md:overflow-hidden md:mt-0 md:px-5 2xl:pl-24"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* ✅ Floating intro text */}
      <motion.div
        className="w-full mt-[0vh] flex flex-col justify-center text-center md:z-10 md:w-[40vw] md:text-left md:ml-12 md:mt-8 lg:mt-10 2xl:pt-24"
        variants={container}
      >
        <motion.p className="text-[#38b6ff] md:text-[10px] font-mono  2xl:text-[25px]" variants={item}>
          Hello !!!
        </motion.p>

        <motion.p
          className="text-[#d9d9d9] text-4xl font-extrabold md:font-bold md:text-2xl md:w-[30vw] font-league lg:text-4xl 2xl:text-6xl"
          variants={item}
        >
          I'm Nwonumara Judith oluchi
        </motion.p>

        <motion.p
          className="p-1 bg-[#38b6ff] text-[10px] text-center justify-center mx-24 font-bold border-2 md:text-[10px] md:w-[20vw] md:mx-0 lg:text-left font-league"
          variants={item}
        >
          PYTHON BACKEND DEVELOPER
        </motion.p>
      </motion.div>

      {/* ✅ Description + images */}
      <div className="relative mt-10 lg:mt-0 md:mt-0">
        <motion.p
          className="absolute text-white w-[65vw] text-[12px] mt-5 md:text-[15px] md:flex md:w-[60vw] md:z-20 md:pt-24 font-mono lg:text-xl lg:pt-32 2xl:text-3xl 2xl:w-[40vw]"
          variants={item}
        >
          Driven by a passion for creativity, technology, and precision, I bring expertise 
          in data entry, modelling, 3D animations, and Python backend development. My 
          meticulous attention to detail ensures accurate and efficient execution of tasks, 
          whether managing data or developing technical solutions.
        </motion.p>

        <motion.img
          src={oluchi}
          alt=""
          className="md:hidden"
          variants={item}
        />

        <motion.img
          src={oluchiPlain}
          alt=""
          className="md:w-[40vw] md:z-0 md:h-[40vh] ml-[60vw] hidden md:flex lg:h-[50vh] 2xl:h-[60vh]"
          variants={item}
        />
      </div>

      {/* ✅ Bottom section */}
      <motion.div
        className="md:flex md:flex-row items-center hidden mt-[10vh] 2xl:mt-0"
        variants={item}
      >
        <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
        <div className="border-b-4 border-white w-[70vw] mr-5"></div>
        <p className="text-xl text-white font-mono lg:text-xl 2xl:text-4xl">PORTFOLIO 2026</p>
      </motion.div>
    </motion.div>
  );
};

export default Home;
