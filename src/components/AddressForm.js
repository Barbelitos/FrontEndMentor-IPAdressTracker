import { useRef } from "react";
import { Button, TextField, Paper, styled } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MyButton = styled(Button)`
  color: white;
  background-color: hsl(0, 0%, 17%);

  :hover {
    background-color: hsl(0, 0%, 59%);
  }
`;

const MyInput = styled(TextField)`
  width: 92%;
  border: none;
  outline: none;
`;

const AddressForm = ({ searchTerm, searchHandler, submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <Paper
        elevation={10}
        sx={{
          border: "none",
          width: "40%",
          display: "flex",
          margin: "0 auto",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <MyInput
          placeholder="Search for any IP address or domain"
          onChange={searchHandler}
          value={searchTerm}
        />
        <MyButton type="submit" variant="contained">
          <ArrowForwardIosIcon />
        </MyButton>
      </Paper>
    </form>
  );
};

export default AddressForm;
