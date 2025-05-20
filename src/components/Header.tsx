import { useMediaQuery } from 'react-responsive';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="absolute px-4 py-4 flex flex-row w-[100vw] ">
      <p className="p-1 bg-[#38b6ff] text-black font-bold">JUDITH OLUCHI</p>
      <div className='ml-auto w-[50vw]'>
        {isMobile ? <MobileNav /> : <DesktopNav />}
      </div>
    </div>
  )
}

export default Header