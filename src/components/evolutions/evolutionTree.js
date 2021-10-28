import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import EvoAvatar from "./evoAvatar";

export default function EvolutionTree({ evoList }) {
  return (
    <Grid
      sx={{ position: "relative", bottom: "0px" }}
      container
      item
      spacing={2}
      md={12}
      sm={6}
      xs={12}
    >
      <Grid
        item
        display="flex"
        justifyContent="center"
        xs={12}
        md={12}
        sx={{ mt: "10%" }}
      >
        <Typography variant="subtitle1" component="div" sx={{ pb: 2 }}>
          Evolution Tree
        </Typography>
      </Grid>

      {evoList.map((avatarDetails, index) => {
        return (
          <EvoAvatar
            key={index + avatarDetails.name}
            evoName={avatarDetails.name}
            evoImage={
              avatarDetails.sprites.other["official-artwork"].front_default
            }
          />
        );
      })}
    </Grid>
  );
}
