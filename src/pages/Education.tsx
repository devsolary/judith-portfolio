import { motion, easeOut } from "framer-motion";

const Education = () => {
  // Parent variant for staggered animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
      className="h-full bg-about-bg pt-32 pb-8 px-2 lg:px-[5vw]"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.div className="lg:flex lg:flex-row" variants={container}>
        {/* Left section */}
        <motion.div
          className="text-white lg:w-[35vw] lg:mt-[20vh] lg:mb-[15vh]"
          variants={item}
        >
          <h1 className="font-extrabold border-b-8 border-blue-400 w-[30vw] pb-2 lg:text-3xl lg:w-fit lg:py-5">
            <span className="font-league">EDUCATION</span>
          </h1>

          <p className="lg:text-2xl mt-5 font-mono">
            Currently studying Computer Engineering at Lagos State University, I
            developed strong organizational and data management skills as
            Assistant Head Girl in high school and Vice President of the Jet
            Club. I also earned certifications in ICT and Python programming,
            building a solid foundation in technology. With a focus on accuracy
            and data integrity, I’m confident in my ability to deliver
            exceptional results.
          </p>
        </motion.div>

        {/* Right section */}
        <motion.div className="text-white mt-6" variants={item}>
          <h1 className="text-4xl font-extrabold lg:text-8xl [text-shadow:3px_3px_0_white] text-black font-league">
            2024-TILL DATE
          </h1>

          <div className="ml-28 mt-28">
            <motion.div className="my-5" variants={item}>
              <h2 className="font-bold lg:text-2xl font-mono">
                Jubilee Model Senior Grammar School
              </h2>
              <p className="lg:text-xl font-mono">Science | 2022</p>
            </motion.div>

            <motion.div className="font-bold lg:text-2xl font-mono" variants={item}>
              Bachelor Degree
            </motion.div>
            <motion.p className="lg:text-xl" variants={item}>
              Lagos State University | Bachelor | Till date
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom line */}
      <motion.div className="ml-5 lg:flex flex-row items-center hidden" variants={item}>
        <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
        <div className="border-b-4 border-white w-[70vw] mr-5"></div>
        <p className="text-3xl text-white">PORTFOLIO 2026</p>
      </motion.div>
    </motion.div>
  );
};

export default Education;
