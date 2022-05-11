import { useRef } from "react";
import { Button, TextField, Paper, styled } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MyButton = styled(Button)`
  color: white;
  background-color: hsl(0, 0%, 17%);
  width: 8%;

  :hover {
    background-color: hsl(0, 0%, 59%);
  }
`;

const MyInput = styled(TextField)(({ theme }) => ({
  width: "92%",
  border: "none",
  outline: "none",
}));

const MyPaper = styled(Paper)(({ theme }) => ({
  border: "none",
  width: "60%",
  display: "flex",
  margin: "0 auto",
  borderRadius: "15px",
  overflow: "hidden",

  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));

const AddressForm = ({ handleSearch }) => {
  const input = useRef(null);

  return (
    <div>
      <MyPaper
        elevation={10}
        sx={{
          border: "none",
          width: "60%",
          display: "flex",
          margin: "0 auto",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <MyInput
          ref={input}
          type="text"
          placeholder="Search for any IP address"
          onKeyDown={(e) => e.key === "Enter" && handleSearch(e.target.value)}
        />
        <MyButton
          onClick={() => handleSearch(input.current.value)}
          variant="contained"
        >
          <ArrowForwardIosIcon />
        </MyButton>
      </MyPaper>
    </div>
  );
};

export default AddressForm;
