const About = () => {
  return (
    <div className="py-4 px-10 max-w-2xl m-auto">
      <h1 className="font-bold text-left">About me</h1>
      <p className="text-left mt-2">
        Hi👋 {} i am Pandit Pawar (Shadow), a passionate Full-Stack Developer
        and aspiring programmer from India. Currently pursuing a diploma in
        Electronics and Telecommunication, I specialize in software development,
        computer Science, technology, and content creation.
      </p>
      <p className="mt-4 text-left">
        i am working on{" "}
        <a className="text-red-400" href="https://shadowspace.xyz">
          Shadowspace
        </a>
        , in which i am building a blog website where i can share my thoughts,
        ideas, news, tutorials and experiences. I am also working in in React
        with only client components, and all the initial blogs will be
        hardcoded. Gradually, i will add a database and automatic fetching.
      </p>
    </div>
  );
};

export default About;
