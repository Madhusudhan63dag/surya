import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import { VideoLoadingProvider } from './context/VideoLoadingContext';


function App() {
  return (
    <VideoLoadingProvider>
      <div className="App overflow-hidden">
        <Navbar />
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
        <Six />
        <Footer />
      </div>
    </VideoLoadingProvider>
  );
}

export default App;