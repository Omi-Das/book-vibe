import React, { use, useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookProvider';

//1.(Method) const booksPromise = fetch("/booksData.json").then((res) => res.json())
const BookDetails = () => {
    // const params = useParams()
    const {bookId}  = useParams()
    console.log(typeof bookId, "id")

    // const books = use(booksPromise )
    const books = useLoaderData()
    // console.log(books, "books: ")
    const expectedBook = books.find((book) => book.bookId === Number(bookId))
    // console.log(expectedBook, "expectedBook")
    //keno Number dewa laglo
   // Remove 'bookId' from the list below to avoid the redeclaration error
    // const{bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook
    const{bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook

const {handleMarkAsRead, storedBooks, handleWishList } = useContext(BookContext)
//destructing korai mark as read e handleMarkAsRead likhte partechi

  return (
       <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
  <figure className='w-full flex items-center justify-center bg-gray-100 rounded-xl'>
    <img
      src={image}
      className='h-[400px]'
      alt="Album" 
      />
  </figure>
  <div className="card-body space-y-3 flex-1">
    <h2 className="card-title text-2xl">{bookName}</h2>
    <p className='card-title'>By: {author}</p>
    <p className='py-2 border-y'>{category}</p>
    <p className=''>Review: {review}</p>
      <div className="card-body">
   <div className="flex gap-2">
         {tags.map((tag, index) => (
     <div key={index} className='badge text-green-500 bg-green-100 font-bold'>
                           {tag}
                    </div>
                          ))}
        </div>
    <div className=" border-t space-y-3">
        <div className='flex justify-between items-center gap-2'>
            <span>Number of Pages:</span> <span>{totalPages}</span>
        </div>
          <div className='flex justify-between items-center gap-2'>
            <span>publisher:</span> <span>{publisher}</span>
        </div>
          <div className='flex justify-between items-center gap-2'>
            <span>Publish time:</span> <span>{yearOfPublishing}</span>
        </div>
     <div className="flex items-center gap-2">
         <button className="btn" onClick={() => handleMarkAsRead(expectedBook)}>Mark as Read</button>
          <button className="btn btn-primary" onClick={()=>handleWishList(expectedBook)}>Add to Wishlist</button>
     </div>
    </div>
  </div>
</div>
</div>
    );

};

export default BookDetails;