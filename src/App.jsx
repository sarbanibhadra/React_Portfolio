import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Resume from './components/pages/resume';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavTabs /> 
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="resume" element={<Resume />} />
        {/* Define a route that will have descendant routes */}
        <Route path="contact/*" element={<Contact />} />
      </Routes>
      <Footer/> 
    </Router>
  );
}

export default App;
