import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Board from "../pages/Board";
import Candidates from "../pages/Candidates";
import Offers from "../pages/Offers";
import CreateOffer from "../pages/CreateOffer";
import EditOffer from "../pages/EditOffer";
export let routerApp = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard/",
    element: <Dashboard />,
    children: [
      {
        path: "board/",
        element: <Board />,
      },
      {
        path: "candidates/",
        element: <Candidates />,
      },
      {
        path: "offers/",
        element: <Offers />,
      },
      {
        path: "create-offer/",
        element: <CreateOffer />,
      },
      {
        path: "edit-offer:id/",
        element: <EditOffer />,
      },
    ],
  },
];
