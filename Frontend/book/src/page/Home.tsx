import Navbar from "../componement/Navbar";
import Heropart from "../componement/Heropart";
import Onebook from "../componement/Onebook";
import { useEffect, useState } from "react";

export default function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7137/api/LibraryBook")
            .then(d => d.json())
            .then(res => {
                setBooks(res);
            })
    }, []);

    return (
        <>
            <Navbar />

            <div className="main-wrapper ">
                <Heropart />

                <section className="section blog-wrap bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    {books.map((book: any) => (
                                        <Onebook key={book.id} title={book.name}  author={book.author}  imageUrl={book.imageUrl} desc={book.description}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
