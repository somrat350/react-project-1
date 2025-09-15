import ProjectCard from "./ProjectCard";
// import Assignment1 from "../public/images/assignment1.png"
// import Assignment2 from "../public/images/assignment2.png"
// import Assignment5 from "../public/images/assignment5.png"
// import Assignment6 from "../public/images/assignment6.png"

export default function Projects(){
  const projects = [
    {
      image:"https://raw.githubusercontent.com/somrat350/react-project-1/refs/heads/main/public/images/assignment1.png",
      name:"Assignment no 1",
      desc:"This is my first assignment. It created by me. I use HTML and CSS for create this. This is not responsive.",
      liveLink:"https://somrat350.github.io/First-Assignment/"
    },
    {
      image:"https://raw.githubusercontent.com/somrat350/react-project-1/refs/heads/main/public/images/assignment2.png",
      name:"Assignment no 2",
      desc:"This is my second assignment. It created by me. I use HTML, CSS and TAILWINDCSS for create this.",
      liveLink:"https://somrat350.github.io/Assignment-no2/"
    },
    {
      image:"https://raw.githubusercontent.com/somrat350/react-project-1/refs/heads/main/public/images/assignment5.png",
      name:"Assignment no 5",
      desc:"This is my fifth assignment. It created by me. I use HTML, CSS, TAILWINDCSS and JAVASCRIPT for create this.",
      liveLink:"https://somrat350.github.io/Assignment-no5/"
    },
    {
      image:"https://raw.githubusercontent.com/somrat350/react-project-1/refs/heads/main/public/images/assignment6.png",
      name:"Assignment no 6",
      desc:"This is my six assignment. It created by me. I use HTML, CSS, TAILWINDCSS and JAVASCRIPT for create this.",
      liveLink:"https://assignment-no6-green-tree.netlify.app/"
    }
  ]
  return (
    <>
      <div className="pt-20 bg-gray-300">
        <h2 className="text-center font-bold text-4xl text-[#252432]">My Projects Overview</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 mt-10">
          {
            projects.map((project,index)=>(
              <ProjectCard key={index} image={project.image} name={project.name} desc={project.desc} liveLink={project.liveLink}/>
            ))
          }
        </div>
      </div>
    </>
  )
}