import { MdPhoneInTalk } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { motion, easeOut } from "framer-motion";

const Contact = () => {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
  };

  return (
    <motion.div
      className="h-screen bg-about-bg pt-24 px-[10vw] md:items-center lg:flex md:flex-col md:w-full"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* Header */}
      <motion.div className="flex flex-col content-center justify-center text-center" variants={item}>
        <div className="text-white font-bold text-3xl lg:text-6xl">GET IN TOUCH</div>
        <div className="text-blue-600">let's work together</div>
      </motion.div>

      {/* Contact cards */}
      <motion.div className="flex pt-24 w-[80vw] md:flex md:flex-row md:items-center md:w-full md:pl-[15vw]" variants={container}>
        <motion.div className="text-center flex flex-col mr-[3vw]" variants={item}>
          <MdPhoneInTalk className="text-blue-600 text-4xl lg:text-9xl w-full" />
          <h1 className="font-bold text-white text-[7px] lg:text-3xl">Phone & Mobile</h1>
          <p className="text-white text-[7px] lg:text-2xl">09011564610 +234 913 709 7380</p>
        </motion.div>

        <motion.div className="text-center flex flex-col mr-[3vw]" variants={item}>
          <MdAttachEmail className="text-blue-600 text-4xl lg:text-9xl w-full" />
          <h1 className="font-bold text-white text-[7px] lg:text-3xl">Email & Website</h1>
          <p className="text-white text-[7px] lg:text-2xl">oluchijudith990@gmail.com</p>
        </motion.div>

        <motion.div className="text-center flex flex-col mr-[3vw]" variants={item}>
          <FaLocationDot className="text-blue-600 text-4xl lg:text-9xl w-full" />
          <h1 className="font-bold text-white text-[7px] lg:text-3xl">Address</h1>
          <p className="text-white text-[7px] lg:text-2xl">58, Ago Palace Way</p>
        </motion.div>

        <motion.div className="text-center flex flex-col" variants={item}>
          <FaInstagramSquare className="text-blue-600 text-4xl lg:text-9xl w-full" />
          <h1 className="font-bold text-white text-[7px] lg:text-3xl">Instagram</h1>
          <p className="text-white text-[7px] lg:text-2xl">@YUNGJUDDI</p>
        </motion.div>
      </motion.div>

      {/* Bottom timeline + name */}
      <motion.div className="items-center md:flex md:flex-col mt-24 hidden" variants={item}>
        <div className="ml-5 md:flex md:flex-row items-center sm:hidden lg:whitespace-nowrap">
          <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
          <div className="border-b-4 border-white w-[70vw]"></div>
          <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
        </div>

        <motion.p
          className="text-white md:text-6xl font-bold whitespace-nowrap"
          style={{ color: "transparent", WebkitTextStroke: "1px white" }}
          variants={item}
        >
          JUDITH OLUCHUKWU
        </motion.p>

        <motion.div className="ml-5 flex flex-row items-center" variants={item}>
          <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
          <div className="border-b-4 border-white w-[30vw] mr-5"></div>
          <p className="text-2xl text-white mr-5 whitespace-nowrap">PORTFOLIO 2026</p>
          <div className="border-b-4 border-white w-[30vw]"></div>
          <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;