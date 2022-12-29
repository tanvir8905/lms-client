import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blogs/Blog";
import Contact from "./pages/Contact/Contact";
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Pricing from "./pages/Pricing/Pricing";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import Teachers from "./pages/Teachers/Teachers";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
