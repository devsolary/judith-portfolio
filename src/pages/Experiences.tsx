import { motion, easeOut } from "framer-motion";

const Experiences = () => {
  // Parent variant for staggered animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  // Child fade + slide-up animation
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
      className="h-full bg-about-bg pb-10 pt-24 md:px-[5vw] md:h-screen"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* Header */}
      <motion.div
        className="flex text-white justify-center content-center pb-12 lg:justify-start lg:mb-[]"
        variants={item}
      >
        <h1 className="font-extrabold text-xl mr-12 border-b-4 border-blue-500 lg:text-3xl  lg:border-b-8">
          EXPERIENCE
        </h1>
        <h1
          className="text-4xl font-extrabold lg:text-8xl lg:ml-[10vw]"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px white"
          }}
        >
          2022 - 2023
        </h1>
      </motion.div>

      {/* Experience items */}
      <motion.div className="" variants={container}>
        {/* First experience */}
        <motion.div className="text-white lg:flex lg:flex-row mb-12" variants={item}>
          <div className="lg:mr-[7vw]">
            <p className="font-bold text-xl lg:text-xl lg:whitespace-nowrap font-mono lg:pt-5 2xl:text-3xl">
              Luc-thad group of companies
            </p>
            <p className="lg:text-xl">Data analyst 2022-2024</p>
          </div>
          <div>
            <p className="py-4 lg:text-[15px] lg:w-[40vw] 2xl:text-2xl">
              Analyzed and interpreted complex datasets to provide actionable
              insights, optimized data management processes, and supported
              strategic decision making. Leveraged tools and techniques to
              streamline reporting, ensuring accuracy and efficiency in
              delivering business solutions.
            </p>
          </div>
        </motion.div>

        {/* Second experience */}
        <motion.div className="text-white lg:flex lg:flex-row mb-12" variants={item}>
          <div className="lg:mr-[11vw]">
            <p className="font-bold text-xl lg:text-xl lg:whitespace-nowrap font-mono 2xl:text-2xl">
              Upwork
            </p>
            <p className="lg:text-xl">Online Freelancer 2023-2024</p>
          </div>
          <div>
            <p className="pt-4 lg:text-[15px] lg:w-[40vw] 2xl:ml-32 2xl:text-2xl">
              Successfully completed diverse projects in data entry, Python
              backend development, 3D modeling, and animations. Delivered
              high-quality solutions tailored to client needs, consistently
              meeting deadlines and maintaining effective communication to
              ensure client satisfaction.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="md:flex md:flex-row items-center hidden mt-[20vh]"
        variants={item}
      >
        <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
        <div className="border-b-4 border-white w-[70vw] mr-5"></div>
        <p className="text-xl text-white font-mono lg:text-2xl whitespace-nowrap 2xl:text-4xl">PORTFOLIO 2026</p>
      </motion.div>
    </motion.div>
  );
};

export default Experiences;
