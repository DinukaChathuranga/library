import { Link } from "react-router-dom";
import Navbar from "../componement/Navbar";
import { useEffect, useState } from "react";

export default function Viewbook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7137/api/LibraryBook") 
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  const handleDelete = (id: any) => {
    fetch(`https://localhost:7137/api/LibraryBook/delete/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setBooks(books.filter((book: any) => book.id !== id));
        } else {
          console.error("Failed to delete the book.");
        }
      });
  };

  return (
    <>
      <Navbar />

      <div className="main-wrapper">
        <table className="table col-lg-12 mt-5 m-3">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Author</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: any, index) => (
              <tr key={book.id}>
                <th scope="row">{index + 1}</th>
                <td>{book.name}</td>
                <td><img src={book.imageUrl} alt="Book Image" width="100" /></td>
                <td>{book.author}</td>
                <td>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link to={`/edit/${book.id}`}>
                        Edit
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <button onClick={() => handleDelete(book.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5zM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528zM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5z"/>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
