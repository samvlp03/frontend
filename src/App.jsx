import './App.css'
import {UserProfile, Footer, Navbar} from './components';
import Blogs from './pages/Blogs';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import {
  // Home,
  Exercise,
  Login,
  About,
  Contact,
  Welcome,
  Dashboard,
  Diagnose,
  ReportViewer,
} from './pages';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  const location = useLocation();

  // Only show Navbar if not on login page
  const hideNavbarOn = ["/login"];
  const showNavbar = !hideNavbarOn.includes(location.pathname);

  const { isLoading } = useAuth(); // Now this will work

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="w-full h-full">
    {showNavbar && <Navbar />}
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/' element={<Welcome />} />
      <Route path='/home' element={<Welcome />} />
      <Route path="/blogs" element={<Blogs/>} />
      
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/diagnose" element={<Diagnose />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/report/:reportId" element={<ReportViewer />} />
      </Route>
    </Routes>
    <Footer />
    </div>  
  );
}

export default App;

