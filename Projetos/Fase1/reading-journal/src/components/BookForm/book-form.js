import { useState } from "react";

function BookForm({ addBook }) {
  const [formData, setFormData] = useState({ title: "", author: "", gender: "", date: ""});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.author) {
      addBook(formData);
      setFormData({ title: "", author: "", gender: "", date: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Novo Livro</h2>

      <label htmlFor="title">Título:</label>
      <input type="text" id="title" name="title" placeholder="Título" value={formData.title} onChange={handleChange} required />

      <label htmlFor="author">Autor:</label>
      <input type="text" id="author" name="author" placeholder="Autor" value={formData.author} onChange={handleChange} required />

      <label htmlFor="gender">Gênero:</label>
      <input type="text" id="gender" name="gender" placeholder="Gênero" value={formData.gender} onChange={handleChange} required />

      <label htmlFor="date">Data:</label>
      <input type="date" id="date" name="date" placeholder="Data" value={formData.date} onChange={handleChange} required />


      <button type="submit">Adicionar Livro</button>
    </form>
  );
}

export default BookForm;
