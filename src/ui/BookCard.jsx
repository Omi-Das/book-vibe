import React from 'react';
import { FaRegStar } from 'react-icons/fa'
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
          // ২. এখানে একটি ইউনিক key দিতে হবে (যেমন bookId)
      <Link to={`/bookDetails/${book.bookId}`} key={book.bookId} className="card bg-base-100  shadow-sm border">
    <figure className='p-6'>
 <img src={book.image} alt={book.bookName} className='rounded-xl h-[250px]' />
                                        </figure>
                                        <div className="card-body">
                                            <div className="flex gap-2">
                                                {
                                                    book.tags.map((tag, index) => (
                                                        <div key={index} className='badge text-green-500 bg-green-100 font-bold'>
                                                            {tag}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            {/* ৩. card-title এখানে ক্লোজ হবে */}
                                            <div className="card-title">
                                                <h2 className="font-bold text-xl">{book.bookName}</h2>
                                            </div>
                                            {/* ৪. p এবং card-actions টাইটেলের বাইরে থাকবে */}
                                            <p className='font-semibold text-lg'>{book.author}</p>
                                            <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
                                                <div className="font-semibold">{book.category}</div>
                                                <div className="flex gap-2 items-center">{book.rating} <FaRegStar/></div>
                                            </div>
                                        </div>
                                    </Link> // ৫. এই div-টি কার্ডের বডি শেষ করছে
    );
};

export default BookCard;