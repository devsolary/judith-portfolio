import oluchi from "/images/oluchi1.png";

const Home = () => {
  return (
    <div className="h-screen bg-hero-bg bg-cover bg-no-repeat flex flex-col justify-center w-full">
      <div className="w-full mt-[10vh] flex flex-col justify-center text-center">
        <p className="text-[#38b6ff]">Hello !!!</p>
        <p className="text-[#d9d9d9] text-4xl font-extrabold">I'm Nwonumara Judith oluchi </p>
        <p className="p-1 bg-[#38b6ff] text-[10px] text-center justify-center mx-24">PYTHON BACKEND DEVELOPER</p>
      </div>
      <div className="relative mt-10">
        <p className="absolute text-white w-[65vw] text-sm mt-5">Driven by a passion for creativity, technology, and precision, I bring expertise in data entry, modelling, 3D animations, and Python backend development. My meticulous attention to detail ensures accurate and efficient execution of tasks, whether managing data or developing technical solutions.</p>
        <img src={oluchi} alt="" className="" />
      </div>
    </div>
  );
};

export default Home;
