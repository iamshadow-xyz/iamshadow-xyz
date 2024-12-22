import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Blogs from "./components/Blogs";
import Skills from "./pages/Skills";
import WhoAmI from "./blogs/who-am-i";
import WhyAmIMakingShadowspace from "./blogs/why-am-i-making-shadowspace";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <About />
            <Skills />
            <Blog />
            <Projects />
            <Contact />
            <Footer />
          </div>
        }
      />
      <Route
        path="/blogs"
        element={
          <div className="px-2 md:px-80">
            <Header />
            <Blogs />
          </div>
        }
      />
      <Route
        path="/blogs/who-am-i"
        element={
          <div>
            <Header />
            <WhoAmI />
          </div>
        }
      />
      <Route
        path="/blogs/why-am-i-making-shadowspace"
        element={
          <div>
            <Header />
            <WhyAmIMakingShadowspace />
          </div>
        }
      />
      <Route
        path="*"
        element={
          <div className="min-h-screen flex justify-center items-center">
            404 Not Found
          </div>
        }
      />
    </Routes>
  );
};

export default App;
