import "./styles.css";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Experience from "./components/Experience.js";
import Resume from "./components/Resume.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Resume />
      <Footer />
    </div>
  );
}
