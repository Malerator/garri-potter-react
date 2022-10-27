import Home from "./pages/Home/Home.jsx";
import { Like } from "./pages/Like/Like.jsx";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/like",
    element: <Like />,
  },
];
