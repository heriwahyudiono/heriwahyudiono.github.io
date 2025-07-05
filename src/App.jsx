import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} /> 
      </Routes>
    </Router>
  );
}

export default App;
