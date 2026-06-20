import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../../ui/BookCard';

const ListedReadList = () => {
     const { storedBooks, wishList} = useContext(BookContext)
        console.log(storedBooks, "bookContext") 
        if(storedBooks.length ===0){
            return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>No Read list data found</h2>
            </div>
        }
    return (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                storedBooks.map((book,index)=> (
                    <BookCard key={index} book={book}/>
                ))
            }
          </div>
        </div>
    );
};

export default ListedReadList;