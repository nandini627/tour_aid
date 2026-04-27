import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import HospitalList from './pages/HospitalList';
import HospitalDetail from './pages/HospitalDetail';
import Emergency from './pages/Emergency';
import About from './pages/About';
import HelpSupport from './pages/HelpSupport';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-doctor" element={<HospitalList />} />
          <Route path="/hospital/:id" element={<HospitalDetail />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<HelpSupport />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
