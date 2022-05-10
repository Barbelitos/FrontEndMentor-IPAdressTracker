import { Box, Typography } from "@mui/material";

import headerBackground from "../assets/pattern-bg.png";
import AddressForm from "./AddressForm";

const Header = ({
  searchHandler,
  submitHandler,
  handleSearchTerm,
  searchTerm,
}) => {
  return (
    <Box
      width="100%"
      height="19rem"
      sx={{
        background: `url(${headerBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography color="white" variant="h4" textAlign="center" padding="2rem">
        IP Address Tracker
      </Typography>
      <AddressForm
        searchHandler={searchHandler}
        submitHandler={submitHandler}
        searchTerm={searchTerm}
      />
    </Box>
  );
};

export default Header;
