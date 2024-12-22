import { Link } from "react-router-dom";
import Shadow from "../assets/Shadow-rounded.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center mt-2 py-4 px-10 max-w-2xl m-auto border-b border-[#dadada30]">
      <Link to="/" className="flex gap-2 items-center">
        <img className="w-8 h-8 rounded-full" src={Shadow} alt="Shadow" />
        <h1 className="font-bold text-md">Shadow</h1>
      </Link>
      <nav>
        <Link to="/blogs">
          <h1 className="font-bold">Blog</h1>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
