import { Box, Grid } from "@mui/material";
import styles from "../../components/pokemonList/pokemonList.module.css";

export default function ListContainer({ children }) {
  return (
    <Box className={styles.pokemonListWrapper}>
      {" "}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          rowSpacing={{ xs: 2, md: 8 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 10, lg: 8, xl: 12 }}
          // columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {children}
        </Grid>
      </Box>
    </Box>
  );
}
