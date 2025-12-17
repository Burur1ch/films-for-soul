import logo from "../assets/media/header/logo.png";
import { useState } from "react";

function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-14 bg-[#111] w-full border-b-2 border-[#c00]">
      <div className="flex items-center justify-between px-4 max-w-7xl mx-auto h-full">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row gap-3 items-center cursor-pointer">
          <button className="text-white hover:text-gray-300 text-sm">Главная</button>
          <button className="text-white hover:text-gray-300 text-sm">Сериалы</button>
          <button className="text-white hover:text-gray-300 text-sm">Фильмы</button>
          <button className="text-white hover:text-gray-300 text-sm">Новинки</button>
          <button className="text-white hover:text-gray-300 text-sm">Мой список</button>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300 text-sm">Войти</button>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#222] border-t border-[#c00]">
          <button className="block w-full text-left px-4 py-2 text-white hover:bg-[#333]">Главная</button>
          <button className="block w-full text-left px-4 py-2 text-white hover:bg-[#333]">Сериалы</button>
          <button className="block w-full text-left px-4 py-2 text-white hover:bg-[#333]">Фильмы</button>
          <button className="block w-full text-left px-4 py-2 text-white hover:bg-[#333]">Новинки</button>
          <button className="block w-full text-left px-4 py-2 text-white hover:bg-[#333]">Мой список</button>
        </div>
      )}
    </header>
  );
}

export default MainHeader;
