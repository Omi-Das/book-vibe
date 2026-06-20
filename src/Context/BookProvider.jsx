import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext()
const BookProvider = ({children}) => {
    const [storedBooks, setStoredBooks] = useState([])
    const [wishList, setWishList] =
    useState([])
    const handleMarkAsRead = (currentBook) => {
        // step 1: store book id or store book object
        // step 2: where to store 
        // step 2: array or collection
        // step 3: If the book is already exist then show alert or toast
        // step 4: If not then add the book in the array or collection
    
        const isExistBook = storedBooks.find(
            (book) => book.bookId === currentBook.bookId,
        )
    
        if(isExistBook){
            toast.error("The book is already exist!!")
        }
    
        else{
            setStoredBooks([...storedBooks, currentBook])
            toast.success(`${currentBook.bookName} is added to read list`)
        }
    
         console.log(currentBook,storedBooks, "BookId")
    
    }
    const handleWishList = (currentBook) => {
        // step 1: store book id or store book object
        // step 2: where to store 
        // step 2: array or collection
        // step 3: If the book is already exist then show alert or toast
        // step 4: If not then add the book in the array or collection
    // const isExistInReadList = 
    //     storedBooks.find((book) = book.bookId === currentBook.bookId)

    // if(isExistInReadList){
    //     toast.error("This book is already in read list")
    //     return
    // }
    const isExistInReadList = storedBooks.find(
        (book) => book.bookId === currentBook.bookId
    )
    if(isExistInReadList){
        toast.error("this book is already in read list")
        return
    }

        const isExistBook = wishList.find(
            (book) => book.bookId === currentBook.bookId,
        )
    
        if(isExistBook){
            toast.error("The book is already exist")
        }
    
        else{
            setWishList([...wishList, currentBook])
            toast.success(`${currentBook.bookName} is added to wish list`)
        }
    
         console.log(currentBook,storedBooks, "BookId")
    
    }
    const data = {
        // test: "demo" ,
        // age: 25
        storedBooks,
        setStoredBooks,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>;
};

export default BookProvider;