import aboutImg from "/images/oluchiAboutImg.png"

const AboutMe = () => {
  return (
    <div className="h-screen bg-about-bg bg-cover bg-no-repeat pt-32">
      <div className="">
        <div className="flex flex-row">
        <img src={aboutImg} alt=""  className="h-[250px]"/>
        <div className="px-2 ">
          <h1 className="text-white font-extrabold text-center border-b-4 border-blue-500">MY BIOGRAPHY</h1>
          <p className=" text-white text-[10px]">I am a Python backend developer and robotics enthusiast currently studying Electronics and Computer Engineering at Lagos State University. I specialize in backend development, with a focus on creating efficient, scalable systems. Alongside programming, I have experience in basic 3D animation and a passion for robotics, where I explore the integration of hardware and software. I’m always eager to learn and apply my skills to solve real-world problems.</p>
        </div>
        </div>
        <div>
          <div className="text-white">
            <h1>Skills & Interest</h1>
            <ul className="flex space-x-5 pt-5">
              <li className="border-2 py-2 px-6 rounded-4xl">Coding</li>
              <li className="border-2 py-2 px-6 rounded-4xl">Design</li>
              <li className="border-2 py-2 px-6 rounded-4xl">Reading</li>
            </ul>
                        <ul className="flex flex-row space-x-2 pt-5">
              <li className="border-2 py-2 px-2 rounded-4xl whitespace-nowrap">Data analyst</li>
              <li className="border-2 py-2 px-2 rounded-4xl">Communication</li> 
              <li className="border-2 py-2 px-4 rounded-4xl">Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe