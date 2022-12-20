//import { useMediaQuery } from "react-responsive";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import ExpenseReport from "./pages/udemy/react/expenseReport/Index";
import ReduxPractice from "./pages/udemy/react/reduxPractice/Index";

function App() {
  // const isPc = useMediaQuery({
  //   query: "(min-width:1024px)",
  // });
  // const isTablet = useMediaQuery({
  //   query: "(min-width:768px) and (max-width:1023px)",
  // });
  // const isMobile = useMediaQuery({
  //   query: "(max-width:767px)",
  // });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/udemy/react/expenseReport" element={<ExpenseReport />} />
        <Route path="/udemy/react/reduxPractice" element={<ReduxPractice />} />
      </Route>
    </Routes>
  );
}

export default App;
