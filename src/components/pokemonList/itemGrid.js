import { Grid } from "@mui/material";
export default function ItemGrid({ children }) {
  return (
    <Grid
      item
      xs={2}
      sm={4}
      md={3}
      lg={2}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      {children}
    </Grid>
  );
}
