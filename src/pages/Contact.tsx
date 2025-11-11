import { MdPhoneInTalk } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="h-screen bg-about-bg pt-24 px-[10vw] lg:items-center lg:flex lg:flex-col lg:w-full">
      <div className="flex flex-col content-center justify-center text-center">
        <div className="text-white font-bold text-3xl lg:text-6xl">
          GET IN TOUCH
        </div>
        <div className="text-blue-600 ">let's work together</div>
      </div>
      <div className="flex pt-24 w-[80vw] lg:flex lg:items-center lg:w-full lg:pl-[10vw]">
        <div className="text-center justify-center items-center content-center flex flex-col mr-[3vw]">
          <MdPhoneInTalk className="text-center text-blue-600 text-4xl w-full lg:text-9xl" />
          <h1 className="font-bold text-white text-[7px] lg:text-3xl">
            Phone & Mobile
          </h1>
          <p className="text-white text-[7px] lg:text-2xl">
            09011564610 +234 913 709 7380
          </p>
        </div>
        <div className="text-center justify-center items-center  content-center flex flex-col mr-[3vw]">
          <MdAttachEmail className="text-center text-blue-600 text-4xl w-full  lg:text-9xl" />
          <h1 className="font-bold text-white text-[7px]  lg:text-3xl">
            {" "}
            Email & Website
          </h1>
          <p className="text-white text-[7px] lg:text-2xl">
            {" "}
            oluchijudith990@gmail.com
          </p>
        </div>
        <div className="text-center justify-center items-center  content-center flex flex-col mr-[3vw]">
          <FaLocationDot className="text-center text-blue-600 text-4xl w-full  lg:text-9xl" />
          <h1 className="font-bold text-white text-[7px]  lg:text-3xl">
            {" "}
            Address
          </h1>
          <p className="text-white text-[7px] lg:text-2xl">
            {" "}
            58,Ago palace way
          </p>
        </div>
        <div className="text-center justify-center items-center  content-center flex flex-col">
          <FaInstagramSquare className="text-center text-blue-600 text-4xl w-full  lg:text-9xl" />
          <h1 className="font-bold text-white text-[7px]  lg:text-3xl">
            {" "}
            Instagram
          </h1>
          <p className="text-white text-[7px] lg:text-2xl"> @YUNGJUDDI</p>
        </div>
      </div>
      <div className="items-center lg:flex lg:flex-col mt-24 hidden">
        <div className="ml-5 lg:flex lg:flex-row items-center sm:hidden lg:wwhitespace-nowrap mt-">
          <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
          <div className=" border-b-4 border-white w-[70vw]"></div>
          <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
        </div>
        <p className="text-white text-9xl font-bold" style={{
    color: "transparent",
    WebkitTextStroke: "2px white"
  }}>JUDITH OLUCHUKWU</p>
        <div className="ml-5 flex flex-row items-center ">
          <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
          <div className=" border-b-4 border-white w-[30vw] mr-5"></div>
          <p className="text-2xl text-white mr-5">PORTFOLIO 2026</p>
          <div className=" border-b-4 border-white w-[30vw]"></div>
          <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
