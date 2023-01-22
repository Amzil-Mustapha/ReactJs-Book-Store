import React from "react";
import Book from "./Book";

let books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL127_SR127,127_.jpg",
    title: "The 48 Laws of Power",
    Price: "$13.59",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL254_SR254,254_.jpg",
    title: "It Ends with Us: A Novel",
    Price: "$9.99",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL254_SR254,254_.jpg",
    title: "Atomic Habits",
    Price: "$14.11",
  },
  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/81PuKheA8xL._AC_UL254_SR254,254_.jpg",
    title: "Rich Dad Poor Dad",
    Price: "$7.68",
  },
  {
    id: 5,
    img: "https://images-na.ssl-images-amazon.com/images/I/A1YhM3oRFbL._AC_UL254_SR254,254_.jpg",
    title: "The Creative Act: A Way of Being",
    Price: "$19.50",
  },
  {
    id: 6,
    img: "https://images-na.ssl-images-amazon.com/images/I/41ZLnc34EiL._AC_UL254_SR254,254_.jpg",
    title: "Verity",
    Price: "$10.98",
  },
  {
    id: 7,
    img: "https://images-na.ssl-images-amazon.com/images/I/71E8VNPC1dL._AC_UL127_SR127,127_.jpg",
    title: "Ugly Love: A Novel",
    Price: "$9.78",
  },
  {
    id: 8,
    img: "https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL127_SR127,127_.jpg",
    title: "Where the Crawdads Sing",
    Price: "$9.98",
  },
  {
    id: 9,
    img: "https://images-na.ssl-images-amazon.com/images/I/91+NmjDsLOL._AC_UL127_SR127,127_.jpg",
    title: "Regretting You",
    Price: "$8.07",
  },
];

export default function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}
