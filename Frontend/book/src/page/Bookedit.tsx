import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../componement/Navbar";

export default function EditBook() {
  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate();
  const [book, setBook] = useState({
    name: "",
    author: "",
    description: "",
    imageUrl: "",
    addedDate: "",
    edition: "",
    publisher: "",
    type: "",
  });
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState<string | null>(null); // To manage error state

  // Fetch book data when the component mounts
  useEffect(() => {
    console.log("Fetching book data for ID:", id); // Debugging log

    fetch(`https://localhost:7137/api/LibraryBook/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch book data.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched book data:", data); // Debugging log
        setBook(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
        setError("Failed to load book data.");
        setLoading(false);
      });
  }, [id]);

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Book to update:", book); // Debugging log

    fetch(`https://localhost:7137/api/LibraryBook/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((response) => {
        if (response.ok) {
          alert("Book updated successfully!");
          navigate("/viewbooks");
        } else {
          alert("Failed to update the book.");
          console.error("Error response:", response);
        }
      })
      .catch((error) => {
        console.error("Error updating book:", error);
        alert("An error occurred while updating the book.");
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />

      <div className="main-wrapper">
        <div className="container mt-5">
          <h2>Edit Book</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Title</label>
              <input type="text" className="form-control" id="name" name="name" value={book.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input type="text" className="form-control" id="author" name="author" value={book.author} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" id="description"name="description"value={book.description} onChange={handleChange}/>
            </div>

            <div className="form-group">
              <label htmlFor="imageUrl">Image URL</label>
              <input type="text"className="form-control" id="imageUrl" name="imageUrl" value={book.imageUrl} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="edition">Edition</label>
              <input type="number" className="form-control" id="edition" name="edition" value={book.edition} onChange={handleChange}  />
            </div>

            <div className="form-group"> <label htmlFor="publisher">Publisher</label>
              <input type="text" className="form-control" id="publisher" name="publisher" value={book.publisher} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="type">Type</label>
              <select className="form-control" id="type" name="type" value={book.type} onChange={handleChange}>
                <option value="0">Scientific</option>
                <option value="1">History</option>
                <option value="2">Love Story</option>
                <option value="3">Children</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">Save Changes</button>
          </form>
        </div>
      </div>
    </>
  );
}
