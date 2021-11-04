import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuButton from "./menuButton";
import { useMediaQuery, useTheme } from "@mui/material";
import NavContent from "./navContent";
import Logo from "../../../public/images/pokeball.png";
import Bolt from "../../../public/images/bolt.png";
import Link from "next/link";
import styles from "../layout.module.css";
import Image from "next/image";

export const navLinks = {
  navHomeLogoAlt: "Pokeball",
  navLink1: "PokemonBase",
  navArray: ["About"]
};
export default function NavBar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, minWidth: "20%" }}>
      <AppBar
        position="static"
        sx={{
          height: 112,
          background: theme.palette.primary.navGradient
        }}
      >
        <Toolbar
          sx={{
            mx: "auto",
            width: "90%",
            height: 1,
            display: "flex",
            alignItems: "center",
            zIndex: "1"
          }}
        >
          <Link href="/">
            <a className={styles.imageHover}>
              <Image
                src={Logo}
                alt={navLinks.navHomeLogoAlt}
                width={69}
                height={65}
              />
            </a>
          </Link>
          <Link href="/pokemon/allPokemon">
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                flexGrow: 2,
                ml: "16px"
              }}
            >
              <a className={styles.navLink1}>{navLinks.navLink1}</a>
            </Typography>
          </Link>
          {isMatch ? (
            <MenuButton
              open={open}
              onClick={handleClick}
              onClose={handleClose}
              anchorEl={anchorEl}
              text={navLinks.navArray}
              logo2={Bolt}
              theme={theme}
            />
          ) : (
            <NavContent
              dataArray={navLinks.navArray}
              logo2={Bolt}
              theme={theme}
            />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
