import { Card, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

const MyCard = styled(Card)`
  position: absolute;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  height: 200px;
  width: 80%;
  z-index: 1000;
  top: 200px;
  left: 50%;
  margin-left: -40%;
  border-radius: 15px;
  padding: 2.5rem;
`;

const VerticalLine = styled(Box)`
  border-left: 1px solid hsl(0, 0%, 59%);
  opacity: 0.4;
  height: 80%;
`;

const LocationInfo = ({ locationData, location }) => {
  return (
    <MyCard variant="outlined">
      <Box>
        <Typography variant="overline">IP Address</Typography>
        <Typography variant="h5">{locationData.ip}</Typography>
      </Box>
      <VerticalLine />
      <Box>
        <Typography variant="overline">Location</Typography>
        <Typography variant="h5">{location.city}</Typography>
      </Box>
      <VerticalLine />
      <Box>
        <Typography variant="overline">Time Zone</Typography>
        <Typography variant="h5">UTC {location.timezone}</Typography>
      </Box>
      <VerticalLine />
      <Box>
        <Typography variant="overline">ISP</Typography>
        <Typography variant="h5">{locationData.isp}</Typography>
      </Box>
    </MyCard>
  );
};

export default LocationInfo;
