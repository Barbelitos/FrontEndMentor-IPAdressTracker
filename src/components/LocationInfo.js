import { Card, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

const MyCard = styled(Card)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "space-around",
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
    height: "fit-content",
    gap: ".2rem",
    textAlign: "center",
  },
}));

const InfoText = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",

  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
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

const LocationInfo = ({ ipData }) => {
  return (
    <MyCard sx={{ textAlign: "center" }}>
      <Box>
        <Typography sx={{ color: "hsl(0, 0%, 59%)" }} variant="button">
          IP Address
        </Typography>
        <InfoText>{ipData.ip}</InfoText>
      </Box>
      <VerticalLine />
      <Box>
        <Typography sx={{ color: "hsl(0, 0%, 59%)" }} variant="button">
          Location
        </Typography>
        <InfoText>{ipData.city}</InfoText>
      </Box>
      <VerticalLine />
      <Box>
        <Typography sx={{ color: "hsl(0, 0%, 59%)" }} variant="button">
          Time Zone
        </Typography>
        <InfoText>UTC {ipData.timezone}</InfoText>
      </Box>
      <VerticalLine />
      <Box>
        <Typography sx={{ color: "hsl(0, 0%, 59%)" }} variant="button">
          ISP
        </Typography>
        <InfoText>{ipData.isp}</InfoText>
      </Box>
    </MyCard>
  );
};

export default LocationInfo;
