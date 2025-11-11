import aboutImg from "/images/oluchiAboutImg.png";

const AboutMe = () => {
  return (
    <div className="h-screen bg-about-bg bg-cover bg-no-repeat pt-32 md:overflow-hidden md:pt-16">
      <div className="">
        <div className="flex flex-row">
          <img
            src={aboutImg}
            alt=""
            className="h-[250px] md:px-12 lg:h-[70vh] lg:mt-10"
          />
          <div className="px-2 md:w-[40vw] md:ml-28 white">
            <h1 className="text-white font-extrabold text-center border-b-4 border-blue-500 md:w-32 md:pb-2 lg:text-4xl lg:whitespace-nowrap lg:mt-[10vh] lg:py-[5vh] lg:mb-16 font-league">
              MY BIOGRAPHY
            </h1>
            <p className=" text-white text-[10px] md:font-semibold md:text-2xl font-mono">
              I am a Python backend developer and robotics enthusiast currently
              studying Electronics and Computer Engineering at Lagos State
              University. I specialize in backend development, with a focus on
              creating efficient, scalable systems. Alongside programming, I
              have experience in basic 3D animation and a passion for robotics,
              where I explore the integration of hardware and software. I’m
              always eager to learn and apply my skills to solve real-world
              problems.
            </p>
                    <div className="md:flex md:flex-row sm:hidden">
          <div className="text-white md:flex md:flex-col  md:py-5">
            <h1 className="md:text-4xl  md:font-bold font-league">Skills & Interest</h1>
            <ul className="flex space-x-5 pt-5 md:text-2xl md:mr-5">
              <li className="border-2 py-2 px-6 rounded-4xl md:py-1 md:px-2 font-league">
                Coding
              </li>
              <li className="border-2 py-2 px-6 rounded-4xl md:py-1 md:px-2 font-league">
                Design
              </li>
              <li className="border-2 py-2 px-6 rounded-4xl md:py-1 md:px-2 font-league">
                Reading
              </li>
            </ul>
            <br />
            <ul className="flex flex-row space-x-2 pt-5 md:text-2xl">
              <li className="border-2 py-2 px-2 rounded-4xl whitespace-nowrap md:py-1 md:px-2 font-league">
                Data analyst
              </li>
              <li className="border-2 py-2 px-2 rounded-4xl md:py-1 md:px-2 font-league">
                Communication
              </li>
              <li className="border-2 py-2 px-4 rounded-4xl md:py-1 md:px-2 font-league">
                Leadership
              </li>
            </ul>
          </div>
        </div>
          </div>
          
        </div>
        <div className="md:hidden md:flex-row">
          <div className="text-white md:flex md:flex-row md:pl-14 md:py-5">
            <h1 className="md:text-[10px] md:text-center md:absolute md:font-bold">Skills & Interest</h1>
            <ul className="flex space-x-5 pt-5 md:text-[10px] md:mr-5">
              <li className="border-2 py-2 px-6 rounded-4xl md:py-1 md:px-2">
                Coding
              </li>
              <li className="border-2 py-2 px-6 rounded-4xl md:py-1 md:px-2">
                Design
              </li>
              <li className="border-2 py-2 px-6 rounded-4xl md:py-1 md:px-2">
                Reading
              </li>
            </ul>
            <ul className="flex flex-row space-x-2 pt-5 md:text-[10px]">
              <li className="border-2 py-2 px-2 rounded-4xl whitespace-nowrap md:py-1 md:px-2">
                Data analyst
              </li>
              <li className="border-2 py-2 px-2 rounded-4xl md:py-1 md:px-2">
                Communication
              </li>
              <li className="border-2 py-2 px-4 rounded-4xl md:py-1 md:px-2">
                Leadership
              </li>
            </ul>
          </div>
        </div>
      </div>
                  <div className="ml-5 flex flex-row items-center ">
      <div className="w-[15px] h-[15px] bg-white rounded-full"></div><div className=" border-b-4 border-white w-[70vw] mr-5"></div><p className="text-3xl text-white">PORTFOLIO 2026</p>
      </div>

    </div>
  );
};

export default AboutMe;
