import React from "react";
import "./header.css";
import { CommonButton } from "../../Common/Button/button";
import Logo from "../../assets/logo.png";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  window?: () => Window;
}
const drawerWidth = 240;

const Header = (props: Props) => {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const navigate = useNavigate();
  return (
    <div>
      <div className="header-top-container">
        <div className="header-logo-section">
          <section>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, ml: 1, display: { sm: "none" } }}
              >
                <MenuIcon style={{ width: "35px", height: "35px" }} />
              </IconButton>
              <img className="responsive-image" src={Logo} alt="Logo" />
            </Toolbar>
          </section>
        </div>

        <Box component="nav">
          <Drawer
            style={{ backgroundColor: "#D9D9D9" }}
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Box
              onClick={handleDrawerToggle}
              className="toggle-container"
              sx={{ textAlign: "center" }}
            >
              <Typography variant="h5" sx={{ my: 2 }}>
                CodeVirt
              </Typography>
              <Divider />
              <ul>
                <li className="list-style">
                  <Link style={{ color: "white" }} to="/">
                    Home
                  </Link>
                </li>
                <li className="list-style">
                  <Link style={{ color: "white" }} to="About">
                    About
                  </Link>
                </li>
                <li className="list-style">
                  <Link style={{ color: "white" }} to="Contact">
                    Contact
                  </Link>
                </li>
                <li className="list-style">
                  <Link style={{ color: "white" }} to="Blog">
                    Platforms
                  </Link>
                </li>

                <li className="list-style">
                  <Link style={{ color: "white" }} to="Services">
                    Services
                  </Link>
                </li>
              </ul>
            </Box>
          </Drawer>
        </Box>

        <div className="header-content-section">
          <ul>
            <li className="list-style">
              <Link style={{ color: "black" }} to="/">
                Home
              </Link>
            </li>
            <li className="list-style">
              <Link style={{ color: "black" }} to="About">
                About
              </Link>
            </li>
            <li className="list-style">
              <Link style={{ color: "black" }} to="Blog">
                Platforms
              </Link>
            </li>

            <li className="list-style">
              <Link style={{ color: "black" }} to="Services">
                Services
              </Link>
            </li>
            <li className="list-style get-in-touch">
              <Link style={{ color: "black" }} to="Contact">
                <CommonButton style={{ width: "120px" }}>
                  Get In touch
                </CommonButton>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
