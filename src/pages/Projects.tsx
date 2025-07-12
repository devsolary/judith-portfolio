import { projects } from "../Data";

const Projects = () => {
  return (
    <div className="h-screen bg-about-bg pt-24 overflow-y-scroll pb-12">
      <div className="text-white font-bold border-b-8 w-42 border-blue-600">
        SELECTED PROJECT
      </div>
      {projects.map((project, index) => (
        <div key={index} className="mt-12">
          <div>
            <div>
              <img
                src={project.img}
                alt="project img"
                className="h-[20vh] w-[30vh] mt-3"
              />
              <div>
                <h1 className="font-bold text-white">{project.project}</h1>
                <p className="text-white">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
