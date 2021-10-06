import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";
import Image from "next/image";
export default function MenuButton(props) {
  const { open, onClick, onClose, anchorEl, text, logo2 } = props;
  const theme = useTheme();
  const menuItemList = text.map((list) => {
    return (
      <MenuItem key={list} onClick={onClose}>
        {list}
      </MenuItem>
    );
  });
  return (
    <div>
      <IconButton
        color="inherit"
        variant="contained"
        sx={{
          ml: 2,
          mr: 2,
          zIndex: 1,

          backgroundColor: theme.palette.btnPrimary.main,
          "&:hover": {
            backgroundColor: "#6188c7",
            borderColor: "#0062cc",
            boxShadow: "none"
          }
        }}
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={onClick}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        TransitionComponent={Fade}
      >
        {menuItemList}
        <MenuItem onClick={onClose}>
          <Image src={logo2} alt="Lighting Bolt" width="30px" height="30px" />
        </MenuItem>
      </Menu>
    </div>
  );
}
