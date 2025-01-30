import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import Profile from './components/Profile/Profile';
import RightSideBar from './components/RightSideBar/RightSideBar';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Curriculum from './components/Curriculum/Curriculum';
import About from './components/About/About';

function App() {
  return (
    <Router basename="/Portfolio">
      <div className="flex min-h-screen w-full">
        <LeftSideBar />
        <main className="flex-1 ml-64 mr-64">
          <Routes>
            <Route path="/Portfolio/profile" element={<Profile />} />
            <Route path="/Portfolio/experiences" element={<Experience />} />
            <Route path="/Portfolio/education" element={<Education />} />
            <Route path="/Portfolio/skills" element={<Skills />} />
            <Route path="/Portfolio/projects" element={<Projects />} />
            <Route path="/Portfolio/cv" element={<Curriculum />} />
            <Route path="/Portfolio/about" element={<About />} />
          </Routes>
        </main>
        <RightSideBar />
      </div>
    </Router>
  );
}

export default App;
