import './index.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
// import Download from './pages/Download';
// import Support from './pages/Support';
// import About from './pages/About';
// import SignUp from './pages/SignUp';
// import UploadSong from './pages/UploadSong';
// import MusicPlayer from './pages/MusicPlayer';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/download" element={<Download />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/uploadsong" element={<UploadSong />} />
          <Route path="/musicplayer" element={<MusicPlayer />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
