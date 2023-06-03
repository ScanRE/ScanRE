import './App.css'
import Landing from './containers/Landing'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Landing />}></Route>
          </Routes>
      </>
  );
}

export default App
