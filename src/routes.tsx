import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Page404 from "./pages/page404";

function Router() {
  return (
    <Routes>
        <Route index element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default Router;
