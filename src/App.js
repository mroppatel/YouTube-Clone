import NavBar from "./components/NavBar";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Feed from "./components/Feed";
import Watch from "./components/Watch";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body/>,
    children: [
      {
        path: '/',
        element:  <Feed />
      },
      {
        path: '/watch',
        element: <Watch />
      }
    ]
  }
]);

function App() {
  return (
    <div className="">
      <NavBar />
      <RouterProvider router={appRouter}/>      
    </div>
  );
}

export default App;
