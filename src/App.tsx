import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />;
    </BrowserRouter>
  );
}

export default App;
