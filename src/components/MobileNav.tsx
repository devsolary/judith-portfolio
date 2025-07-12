import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";


const MobileNav = () => {
    const [isNavBarOpen, setIsNavbarOpen] = useState(false)

    const toggleNavBar = () => {
        setIsNavbarOpen(!isNavBarOpen)
    }
  return (
    <>
    <div className="flex w-full">
        <button className="font-extrabold text-2xl bg-white p-2 rounded ml-auto" onClick={()=>{toggleNavBar()}}>
          {isNavBarOpen ? <MdClose /> : <FaBars /> }
        </button>
    </div>
    {
        isNavBarOpen && (<div className="ml-5 py-2.5 flex absolute w-[50vw] pl-4 bg-[#38b6ff] rounded-2xl border-2">
            <ul className="flex flex-col divide-y-2 w-full space-y-2.5 font-bold text-white">
                <Link to="/about">ABOUT ME</Link>
                <Link to="/education">EDUCATION</Link>
                <Link to="/experience">EXPERIENCE</Link>
                <Link to="/projects">PROJECT</Link>
                <Link to="/contact">CONTACT</Link>
            </ul>
        </div>)
    }
    </>
  );
};

export default MobileNav;
