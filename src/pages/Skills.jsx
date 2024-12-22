const Skills = () => {
  return (
    <div className="py-4 px-8 max-w-2xl m-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Skills</h1>
      </div>
      <div className="border border-[#dadada30] p-4 mt-4">
        <div className="text-left">
          <h1 className="text-red-400 text-md font-bold">
            Programming & Web Development
          </h1>
          <p className="mt-2">
            Proficient in HTML, CSS, JavaScript, React, Next.js, MongoDB, Vite,
            Tailwind CSS.
          </p>
        </div>
      </div>
      <div className="border border-[#dadada30] p-4 mt-4">
        <div className="text-left">
          <h1 className="text-red-400 text-md font-bold">
            Backend & Database Management
          </h1>
          <p className="mt-2">
            Connected front-end apps with live APIs hosted on platforms like
            Render.com.
          </p>
        </div>
      </div>
      <div className="border border-[#dadada30] p-4 mt-4">
        <div className="text-left">
          <h1 className="text-red-400 text-md font-bold">Content Creation</h1>
          <p className="mt-2">
            Tech-focused blogs and YouTube videos, explaining complex concepts
            in a simple, beginner-friendly manner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
