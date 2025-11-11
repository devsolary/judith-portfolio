import { projects } from "../Data";
import { useRef, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';

const Projects = () => {

    const scrollRef = useRef<HTMLDivElement>(null); // ✅ Tell TS it's a div
      const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
       if (isMobile) return;
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY; // vertical scroll → horizontal
    };

    el.addEventListener("wheel", onWheel);

    return () => el.removeEventListener("wheel", onWheel); // ✅ TS now knows el supports this
  }, []);


  return (
    <div className="h-screen bg-about-bg pt-24 overflow-y-scroll pb-12 lg:px-[5vw]">
      <div className="text-white font-bold border-b-8 w-42 border-blue-600 lg:text-5xl lg:whitespace-nowrap lg:w-fit lg:pb-5">
        SELECTED PROJECT
      </div>
      <div   ref={scrollRef}  className="lg:flex lg:flex-row lg:overflow-x-auto  gap-x-32  lg:whitespace-nowrap lg:no-scrollbar  overflow-y-scroll"  style={{ scrollBehavior: "smooth" }}>
      {projects.map((project, index) => (
        <div key={index} className="mt-12 lg:flex-shrink-0 lg:w-[30vw]">
          <div>
            <div className="">
              <img
                src={project.img}
                alt="project img"
                className="h-[20vh] w-[30vh] mt-3 lg:w-[20vw] lg:h-[20vw]"
              />
              <div>
                <h1 className="font-bold text-white lg:text-4xl font-league">{project.project}</h1>
                <p className="text-white whitespace-normal lg:text-2xl">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
                              <div className="ml-5 lg:flex lg:flex-row items-center hidden">
      <div className="w-[15px] h-[15px] bg-white rounded-full"></div><div className=" border-b-4 border-white w-[70vw] mr-5"></div><p className="text-3xl text-white">PORTFOLIO 2026</p>
      </div>
    </div>
  );
};

export default Projects;
