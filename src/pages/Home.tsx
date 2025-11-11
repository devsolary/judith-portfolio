import oluchi from "/images/oluchi1.png";
import oluchiPlain from "/images/oluchi-plain.png"

const Home = () => {
  return (
    <div className="h-screen bg-hero-bg bg-cover bg-no-repeat flex flex-col justify-center w-full md:overflow-hidden md:pl-18 lg:justify-start">
      <div className="w-full mt-[10vh] flex flex-col justify-center text-center md:absolute md:z-10 md:w-[40vw] md:text-left md:ml-12 md:mt-[25vh]">
        <p className="text-[#38b6ff] md:text-[20px] font-mono">Hello !!!</p>
        <p className="text-[#d9d9d9] text-4xl font-extrabold md:font-bold md:text-6xl md:w-[30vw] font-league">I'm Nwonumara Judith oluchi </p>
        <p className="p-1 bg-[#38b6ff] text-[10px] text-center justify-center mx-24 font-bold border-2 md:text-sm md:w-[20vw] md:mx-0 lg:text-left font-league">PYTHON BACKEND DEVELOPER</p>
      </div>
      <div className="relative mt-10 ">
        <p className="absolute text-white w-[65vw] text-[12px] mt-5 md:text-[25px] md:w-[40vw] md:z-20 md:mt-[45vh] lg:flex lg:flex-col font-mono">Driven by a passion for creativity, technology, and precision, I bring expertise in data entry, modelling, 3D animations, and Python backend development. My meticulous attention to detail ensures accurate and efficient execution of tasks, whether managing data or developing technical solutions.</p>
        <img src={oluchi} alt="" className="md:w-[100vw] md:z-0 md:h-[90vh] md:hidden" />
        <img src={oluchiPlain} alt="" className="absolute md:w-[40vw] md:z-0 md:h-[80vh] right-0 lg:mt-[5vh] hidden lg:flex" />
      </div>
      <div className="mt-[88vh] lg:flex lg:flex-row items-center  hidden">
      <div className="w-[15px] h-[15px] bg-white rounded-full"></div><div className=" border-b-4 border-white w-[70vw] mr-5"></div><p className="text-3xl text-white font-mono">PORTFOLIO 2026</p>
      </div>
    </div>
  );
};

export default Home;
