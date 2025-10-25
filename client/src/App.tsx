import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(<Route></Route>));
  return (
    <div className="text-3xl underline text-red-500">Tailwind is working</div>
  );
};

export default App;
