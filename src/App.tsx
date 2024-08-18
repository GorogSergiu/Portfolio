import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import Portofolio from "./pages/portofolio";
import BlogPage from "@/pages/blog";
import Contact from "./pages/contact";
import BlogPost from "./components/blog-post";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} index />
      <Route element={<Portofolio />} path="/portofolio/:section" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<BlogPage />} path="/blog/" />
      <Route element={<BlogPost />} path="/blog/:slug" />
    </Routes>
  );
}

export default App;
