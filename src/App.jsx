import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Pagination from "./Pagination"
import Home from "./Home"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/pagination-and-autoscroll">
        <Route index element={<Home></Home>} />
        <Route
          path="/pagination-and-autoscroll/pagination"
          element={<Pagination></Pagination>}
        />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
