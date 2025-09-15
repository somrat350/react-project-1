export default function ProjectCard({image,name,desc,liveLink}){
  return(
    <>
      <div className="flex flex-col gap-5 p-3 rounded-lg bg-white hover:shadow-2xl shadow-[#4e47ff] transition-all duration-500">
        <img src={image} alt="" className="w-full h-60 border border-gray-400 rounded-lg" />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-base text-gray-700">{desc}</p>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="button">Live link</a>
        </div>
      </div>
    </>
  )
}