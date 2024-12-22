const Projects = () => {
  return (
    <div className="text-left py-4 px-10 max-w-2xl m-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Recent Projects</h1>
        <h1 className="font-bold">See all Projects</h1>
      </div>
      <div className="border border-[#dadada30] p-4 mt-4">
        <h1 className="text-red-400 text-left font-bold">Shadow</h1>
        <p>My personal blog and website, built with React and Tailwind CSS.</p>
      </div>
      <div className="border border-[#dadada30] p-4 mt-4">
        <h1 className="text-red-400 text-left font-bold">Shadowspace</h1>
        <p>A tech-focused Blog website, built with React and Tailwind CSS.</p>
      </div>
    </div>
  );
};

export default Projects;
