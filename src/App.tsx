// !! Package
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// !! Package
import Home from "./Page/home";
import Comapny from "./Page/company";
import CreateJob from "./Page/create-job";
import Job from "./Page/job";
import Login from "./Page/login";
import Layout from "./Page/layout";
import Product from "./Page/product";
import Blog from "./Page/blog";
import BlogCreate from "./Page/blog/create";
import Dashboard from "./Page/dashboard/index";
import News from "./Page/news/index";
// !! Middleware

// !! Route
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/companies/:id" element={<Comapny />} />
        <Route path="/jobs/job/:id" element={<Job />} />
        <Route path="/jobs/new" element={<CreateJob />} />{" "}
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/create" element={<BlogCreate />} />
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        <Route path="/news" element={<News />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
