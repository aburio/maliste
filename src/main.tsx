import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/error";
import {
  ListDetails,
  loader as listDetailsLoader,
} from "./routes/lists/list-details";
import { ListsTable } from "./routes/lists/lists-table";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "lists",
        element: <ListsTable />,
        children: [
          {
            id: "ListDetails", // Can be use to retrieve loader query in childrens with const query = useRouteLoaderData("listDetails");
            path: ":listId",
            element: <ListDetails />,
            loader: listDetailsLoader,
            children: [
              {
                path: "edit",
                element: <div></div>,
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
