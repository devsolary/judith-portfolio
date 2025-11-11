const Experiences = () => {
  return (
    <div className="h-screen bg-about-bg pt-24 lg:px-[5vw]">
      <div className="flex  text-white justify-center content-center pb-12 lg:justify-start lg:mb-[5vh]">
        <h1 className="font-extrabold text-xl mr-12 border-b-4 border-blue-500 lg:text-5xl lg:pb-8 lg:border-b-8">
          EXPERINECE{" "}
        </h1>
        <h1 className="text-4xl font-extrabold lg:text-8xl lg:ml-[10vw]"   style={{
    color: "transparent",
    WebkitTextStroke: "2px white"
  }}>2022 - 2023</h1>
      </div>
      <div>
        <div className="text-white lg:flex lg:flex-row">
          <div className="lg:mr-[5vw]">
            <p className="font-bold text-xl lg:text-3xl lg:whitespace-nowrap font-mono">Luc-thad group of companies</p>
            <p className="lg:text-2xl">Data analyst 2022-2024</p>
          </div>
          <div>
            <p className="py-4 lg:text-xl lg:w-[40vw]">
              Analyzed and interpreted complex datasets to provide actionable
              insights, optimized data management processes, and supported
              strategic decision making. Leveraged tools and techniques to
              streamline reporting, ensuring accuracy and efficiency in
              delivering business solutions.
            </p>
          </div>
        </div>
        <div className="text-white lg:flex lg:flex-row">
          <div className="lg:mr-[11vw]">
            <p className="font-bold text-xl lg:text-3xl lg:whitespace-nowrap font-mono">Upwork</p>
            <p className="lg:text-2xl">online-freelancer 2023-2024</p>
          </div>
          <div>
            <p className="pt-4  lg:text-xl lg:w-[40vw]">
              Successfully completed diverse projects in data entry, Python
              backend development, 3D modeling, and animations. Delivered
              high-quality solutions tailored to client needs, consistently
              meeting deadlines and maintaining effective communication to
              ensure client satisfaction
            </p>
          </div>
        </div>
      </div>
                        <div className="ml-5 lg:flex lg:flex-row items-center mt-[25vh] hidden">
      <div className="w-[15px] h-[15px] bg-white rounded-full"></div><div className=" border-b-4 border-white w-[70vw] mr-5"></div><p className="text-3xl text-white">PORTFOLIO 2026</p>
      </div>
    </div>
  );
};

export default Experiences;
