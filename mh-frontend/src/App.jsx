import './App.css'
import { Routes, Route } from "react-router-dom";
import Landing from './containers/landing/Landing'
import Home from './containers/Home';
import FindingDetail from './containers/FindingDetail';

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={<Home />} />
              <Route path="/findingDetail/*" element={<FindingDetail/>}/>
          </Routes>
      </>
  );
}

export default App
