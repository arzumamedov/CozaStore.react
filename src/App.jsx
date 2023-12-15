import { BrowserRouter, Route, Routes, } from "react-router-dom";
import './App.css';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import BasketPage from "./pages/BasketPage";
import WishlistPage from "./pages/WishlistPage";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/:detail" element={<Detail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
