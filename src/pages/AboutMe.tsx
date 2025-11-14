import aboutImg from "/images/oluchiAboutImg.png";
import { motion, easeOut } from "framer-motion";

const AboutMe = () => {
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
      className="h-screen bg-about-bg bg-cover bg-no-repeat pt-32 md:overflow-hidden md:pt-32"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.div className="" variants={container}>
        <div className="flex flex-row">
          <motion.img
            src={aboutImg}
            alt=""
            className="h-[250px] md:px-12 md:h-[60vh] lg:mt-10"
            variants={item}
          />

          <motion.div className="px-2 md:w-[40vw] white" variants={item}>
            <motion.h1
              className="text-white font-extrabold text-center border-b-4 border-blue-500 md:w-32 md:pb-2 md:text-2xl md:whitespace-nowrap lg:mt-[10vh] lg:py-[5vh] lg:mb-16 font-league"
              variants={item}
            >
              MY BIOGRAPHY
            </motion.h1>

            <motion.p
              className="text-white text-[10px] md:font-semibold md:text-sm font-mono"
              variants={item}
            >
              I am a Python backend developer and robotics enthusiast currently
              studying Electronics and Computer Engineering at Lagos State
              University. I specialize in backend development, with a focus on
              creating efficient, scalable systems. Alongside programming, I
              have experience in basic 3D animation and a passion for robotics,
              where I explore the integration of hardware and software. I’m
              always eager to learn and apply my skills to solve real-world
              problems.
            </motion.p>

            {/* Desktop skills */}
            <motion.div className="md:flex md:flex-row hidden" variants={item}>
              <div className="text-white md:flex md:flex-col md:py-5">
                <motion.h2
                  className="md:text-4xl md:font-bold font-league"
                  variants={item}
                >
                  Skills & Interest
                </motion.h2>

                <motion.ul
                  className="flex space-x-5 pt-5 md:text-2xl md:mr-5"
                  variants={item}
                >
                  <li className="border-2 py-2 px-6 rounded-4xl md:py-1 md:px-2 font-league">
                    Coding
                  </li>
                  <li className="border-2 py-2 px-6 rounded-4xl md:py-1 md:px-2 font-league">
                    Design
                  </li>
                  <li className="border-2 py-2 px-6 rounded-4xl md:py-1 md:px-2 font-league">
                    Reading
                  </li>
                </motion.ul>

                <motion.ul
                  className="flex flex-row space-x-2 pt-5 md:text-2xl"
                  variants={item}
                >
                  <li className="border-2 py-2 px-2 rounded-4xl whitespace-nowrap md:py-1 md:px-2 font-league">
                    Data analyst
                  </li>
                  <li className="border-2 py-2 px-2 rounded-4xl md:py-1 md:px-2 font-league">
                    Communication
                  </li>
                  <li className="border-2 py-2 px-4 rounded-4xl md:py-1 md:px-2 font-league">
                    Leadership
                  </li>
                </motion.ul>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile skills */}
        <motion.div className="md:hidden md:flex-row" variants={item}>
          <div className="text-white md:flex md:flex-row md:pl-14 md:py-5">
            <h2 className="md:text-[10px] md:text-center md:absolute md:font-bold">
              Skills & Interest
            </h2>
            <ul className="flex space-x-5 pt-5 md:text-[10px] md:mr-5">
              <li className="border-2 py-2 px-6 rounded-4xl md:py-1 md:px-2">
                Coding
              </li>
              <li className="border-2 py-2 px-6 rounded-4xl md:py-1 md:px-2">
                Design
              </li>
              <li className="border-2 py-2 px-6 rounded-4xl md:py-1 md:px-2">
                Reading
              </li>
            </ul>
            <ul className="flex flex-row space-x-2 pt-5 md:text-[10px]">
              <li className="border-2 py-2 px-2 rounded-4xl whitespace-nowrap md:py-1 md:px-2">
                Data analyst
              </li>
              <li className="border-2 py-2 px-2 rounded-4xl md:py-1 md:px-2">
                Communication
              </li>
              <li className="border-2 py-2 px-4 rounded-4xl md:py-1 md:px-2">
                Leadership
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom line */}
      <motion.div
        className="md:flex md:flex-row items-center hidden mt-[10vh]"
        variants={item}
      >
        <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
        <div className="border-b-4 border-white w-[70vw] mr-5"></div>
        <p className="text-xl text-white font-mono lg:text-4xl">PORTFOLIO 2026</p>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
