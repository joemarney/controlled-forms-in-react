import { useState } from "react";

export default function Bookshelf() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const addBook = [...books, newBook];
    setBooks(addBook);
    setNewBook({ title: "", author: "" });
  };
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input id="title" name="title" value={newBook.title} onChange={handleInputChange} />
          <label htmlFor="author">Author:</label>
          <input id="author" name="author" value={newBook.author} onChange={handleInputChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book) => {
          return (
            <div key={book.title} className="bookCard">
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
