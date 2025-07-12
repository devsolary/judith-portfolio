import { Link } from "react-router-dom"


const DesktopNav = () => {
  return (
    <div>
      <ul className="flex flex-row space-x-8 text-white">
        <li><Link to=""> ABOUT ME</Link></li>
        <li><Link to="">EDUCATION</Link></li>
        <li><Link to=""> EXPERIENCE</Link></li>
        <li><Link to="">PROJECT</Link></li>
        <li><Link to="">CONTACT</Link></li>
      </ul>
    </div>
  )
}

export default DesktopNav