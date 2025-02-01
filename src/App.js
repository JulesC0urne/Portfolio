import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import Profile from './components/Profile/Profile';
import RightSideBar from './components/RightSideBar/RightSideBar';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Curriculum from './components/Curriculum/Curriculum';
import About from './components/About/About';
import ThemeProvider from './themes/ThemeProvider';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';

const App = () => {
  return (
    <ThemeProvider>
      <Router basename="/portfolio">
        <div className="flex min-h-screen w-full">
          <LeftSideBar />
          <main className="flex-1 ml-64 mr-64">
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/experiences" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/cv" element={<Curriculum />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <RightSideBar />
          <ThemeSelector />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
