import About from "./Pages/AboutMe/About";
import Profile from "./Pages/Home/Profile";
import Resume from "./Pages/Resume/Resume";

function App() {
  return (
    <div className="bg-gray-100">
      <Profile />
      <About />
      <Resume />
    </div>
  );
}

export default App;
