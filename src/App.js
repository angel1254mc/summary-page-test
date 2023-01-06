import logo from './logo.svg';
import './App.css';
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import Summary from './components/Summary/Summary';
import Detailed from './Detailed';

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Detailed/>}>
        <Route path="" element={<Summary/>}/>
        <Route path="summary" element={<Summary/>}/>
        <Route path="solicitation" element={<Summary/>}/>
        <Route path="Notes" element={<Summary/>}/>
        <Route path="Team" element={<Summary/>}/>
        <Route path="Tasks" element={<Summary/>}/>
        <Route path="Documents" element={<Summary/>}/>
        <Route path="Score" element={<Summary/>}/>
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
