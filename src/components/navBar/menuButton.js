import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import styles from "../layout.module.css";
export default function MenuButton(props) {
  const { open, onClick, onClose, anchorEl, text, logo2 } = props;

  const menuItemList = text.map((list) => {
    return (
      <MenuItem sx={{ color: "black" }} key={list} onClick={onClose}>
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

          backgroundColor: "#eceff1",
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
        <MenuIcon fontSize="small" />
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
        <Link href="/about">
          <a className={styles.aboutMenuItems}>
            {menuItemList}

            <MenuItem onClick={onClose}>
              <Image
                src={logo2}
                alt="Lighting Bolt"
                width="30px"
                height="30px"
              />
            </MenuItem>
          </a>
        </Link>
      </Menu>
    </div>
  );
}
