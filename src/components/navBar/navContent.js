import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "../layout.module.css";
import Image from "next/image";

export default function NavContent(props) {
  const { dataArray, logo2 } = props;
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
    <Link href="/about">
      <a className={styles.aboutLinks}>
        {" "}
        {navItems}
        <Image src={logo2} alt="Bolt image" width={"60px"} height={"60px"} />
      </a>
    </Link>
  );
}
