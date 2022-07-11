import { db } from "../firebase-config";

import {
  doc,
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "books");

class BookDataService {
  addBooks = (newBooks) => {
    return addDoc(bookCollectionRef, newBooks);
  };
  update = (id, updateBooks) => {
    const bookDoc = doc(db, "Books", id);
    console.log(bookDoc);
    return updateDoc(bookDoc, updateBooks);
  };
  delete = (id) => {
    const bookDoc = doc(db, "Books", id);
    return deleteDoc(bookDoc);
  };
  getAllBooks = () => {
    return getDocs(bookCollectionRef);
  };
  getBook = (id) => {
    const bookDoc = doc(db, "Books", id);
    return getDoc(bookDoc);
  };
}
export default new BookDataService();
