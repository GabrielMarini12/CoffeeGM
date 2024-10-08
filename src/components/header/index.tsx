import { Link } from "react-router-dom";
import logoImg from "../../assets/starbucks-nav-logo.svg";
import historyImg from "../../assets/sb-historias-logo.svg";
import { FaLocationDot } from "react-icons/fa6";

export function Header() {
  return (
    <header className="flex w-full items-center justify-center h-24 sticky top-0 shadow-lg shadow-slate-200 z-20 bg-slate-100">
      <div className="flex w-full max-w-7xl justify-between items-center px-4">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logoImg}
              alt="Logo da GM Coffee Company"
              className="w-14 mr-10 max-sm:mr-6"
            />
          </Link>
          <Link to="/menu">
            <p className="uppercase font-bold cursor-pointer text-sm tracking-wide hover:text-green-700">
              Menu
            </p>
          </Link>
        </div>

        <div className="flex items-center">
          <img
            src={historyImg}
            alt="Logo GM History"
            className="w-28 mr-6 max-sm:hidden"
          />
          <Link to="/lojas" className="flex">
            <FaLocationDot size={20} />
            <p className="font-semibold ml-1 cursor-pointer">
              Encontre uma loja
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
}
