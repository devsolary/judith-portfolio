const Education = () => {
  return (
    <div className="h-screen bg-about-bg pt-32 px-2 lg:px-[5vw]">
      <div className="lg:flex lg:flex-row">
        <div className="text-white lg:w-[35vw] lg:mt-[20vh] lg:mb-[15vh]">
          <h1 className="font-extrabold border-b-8 border-blue-400 w-[30vw] pb-2 lg:text-3xl lg:w-fit lg:py-5">
            <span className="font-league">EDUCATION</span>
          </h1>
          <p className="lg:text-2xl mt-5 font-mono">
            {" "}
            Currently studying Computer Engineering at Lagos State University, I
            developed strong organizational and data management skills as
            Assistant Head Girl in high school and Vice President of the Jet
            Club. I also earned certifications in ICT and Python programming,
            building a solid foundation in technology. With a focus on accuracy
            and data integrity, I’m confident in my ability to deliver
            exceptional results
          </p>
        </div>
        <div className="text-white mt-6">
          <h1 className="text-4xl font-extrabold lg:text-8xl [text-shadow:3px_3px_0_white] text-black font-league">2024-TILL DATE</h1>
          <div className=" ml-28 mt-28">
          <div className="my-5 ">
            <h2 className="font-bold lg:text-2xl font-mono">Jubilee model senior grammer school</h2>
            <p className="lg:text-xl font-mono">Science | 2022</p>
          </div>
          <div className="font-bold lg:text-2xl font-mono">Bachelor Degree</div>
          <p  className="lg:text-xl">Lagos state university | Bachelor | Till date</p>
          </div>
        </div>
      </div>
          <div className="ml-5 lg:flex flex-row items-center hidden">
      <div className="w-[15px] h-[15px] bg-white rounded-full"></div><div className=" border-b-4 border-white w-[70vw] mr-5"></div><p className="text-3xl text-white">PORTFOLIO 2026</p>
      </div>
    </div>
  );
};

export default Education;
