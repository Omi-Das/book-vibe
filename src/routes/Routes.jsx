import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Homepage/Homepage";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/Books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children: [
      {
        index: true,
        element: <Homepage/>,
      },
      {
       path: "/books",
       element: <Books/>,
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
        // (2).Method
      }
    ],
    errorElement: <ErrorPage>
    </ErrorPage>
  },
  // {
  //   path:"/books",
  //   element: "books"
  // }
]);
