import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PremaConsultingWebsite from './PremaConsultingWebsite';
import PartnersPage from './PartnersPage';
import SolutionsPage from './SolutionsPage';
import ApproachPage from './ApproachPage';
import ServicesPage from './ServicesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PremaConsultingWebsite />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;