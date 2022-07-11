import { Input, Button, Alert } from "@material-tailwind/react";
import { useState } from "react";
import BookDataService from "../Services/book.services";
// import {}
const Form = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);

  const AddBooks = async (e) => {
    e.preventDefault();
    if (title === "" || author === "" || price === "") {
      return setMessage({ error: true, msg: "Please Fill All Field Properly" });
    }
    let newBook = {
      title,
      author,
      price,
    };
    try {
      await BookDataService.addBooks(newBook);
      setMessage({ error: false, msg: "New Book Added Successfully" });
    } catch (error) {
      setMessage({ error: true, msg: error.message });
    }
    setTitle("");
    setAuthor("");
    setPrice("");
    // if (show) {
    //   setTimeout(() => {
    //     setShow(false);
    //   }, 2000);
    // }
  };

  return (
    <>
      <h1 className="text-white bg-black p-4 flex justify-center items-center text-xl font-bold">
        Library Firebase CRUD
      </h1>
      <div className="container px-5 py-24 mx-auto">
        <form onSubmit={AddBooks}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            {message?.msg && (
              <Alert
                show={show}
                className="mb-8"
                color={message.error ? "red" : "green"}
                dismissible={{
                  onClose: () => setShow(false),
                }}
              >
                {message.error ? message.msg : "Book Added Successfully"}
              </Alert>
            )}
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <Input
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    variant="outlined"
                    label="Book Title"
                    value={title}
                    onChange={(e) => {
                      // console.log(e.target.value);
                      setTitle(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <Input
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    variant="outlined"
                    label="Book Author"
                    value={author}
                    onChange={(e) => {
                      // console.log(e.target.value);
                      setAuthor(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <Input
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    variant="outlined"
                    label="Book Price"
                    value={price}
                    onChange={(e) => {
                      // console.log(e.target.value);
                      setPrice(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <Button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded "
                >
                  <span
                    className="text-white"
                    style={{
                      height: "12px",
                      width: "12px",
                      marginRight: "22px",
                      marginTop: "-3px",
                    }}
                  >
                    <box-icon
                      type="solid"
                      color="white"
                      name="book-add"
                    ></box-icon>
                  </span>
                  Add Book
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
