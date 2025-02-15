import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Home from './components/Home';
import TopNav from './components/TopNav';
import Logo from './components/Logo';
import ThemeModeToggle from './components/ThemeModeToggle';
import Dashboard from './components/Dashboard/Dashboard';
import Overview from './components/Dashboard/Overview';
import Profile from './components/Dashboard/Profile';
import Progress from './components/Dashboard/Progress';
import ProjectShowcase from './components/Dashboard/ProjectShowcase';
import Exam from './pages/exam';
import Course from './pages/courses';
import AboutUs from './pages/About';
import Settings from './components/Dashboard/settings';

const App = () => {
  return (
    <Router>
      <Logo />
      <ThemeModeToggle />
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exam" element ={<Exam />}/>
        <Route path="/courses" element = {<Course />} />
        <Route path="/about" element = {<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="progress" element={<Progress />} />
          <Route path="project-showcase" element={<ProjectShowcase />} />
        </Route>
        <Route path="/dashboard/settings" element={<Settings />} />

        </Routes>
    </Router>
  );
};

export default App;
