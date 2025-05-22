import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import Seven from './components/Seven';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import { VideoLoadingProvider } from './context/VideoLoadingContext';

// Main home page component
const HomePage = () => (
  <>
    <Navbar />
    <One />
    <Two />
    <Three />
    <Four />
    <Five />
    <Six />
    <Seven />
    <Footer />
  </>
);

function App() {
  return (
    <VideoLoadingProvider>
      {/* Remove the Router wrapper but keep Routes and Route components */}
      <div className="App overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </div>
    </VideoLoadingProvider>
  );
}

export default App;