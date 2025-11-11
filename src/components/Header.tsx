import { useMediaQuery } from 'react-responsive';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="absolute px-4 py-4 flex flex-row w-[100vw] ">
      <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}><Link to="/" className="p-1 bg-[#38b6ff] text-black font-bold lg:text-3xl font-mono">JUDITH OLUCHI</Link></motion.button>
      <div className='ml-auto w-[50vw] lg:ml-[5vw]'>
        {isMobile ? <MobileNav /> : <DesktopNav />}
      </div>
    </div>
  )
}

export default Header