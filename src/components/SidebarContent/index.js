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

const sidebarMapping = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "Find",
    link: "/find",
  },
  {
    name: "List",
    link: "/create",
  },
  {
    name: "Messages",
    link: "/messages",
  },
];

const renderLinks = () => {
  return sidebarMapping.map((link, index) => (
    <a key={index} href={link.link} style={styles.sidebarLink}>
      {link.name}
    </a>
  ));
};

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  return (
    <Pane title={props.username ? props.username : "Username"} style={style}>
      <div style={styles.content}>
        <div style={styles.divider} />
        {renderLinks()}
      </div>
    </Pane>
  );
};

export default SidebarContent;
