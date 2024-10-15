import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Creat from "./Creat";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
    <div className="App">
        <NavBar />
      <div className="component">
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/creat"  element={<Creat />} />
        <Route path="/blogs/:id" element={<BlogDetails/>} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
