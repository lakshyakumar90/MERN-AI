import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

// Page components
import LandingPage from "@/components/pages/before-login/LandingPage";
import Pricing from "@/components/pages/before-login/Pricing";
import Features from "@/components/pages/before-login/Features";
import About from "@/components/pages/before-login/About";
import Contact from "@/components/pages/before-login/Contact";

// Auth components
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Policy components
import Privacy from "@/components/terms-policy/Privacy";
import Terms from "@/components/terms-policy/Terms";

// Utils and hooks
import { selectUser } from "@/utils/store/slices/userSlice";
import useAuth from "@/utils/hooks/useAuth";
import Home from "./components/pages/after-login/Home";

const App = () => {
  const user = useSelector(selectUser);
  useAuth(); // This will verify the user's token and set the user in the store

  return (
    <div className="text-black bg-[#F0F8FF] relative">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Home />
              ) : (
                <LandingPage />
              )
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
