// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Freelancers from "./pages/Freelancers";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Header />

      <main className="pt-20 min-h-screen">
        <Routes>
          {/* Home sahifa alohida container-siz */}
          <Route path="/" element={<Home />} />

          {/* Qolgan sahifalar container ichida */}
          <Route
            path="/jobs"
            element={
              <div className="container mx-auto px-4">
                <Jobs />
              </div>
            }
          />
          <Route
            path="/freelancers"
            element={
              <div className="container mx-auto px-4">
                <Freelancers />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="container mx-auto px-4">
                <Profile />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="container mx-auto px-4">
                <Login />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div className="container mx-auto px-4">
                <Register />
              </div>
            }
          />
        </Routes>
      </main>

      {/* Footer har doim pastda */}
    <Footer />
    </>
  );
}
