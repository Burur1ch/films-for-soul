import logo from "../assets/media/header/logo.png";

function MainHeader() {
  return (
    <header className="h-14 bg-[#111] w-full border-b-2 border-[#c00]">
      <div className="flex items-center justify-between px-4 w-5xl mx-auto h-full">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
        <div className="flex flex-row gap-3 items-center cursor-pointer">
          <button className="text-white hover:text-gray-300">Главная</button>
          <button className="text-white hover:text-gray-300">Сериалы</button>
          <button className="text-white hover:text-gray-300">Фильмы</button>
          <button className="text-white hover:text-gray-300">Новинки</button>
          <button className="text-white hover:text-gray-300">Мой список</button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300">Войти</button>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
