import { Box } from "@mui/material";

export default function BodyContentContainer({ isMatch, children }) {
  return (
    <Box
      sx={{
        maxWidth: "50%",
        mx: "auto",
        mt: isMatch ? "20px" : "125px"
      }}
    >
      {children}
    </Box>
  );
}
