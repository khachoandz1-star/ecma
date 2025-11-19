// src/components/Header.jsx
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-orange-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Du Lịch </h1>

        <nav className="space-x-8">
          <Link to="/" className="hover:underline font-medium ">
            Trang chủ
          </Link>
          <Link to="/about" className="hover:underline font-medium">
            Giới thiệu
          </Link>
          <Link to="/tours" className="hover:underline font-medium">
            Tours
          </Link>
          <Link to="/contact" className="hover:underline font-medium">
            Liên hệ
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;