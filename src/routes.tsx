import { Route, Routes } from "react-router-dom";
import Container from "./components/container";
import Lgas from "./pages/lgas";
import Page404 from "./pages/page404";
import PollingUnits from "./pages/pollingUnit";
import PollingUnitResult from "./pages/pollingUnit/results";
import Create from "./pages/pollingUnit/create";

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Container />}>
        <Route index element={<PollingUnits />} />
        <Route path="/lga" element={<Lgas />} />
        <Route path="/create/:id" element={<Create />} />
        <Route path=":id" element={<PollingUnitResult />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default Router;
