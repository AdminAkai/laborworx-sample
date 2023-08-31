import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WorkerProfile from "containers/WorkerProfile";

import AppNavbar from "components/AppNavbar";

import "fonts/Poppins-Regular.ttf";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <Router basename="/laborworx-sample">
      <AppNavbar />
      <Routes>
        <Route path="/*" element={<WorkerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
