import { Box } from "@mui/material";

export default function HomeContentContainer({ isMatch, children }) {
  return (
    <main>
      <Box
        sx={{
          maxWidth: "800px",
          ml: "15px",
          mt: "5%",
          maxHeight: "400px",
          overflow: isMatch ? "scroll" : null
        }}
      >
        {children}
      </Box>
    </main>
  );
}
