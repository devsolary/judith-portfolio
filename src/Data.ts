interface Project {
    project : string,
    description : string,
    img : string,
}

const projects : Project[] = [
    {
        project : "Mathsquest | 2022",
        description : "MathQuest is a Python-based game where players solve randomly generated math problems to earn points, track progress, and sharpen their skills in a fun, interactive way. It’s designed to make learning math engaging and challenging",
        img : "/images/mathsquize.png"
    },
    {
        project : " Supplier Performance Analysis | 2023",
        description : "",
        img : "/images/supplyImg.png"
    },
    {
        project : " Online Voting System | 2022",
        description : "Developed a secure, scalable backend for an online voting system, featuring real-time tracking, secure authentication, and robust data management.",
        img : "/images/onlineVotingImg.png"
    },
    {
        project : " The Life Cycle of an Alien Planet 2023",
        description : "A 3D animation exploring an alien planet's evolution—from formation to collapse—showcasing unique ecosystems, landscapes, and species adapting over time.",
        img : "/images/AlienImg.png"
    },
 {
        project : "Banking  app stimulation",
        description : "Developed a simulation of a banking app, incorporating features like account management, transaction tracking, and fund transfers. The project focused on creating a user-friendly interface and testing the app’s functionality and security, providing  realistic digital banking experience.",
        img : "/images/bankingAppImg.png"
    },
]

export {projects}