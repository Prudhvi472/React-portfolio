import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Skills from "./components/Skills.jsx";
import SocialLinks from "./components/SocialLinks.jsx";

function App() {
  return (
    <div>
      {/* <h1 className="text-4xl font-bold font-signature">Hello</h1> */}
      <NavBar />
      <Home />
      <About />
      <Skills />
      <SocialLinks />
      <Contact />
    </div>
  );
}

export default App;
