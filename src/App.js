import { Outlet } from "react-router-dom";
import Nav from "./components/Nav.js";
// import { Box } from "@mui/material";
import { Box } from "@mui/material";
const App = () => {
  return (
    <Box>
      <Nav />
      <Outlet />
    </Box>
  );
};
export default App;
