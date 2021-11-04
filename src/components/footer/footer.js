// import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
export default function Footer() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar
      position="absolute"
      sx={{
        top: "auto",
        bottom: 0,
        height: 112,
        background: theme.palette.primary.footerGradient,
        minWidth: "200px"
      }}
    >
      <Toolbar
        sx={{
          height: "100%",
          mx: "auto"
        }}
      >
        <Box>
          <Typography variant="subtitle2" component="div">
            Made with{" "}
            <FavoriteOutlinedIcon
              fontSize="small"
              sx={{
                color: "red"
              }}
            />{" "}
            by Gerardo Solis
          </Typography>
        </Box>
      </Toolbar>
      <Box
        sx={{
          position: "absolute",
          right: isMatch ? "10%" : 0,
          minWidth: "200px",
          mt: "10px",
          mr: isMatch ? "auto" : "15px"
        }}
      >
        <Typography variant="subtitle2" component="div">
          Pikachu Hero Image Photo by Lia on Unsplash
        </Typography>
      </Box>
    </AppBar>
  );
}
