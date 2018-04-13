import React from "react";
import Pane from "./pane";

// Placeholder style (it's also inline so time to do some CSS wizardry at some point)
const styles = {
  sidebar: {
    width: 200,
    height: "100%",
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#757575",
    textDecoration: "none",
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575",
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "white",
  },
};

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  const links = [];

  // Placeholder data (will likely want to load the sections from some constants file/environment)
  for (let ind = 0; ind < 10; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink}>
        Mock menu item {ind}
      </a>
    );
  }

  return (
    <Pane title="INSERT USERNAME HERE" style={style}>
      <div style={styles.content}>
        <div style={styles.divider} />
        {links}
      </div>
    </Pane>
  );
};

export default SidebarContent;
