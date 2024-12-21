const Contact = () => {
  return (
    <div className="py-4 px-4 max-w-2xl m-auto">
      <div>
        <h1 className="text-left font-bold">You can find me on</h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            className="px-4 py-2 border border-[#dadada30]"
            href="https://x.com/iamshadow_xyz"
            target="_blank"
          >
            X
          </a>
          <a
            className="px-4 py-2 border border-[#dadada30]"
            href="https://github.com/iamshadow-xyz"
            target="_blank"
          >
            Github
          </a>
          <a
            className="px-4 py-2 border border-[#dadada30]"
            href="https://www.linkedin.com/in/iamshadow/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="px-4 py-2 border border-[#dadada30]"
            href="https://www.youtube.com/@iamshadow_xyz"
            target="_blank"
          >
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
