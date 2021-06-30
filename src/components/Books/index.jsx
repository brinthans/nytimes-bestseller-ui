import React, { useState, useEffect } from "react";
import SingleBook from "./SingleBook";
import { getBestSeller } from "../../services/BookService";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { books } = await getBestSeller();
        setBooks(books);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <div className="my-5">
        <h1 className="mb-5">NYTimes Best Sellers - Hardcover Fiction</h1>
        <section>
          {books.map((book) => (
            <SingleBook book={book} key={book.primary_isbn10} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Books;
