import React, { useEffect, useState } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";
import BookDataService from "./Services/book.services";

const App = () => {
  const [books, setBooks] = useState("");
  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(books);
  };
  return (
    <>
      <Form />
      <Table books={books} />
    </>
  );
};

export default App;
