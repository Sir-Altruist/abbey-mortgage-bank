import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  ButtonBase,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Link,
  MenuItem,
  Avatar,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { menu } from "./menuItem";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreIcon from "@mui/icons-material/MoreVert";
import User from "../../assets/user.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [navState, setNavState] = useState({
    mobile: false,
    isOpen: false,
  });
  const { mobile, isOpen } = navState;
  const [open, setOpen] = useState(false);
  const handleDropClose = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const responsive = () => {
      return window.innerWidth < 900
        ? setNavState((prevState) => ({
            ...prevState,
            mobile: true,
          }))
        : setNavState((prevState) => ({
            ...prevState,
            mobile: false,
          }));
    };
    responsive();
    window.addEventListener("resize", () => responsive());

    return () => {
      window.removeEventListener("resize", () => responsive());
    };
  }, []);

  const desktopView = () => {
    return (
      <Toolbar>
        <Container className="menu">
          <Box component="div" sx={{ display: "flex" }}>
            <Typography
              variant="p"
              className="logo"
              onClick={() => navigate("/")}
            >
              pro:<span style={{ color: "#ef6c00" }}>manage</span>
            </Typography>
            <div style={{ marginLeft: "1rem" }}>
              <TextField
                id="input-with-icon-textfield"
                placeholder="Type to find something here..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            {/* </TextField> */}
          </Box>
          <Box component={"div"} style={{ display: "flex" }}>
            {menu.map(({ name, path }) => (
              <ButtonBase
                className={"menu-links"}
                {...{
                  key: name,
                  to: path,
                  component: RouterLink,
                }}
                disableRipple={true}
                disableTouchRipple={true}
                focusRipple={true}
              >
                {name}
              </ButtonBase>
            ))}
            <Box component={"div"} className="nav-icon">
              <span style={{ paddingRight: "1rem", paddingTop: "1rem" }}>
                <NotificationsNoneIcon color="action" />
              </span>
              <span style={{ paddingRight: "1rem", paddingTop: "1rem" }}>
                <Avatar alt="user" src={User} sx={{ width: 24, height: 24 }} />
              </span>
              <Typography
                variant="body2"
                color={"black"}
                sx={{ pt: 2, fontWeight: "bold" }}
              >
                Ahmad Zaky
              </Typography>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    );
  };

  const mobileView = () => {
    const menuIconOpen = () =>
      setNavState((prevState) => ({
        ...prevState,
        isOpen: true,
      }));
    const menuIconClose = () =>
      setNavState((prevState) => ({
        ...prevState,
        isOpen: false,
      }));

    return (
      <Toolbar>
        <Container>
          <Box
            component="div"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span style={{ paddingTop: ".5rem", position: "relative" }}>
              <MoreIcon color="action" onClick={handleDropClose} />
              {open && (
                <div class="dropdown">
                  <ul>
                    <li>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          paddingTop: "1rem",
                        }}
                      >
                        <NotificationsNoneIcon color="action" />
                        <Avatar
                          alt="user"
                          src={User}
                          sx={{ width: 24, height: 24 }}
                        />
                      </div>
                    </li>
                    <li>
                      <Typography
                        variant="body2"
                        align="center"
                        color={"black"}
                        sx={{ fontWeight: "bold" }}
                      >
                        Ahmad Zaky
                      </Typography>
                    </li>
                    <li>
                      <div>
                        <TextField
                          id="input-with-icon-textfield"
                          placeholder="Type to find something here..."
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </span>
            <Typography
              variant="p"
              className="logo"
              onClick={() => navigate("/")}
            >
              pro:<span style={{ color: "#ef6c00" }}>manage</span>
            </Typography>
            <IconButton onClick={menuIconOpen}>
              <MenuIcon />
            </IconButton>
            <Drawer
              {...{
                anchor: "left",
                open: isOpen,
                onClose: menuIconClose,
              }}
              className="drawer"
            >
              <div>{drawerLinks()}</div>
            </Drawer>
          </Box>
        </Container>
      </Toolbar>
    );
  };
  const drawerLinks = () => {
    return menu.map(({ name, path }) => (
      <Link
        {...{
          to: path,
          key: name,
          component: RouterLink,
        }}
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <MenuItem>{name}</MenuItem>
      </Link>
    ));
  };
  return (
    <AppBar className={"navbar"}>
      {mobile ? mobileView() : desktopView()}
    </AppBar>
  );
};

export default Navbar;
