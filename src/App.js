import About from "./Pages/AboutMe/About";
import Contact from "./Pages/ContactMe/Contact";
import Profile from "./Pages/Home/Profile";
import Resume from "./Pages/Resume/Resume";
import Testimonial from "./Pages/Testimonials/Testimonial";

function App() {
  return (
    <div className="bg-gray-100">
      <Profile />
      <About />
      <Resume />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
