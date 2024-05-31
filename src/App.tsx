import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Page/home";
import Comapny from "./Page/company";
import CreateJob from "./Page/create-job";
import Job from "./Page/job";
import Login from "./Page/login";
import Layout from "./Page/layout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/companies/:id" element={<Comapny />} />
        <Route path="/jobs/job/:id" element={<Job />} />
        <Route path="/jobs/new" element={<CreateJob />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
