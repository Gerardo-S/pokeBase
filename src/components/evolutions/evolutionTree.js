import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import useSWR from "swr";
import { getPokemonId } from "../../util/API/API";
import EvoAvatar from "./evoAvatar";

async function getEvoChain(url) {
  const response = await fetch(url);
  if (!response.ok) throw Error(response.statusText);
  return await response.json();
}

// TODO
function getEvoChainURLS(evoList) {
  let urlList = [];
  const evoURLs = [
    evoList.chain.species.url,
    evoList.chain.evolves_to[0].species.url,
    evoList.chain.evolves_to[0].evolves_to[0].species.url
  ];

  evoURLs.forEach((i) => {
    urlList.push(getPokemonId(i));
  });

  return urlList;
}

export default function EvolutionTree({ evoChainURL }) {
  const { data: evoList, error } = useSWR(evoChainURL, getEvoChain);

  //   TODO Set state for variable evoChain================================================
  //   const { data: urlList, error: err2 } = useSWR(() => getEvoChainURLS(evoList));
  //   console.log("evoURLs", evoURLs);
  //   ====================================================================================

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
      {!evoList && <h1>...isLoading</h1>}
      {evoList && (
        <>
          <EvoAvatar evoName={evoList.chain.species.name} />{" "}
          <EvoAvatar evoName={evoList.chain.evolves_to[0].species.name} />{" "}
          <EvoAvatar
            evoName={evoList.chain.evolves_to[0].evolves_to[0].species.name}
          />{" "}
        </>
      )}
    </Grid>
  );
}
