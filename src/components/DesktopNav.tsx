import { Link } from "react-router-dom"


const DesktopNav = () => {
  return (
    <div>
      <ul className="flex flex-row space-x-[5vw] text-white text-[10px] z-10 lg:text-[20px] w-full items-center whitespace-nowrap font-mono">
        <li className="font-mono"><Link to="/about"> ABOUT ME</Link></li>
        <li className="font-mono"><Link to="/education">EDUCATION</Link></li>
        <li className="font-mono"><Link to="/experience"> EXPERIENCE</Link></li>
        <li className="font-mono"><Link to="/projects">PROJECT</Link></li>
        <li className="font-mono"><Link to="/contact">CONTACT</Link></li>
        <li className="flex flex-row items-center"><div className=" border-b-4 border-white w-[20vw]"></div><div className="w-[15px] h-[15px] bg-white rounded-full"></div></li>
      </ul>
    </div>
  )
}

export default DesktopNav