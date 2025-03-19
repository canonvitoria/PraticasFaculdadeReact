import React, { useState, useEffect } from "react";import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/nav-bar";
import BookForm from "./components/BookForm/book-form";
import BookList from "./components/BookList/book-list";



const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => setBooks([...books, {id: Date.now(), ...newBook}]);
  const deleteBook = (id) => setBooks(books.filter(book => book.id !== id));
  const editBook = (id, updatedBooks) => {
    setBooks(books.map(book => (book.id === id? updatedBooks : book)))
  };

  
useEffect(() => {
  document.title = "Meu Gerenciador de Livros";
}, []);


  const Home = () => {
    useEffect(() => {
      document.title = "Reading Journal";
    }, []);
    
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">Página Inicial</h1>
        <p>Bem-vindo ao Reading Journal!</p>
      </div>
    );
  };
  
  const Sobre = () => (
    <div className="p-4">
      <h1>Sobre</h1>
      <p>Esta é uma aplicação para um CRUD de um Reading Journal. Este projeto foi elaborado na Disciplina Desenvolvimento de Sistemas Frontend do Curso de Graduação Online da PUCRS.</p>
    </div>
  );

  return (
    <Router>
      <NavBar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/list" element={<BookList books={books} deleteBook={deleteBook} editBook={editBook} />} />
          <Route path="/add" element={<BookForm addBook={addBook} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;