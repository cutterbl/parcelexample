import React from "react";
import * as styles from "./MyComponent.module.scss";

export default function MyComponent(props) {
  return <div className={styles.myCustomClass} {...props} />;
}
