import { Box, Container, Typography } from "@mui/material";

import headerBackground from "../assets/pattern-bg.png";
import AddressForm from "./AddressForm";

const Header = () => {
  return (
    <Box
      width="100%"
      height="30vh"
      sx={{
        background: `url(${headerBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography color="white" variant="h4" textAlign="center" padding="2rem">
        IP Address Tracker
      </Typography>
      <AddressForm />
    </Box>
  );
};

export default Header;