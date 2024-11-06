import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Register';
import Dashboard from './pages/Dashboard';
import Content from './pages/Content';
import BlogDetails from './pages/BlogDetails';
import EventDetails from './pages/EventDetails';
import FindHelp from './pages/FindHelp';
import FacilityDetails from './pages/FacilityDetails';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import BookTherapy from './pages/BookTherapy';
import AccessResources from './pages/AccessResources';
import JoinSupportGroup from './pages/JoinSupportGroup';
import AssessmentPage from './pages/AssessmentPage';


function App() {

  return (
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/content" element={<Content />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/event/:id" element={<EventDetails />} />
      <Route path="/find-help" element={<FindHelp />} />
      <Route path="/facility/:id" element={<FacilityDetails />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/book-therapy" element={<BookTherapy />} />
      <Route path="support-group" element={<JoinSupportGroup />} />
      <Route path="assesments" element={<AssessmentPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
