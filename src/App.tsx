import { Route, Routes } from "react-router";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import Header from "./components/Header";
import NotFoundPage from "./pages/NotFound";
import LoginPage from "./auth/Login";
import SignUpPage from "./auth/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
