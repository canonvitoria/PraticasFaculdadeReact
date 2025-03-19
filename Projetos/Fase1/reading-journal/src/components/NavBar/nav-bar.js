import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">Biblioteca Online</div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200">Início</Link>
          </li>
          <li>
            <Link to="/sobre" className="hover:text-gray-200">Sobre</Link>
          </li>
          <li>
            <Link to="/list" className="hover:text-gray-200">Listar Livros</Link>
          </li>
          <li>
            <Link to="/add" className="hover:text-gray-200">Cadastrar Livro</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
