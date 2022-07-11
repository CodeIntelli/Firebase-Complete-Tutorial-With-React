import { Button } from "@material-tailwind/react";
import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import BookDataService from "../Services/book.services";
const Table = ({ books }) => {
  console.log(books);
  let data = [
    {
      title: "Title1",
      author: "author 1",
      price: "$230",
    },
    {
      title: "Title2",
      author: "author 2",
      price: "$230",
    },
    {
      title: "Title3",
      author: "author 3",
      price: "$230",
    },
  ];

  return (
    <>
      <table className="table-auto mx-auto w-1/2 border border-grey-500 ">
        <thead>
          <tr className=" border border-grey-500">
            <th className="border border-grey-500">Sr No.</th>
            <th className="border border-grey-500">Book Title</th>
            <th className="border border-grey-500">Book Author</th>
            <th className="border border-grey-500">Book Price</th>
            <th className="border border-grey-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((bookData, index) => {
            return (
              <tr className="text-center border border-grey-500 " key={index}>
                <td className="border border-grey-500">{index + 1}.</td>
                <td className="border border-grey-500">{bookData.title}</td>
                <td className="border border-grey-500">{bookData.author}</td>
                <td className="border border-grey-500">{`$${bookData.price}`}</td>
                <td className="border border-grey-500">
                  <Button
                    style={{
                      padding: 8,
                      marginRight: 12,
                      borderRadius: 6,
                    }}
                    className="bg-yellow-700"
                  >
                    <span
                      className="text-white"
                      style={{
                        height: "12px",
                        width: "12px",
                        marginTop: "-3px",
                      }}
                    >
                      <box-icon name="edit"></box-icon>
                    </span>
                  </Button>
                  <Button
                    style={{
                      padding: 8,
                      borderRadius: 6,
                      color: "#ffffff",
                    }}
                    className="bg-red-600 text-white"
                  >
                    <span
                      className="text-white"
                      style={{
                        height: "12px",
                        width: "12px",
                        marginTop: "-3px",
                      }}
                    >
                      <box-icon name="message-alt-x"></box-icon>
                    </span>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
