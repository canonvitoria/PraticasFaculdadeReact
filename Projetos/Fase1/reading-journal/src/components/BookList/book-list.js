import { useState } from "react";

function BookList({ books, deleteBook, editBook }) {
  const [editingBook, setEditingBook] = useState(null);
  const [formData, setFormData] = useState({ title: "", author: "", gender: "", date: "", shelf: "" });

  const startEditing = (book) => {
    setEditingBook(book.id);
    setFormData(book);
  };

  const handleEditChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editBook(editingBook, formData);
    setEditingBook(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Lista de Livros</h2>
      {books.length === 0 ? (
        <p className="text-center">Nenhum livro cadastrado.</p>
      ) : (
        <ul className="space-y-4">
          {books.map(book => (
            <li key={book.id} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
              {editingBook === book.id ? (
                <form onSubmit={handleEditSubmit} className="flex flex-col space-y-4 w-full">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleEditChange}
                    required
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder="Título"
                  />
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleEditChange}
                    required
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder="Autor"
                  />
                  <input
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleEditChange}
                    required
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder="Gênero"
                  />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleEditChange}
                    required
                    className="p-2 border border-gray-300 rounded-md"
                  />
                  <div className="flex space-x-4">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                      Salvar
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingBook(null)}
                      className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="font-semibold">{book.title}</p>
                    <p>{book.author} ({book.gender})</p>
                    <p>{book.date}</p>
                    <p>Estante: {book.shelf}</p>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => startEditing(book)}
                      className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => deleteBook(book.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
