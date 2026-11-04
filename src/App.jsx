import { Routes, Route } from 'react-router-dom';
import PremaConsultingWebsite from './PremaConsultingWebsite';
import PartnersPage from './PartnersPage';
import SolutionsPage from './SolutionsPage';
import ApproachPage from './ApproachPage';
import ServicesPage from './ServicesPage';
import AboutPage from './AboutPage';
import FaqPage from './FaqPage';
import NotFoundPage from './NotFoundPage';

// Wrapped in BrowserRouter by main.jsx and in StaticRouter by entry-server.jsx.
function App() {
  return (
    <Routes>
      <Route path="/" element={<PremaConsultingWebsite />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/approach" element={<ApproachPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
