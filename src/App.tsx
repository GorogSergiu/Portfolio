import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import Portofolio from "./pages/portofolio";
import BlogPage from "@/pages/blog";
import Contact from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} index />
      <Route element={<Portofolio />} path="/portofolio" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<BlogPage />} path="/blog" />
    </Routes>
  );
}

export default App;
