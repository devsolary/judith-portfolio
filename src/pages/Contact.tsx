import { MdPhoneInTalk } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="h-screen bg-about-bg pt-24 px-[10vw]">
      <div className="flex flex-col content-center justify-center text-center">
        <div className="text-white font-bold text-3xl">GET IN TOUCH</div>
        <div className="text-blue-600 ">let's work together</div>
      </div>
      <div className="flex pt-24 w-[80vw]">
        <div className="text-center justify-center items-center content-center flex flex-col mr-[3vw]">
          <MdPhoneInTalk className="text-center text-blue-600 text-4xl w-full" />
          <h1 className="font-bold text-white text-[7px]">Phone & Mobile</h1>
          <p className="text-white text-[7px]">09011564610 +234 913 709 7380</p>
        </div>
        <div className="text-center justify-center items-center  content-center flex flex-col mr-[3vw]">
          <MdAttachEmail  className="text-center text-blue-600 text-4xl w-full"/>
          <h1 className="font-bold text-white text-[7px]"> Email & Website</h1>
          <p className="text-white text-[7px]"> oluchijudith990@gmail.com</p>
        </div>
        <div className="text-center justify-center items-center  content-center flex flex-col mr-[3vw]">
         <FaLocationDot   className="text-center text-blue-600 text-4xl w-full"/>
          <h1 className="font-bold text-white text-[7px]"> Address</h1>
          <p className="text-white text-[7px]"> 58,Ago palace way</p>
        </div>
        <div className="text-center justify-center items-center  content-center flex flex-col">
          <FaInstagramSquare  className="text-center text-blue-600 text-4xl w-full"/>
          <h1 className="font-bold text-white text-[7px]"> Instagram</h1>
          <p className="text-white text-[7px]"> @YUNGJUDDI</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
