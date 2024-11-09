import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import JoinSupportGroup from './pages/JoinSupportGroup';
import AssessmentPage from './pages/AssessmentPage';
import { AuthProvider } from './context/authContext';
import ProtectedRoute from './components/ProtectedRoute.js'
import ForgotPassword from './pages/ForgotPassword.js';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/content"
            element={
              <ProtectedRoute>
                <Content />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <ProtectedRoute>
                <BlogDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/event/:id"
            element={
              <ProtectedRoute>
                <EventDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/find-help"
            element={
              <ProtectedRoute>
                <FindHelp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/facility/:id"
            element={
              <ProtectedRoute>
                <FacilityDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/book-therapy"
            element={
              <ProtectedRoute>
                <BookTherapy />
              </ProtectedRoute>
            }
          />
          <Route
            path="/support-group"
            element={
              <ProtectedRoute>
                <JoinSupportGroup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assessments"
            element={
              <ProtectedRoute>
                <AssessmentPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
