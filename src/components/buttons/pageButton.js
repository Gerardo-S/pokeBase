import * as React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";

export default function PageButton({
  btnText,
  btnColor,
  btnWidth,
  btnBgColor,
  marginTop
}) {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      sx={{
        zIndex: "2",
        color: theme.palette.primary.main,
        mr: 2,
        mt: marginTop === undefined ? 0 : marginTop,
        height: "40px",
        width: btnWidth === undefined ? "141px" : btnWidth,
        padding: 2,
        backgroundColor: btnColor === undefined ? "#0063cc" : btnColor,
        "&:hover": {
          backgroundColor: btnBgColor === undefined ? "#6188c7" : btnBgColor,
          borderColor: "#0062cc",
          boxShadow: "none"
        }
      }}
    >
      {btnText}
    </Button>
  );
}
