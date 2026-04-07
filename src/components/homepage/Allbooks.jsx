import React, { use } from 'react';
import BookCard from '../../ui/BookCard';
const booksPromise = fetch("/booksData.json").then((res) => res.json())
const Allbooks = () => {
    const books = use(booksPromise);
    console.log(books, 'books')
    return (
        <div className='my-12 container mx-auto'>
            <h2 className="font-bold text-3xl text-center mb-6">Books</h2>
            {/* ১. গ্রিড লেআউট দিলে কার্ডগুলো সুন্দর দেখাবে */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* w-96 diye dekhbo */}
                {
                    books.map((book,index) => {
                        return (
                          <BookCard key={index} book={book}></BookCard>
                        )
                    })
                }
            </div>
        </div>
    );
};


export default Allbooks;