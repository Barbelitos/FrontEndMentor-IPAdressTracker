import { NoEncryption } from "@mui/icons-material";
import { Card, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

import styles from "./LocationInfo.module.css";

const MyCard = styled(Card)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "2rem",
  height: "200px",
  width: "80%",
  zIndex: "1000",
  top: "200px",
  left: "50%",
  marginLeft: "-40%",
  borderRadius: "15px",
  padding: "2.5rem",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "400px",
    gap: ".8rem",
    textAlign: "center",
  },
}));

const VerticalLine = styled(Box)(({ theme }) => ({
  borderLeft: "1px solid hsl(0, 0%, 59%)",
  opacity: "0.4",
  height: "80%",

  [theme.breakpoints.only("sm")]: {
    display: "none",
  },
}));

// `
//   border-left: 1px solid hsl(0, 0%, 59%);
//   opacity: 0.4;
//   height: 80%;
// `;

const LocationInfo = ({ ipData }) => {
  return (
    <MyCard className={styles.info_card}>
      <Box>
        <Typography color="grey" variant="overline">
          IP Address
        </Typography>
        {/* <Typography variant="h5">222.222.222.22</Typography> */}
        <Typography variant="h5">{ipData.ip}</Typography>
      </Box>
      <VerticalLine />
      <Box>
        <Typography variant="overline">Location</Typography>
        {/* <Typography variant="h5">Lisboa</Typography> */}
        <Typography variant="h5">{ipData.city}</Typography>
      </Box>
      <VerticalLine />
      <Box>
        <Typography variant="overline">Time Zone</Typography>
        {/* <Typography variant="h5">UTC +1</Typography> */}
        <Typography variant="h5">UTC {ipData.timezone}</Typography>
      </Box>
      <VerticalLine />
      <Box>
        <Typography variant="overline">ISP</Typography>
        {/* <Typography variant="h5">ISP</Typography> */}
        <Typography variant="h5">{ipData.isp}</Typography>
      </Box>
    </MyCard>
  );
};

export default LocationInfo;
