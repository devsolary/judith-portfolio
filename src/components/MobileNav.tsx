import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

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
        isNavBarOpen && (<div className="mt-10 flex absolute pl-10">
            <ul className="flex flex-col">
                <li>ABOUT ME</li>
                <li>EDUCATION</li>
                <li>EXPERIENCE</li>
                <li>PROJECT</li>
                <li>CONTACT</li>
            </ul>
        </div>)
    }
    </>
  );
};

export default MobileNav;
