import { Fragment } from "react";
import styles from "./Layout.module.css";
import React from "react";
import Main from "./Main";

const Layout = (props) => {
  return (
    <Fragment>
      <Main />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
