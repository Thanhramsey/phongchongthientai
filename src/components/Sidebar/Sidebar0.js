/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.js";

import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  const [index, setIndex] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState("");
  /*const handleClick = (index : any)  => {
    setIndex(!index);
  }*/
  const handleClick = key => {
    if (selectedIndex === key) {
      setSelectedIndex("")
    } else {
      setSelectedIndex(key)
    }
  }
  let location = useLocation();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return location.pathname === routeName;
  }
  const { color, logo, image, logoText, routes } = props;
  const subcolor = "submenu";
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;
        listItemClasses = classNames({
          [" " + classes[color]]: activeRoute(prop.layout + prop.path),
        });
        var listItemClassesSub;
        listItemClassesSub = classNames({
          [" " + classes[subcolor]]: activeRoute(prop.layout + prop.path),
        });
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path),
        });
        return (
          <React.Fragment key={key}>
          {prop.sub === 1 ? (
            <React.Fragment key={key}>
            <NavLink
              to={prop.layout + prop.path}
              className={activePro + classes.item}
              activeClassName="active"
              key={key}
            >
              <ListItem button className={classes.itemLink + listItemClasses} onClick={() => {handleClick(key)}}>
                {typeof prop.icon === "string" ? (
                  <Icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive,
                    })}
                  >
                    {prop.icon}
                  </Icon>
                ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive,
                    })}
                  />
                )}
                <ListItemText
                  primary={props.rtlActive ? prop.rtlName : prop.name}
                  className={classNames(classes.itemText, whiteFontClasses, {
                    [classes.itemTextRTL]: props.rtlActive,
                  })}
                  disableTypography={true}
                />
                {key === selectedIndex ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={key === selectedIndex} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {prop.items.map((child, index) => {
                      return(
                        <NavLink
                          to={child.layout + child.path}
                          className={activePro + classes.item}
                          activeClassName="active"
                          key={index}
                        >
                        <ListItem button className={classes.itemLink + listItemClassesSub} key={index}>
                        <ListItemText
                          primary={props.rtlActive ? child.rtlName : child.name}
                          className={classNames(classes.itemText, whiteFontClasses, {
                            [classes.itemTextRTL]: props.rtlActive,
                          })}
                          disableTypography={true}
                        />
                        </ListItem>
                        </NavLink>
                      )
                      })}
                </List>
              </Collapse>
              </NavLink>
            </React.Fragment>
           ) : (
             <NavLink
               to={prop.layout + prop.path}
               className={activePro + classes.item}
               activeClassName="active"
               key={key}
             >
             <ListItem button className={classes.itemLink + listItemClasses}>
               {typeof prop.icon === "string" ? (
                 <Icon
                   className={classNames(classes.itemIcon, whiteFontClasses, {
                     [classes.itemIconRTL]: props.rtlActive,
                   })}
                 >
                   {prop.icon}
                 </Icon>
               ) : (
                 <prop.icon
                   className={classNames(classes.itemIcon, whiteFontClasses, {
                     [classes.itemIconRTL]: props.rtlActive,
                   })}
                 />
               )}
               <ListItemText
                 primary={props.rtlActive ? prop.rtlName : prop.name}
                 className={classNames(classes.itemText, whiteFontClasses, {
                   [classes.itemTextRTL]: props.rtlActive,
                 })}
                 disableTypography={true}
               />
             </ListItem>
           </NavLink>
          )}
        </React.Fragment>
        );
      })}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <a
        href="https://vnpt.com.vn/"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive,
        })}
        target="_blank"
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
