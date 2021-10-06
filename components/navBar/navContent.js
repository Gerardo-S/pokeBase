import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function NavContent(props) {
  const { dataArray, logo2, theme } = props;
  const navItems = dataArray.map((text) => {
    return (
      <Typography
        key={text}
        variant="subtitle1"
        component="div"
        sx={{ mr: "20%" }}
      >
        {text}
      </Typography>
    );
  });

  return (
    <Box sx={{ display: "flex", ml: 2, pl: 2 }}>
      {navItems}
      <Image src={logo2} alt="Bolt image" width={"60px"} height={"60px"} />
    </Box>
  );
}
