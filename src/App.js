import { Outlet } from "react-router-dom";
import Nav from "./components/Nav.js";
// import { Box } from "@mui/material";
import { Box } from "@mui/material";
import Footer from "./components/Footer.js";
const App = () => {
  return (
    <Box width={"400px"} sx={{ width: { xl: "1488px" } }} m="auto">
      <Nav />
      <Outlet />
      <Footer />
    </Box>
  );
};
export default App;
