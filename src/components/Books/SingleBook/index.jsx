import React from "react";

const SingleBook = ({ book }) => {
  const { author, book_image, book_review_link, description, rank, title } = book;

  return (
    <>
      <div className="row my-3">
        <div className="col-2">
          <img className="w-100" src={book_image} alt={title} />
        </div>
        <div className="col-10">
          <h2 className="fw-bold">
            #{rank} {title}
          </h2>
          <p className="book-author">{author}</p>
          <p>{description}</p>
          {book_review_link && (
            <a href={book_review_link}>
              <button className="btn btn-dark">Read Full Review</button>
            </a>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default SingleBook;
