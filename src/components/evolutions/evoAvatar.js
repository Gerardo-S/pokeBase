import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import styles from "../pokemonList/pokemonList.module.css";
import Avatar from "@mui/material/Avatar";

export default function EvoAvatar({ evoName, evoImage }) {
  return (
    <Grid
      sx={{ display: "flex", justifyContent: "center" }}
      item
      xs={12}
      md={4}
    >
      <Avatar sx={{ width: 200, height: 200, border: 3 }}>
        {" "}
        <img
          style={{ width: "150px", height: "150px" }}
          alt={evoName}
          srcSet={evoImage}
        />
      </Avatar>
      <Box className={styles.avatarDetailsContainer}>
        <Typography variant="subtitle2" component="div">
          {evoName} <br />
        </Typography>
      </Box>
    </Grid>
  );
}
