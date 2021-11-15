import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Header from "../../Shared/Header/Header";
import ViewListIcon from "@mui/icons-material/ViewList";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Orders from "../Orders/Orders";
import { Button } from "@mui/material";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddReview from "../AddReview/AddReview";
import useAuth from "./../../../Hooks/useAuth";
import LoginIcon from "@mui/icons-material/Login";
import PaymentIcon from "@mui/icons-material/Payment";
import Payment from "./../Payment/Payment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ManageOrders from "../ManageOrders/ManageOrders";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "./../ManageProduct/ManageProduct";

const drawerWidth = 220;

function Dashboard(props) {
  const { window } = props;
  const { admin, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#D7FFD7", height: "100vh" }}>
      <Toolbar>
        <Typography sx={{ my: "auto" }} variant="h6" paragraph>
          PLANTOUS
        </Typography>
      </Toolbar>
      <Divider />
      <Divider />

      {admin && (
        <Box>
          <Button
            sx={{
              my: "5px",
              width: "100%",
              color: "darkgreen",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <BookmarkBorderIcon />
            <NavLink
              style={{
                textDecoration: "none",
                fontWeight: "900",
                color: "green",
                fontSize: "16px",
                marginLeft: "10px",
              }}
              to={`${url}/manageOrders`}
            >
              Manage Orders
            </NavLink>
          </Button>
          <Button
            sx={{
              my: "5px",
              width: "100%",
              color: "darkgreen",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <ShoppingCartIcon />
            <NavLink
              style={{
                textDecoration: "none",
                fontWeight: "900",
                color: "green",
                fontSize: "16px",
                marginLeft: "10px",
              }}
              to={`${url}/manageProduct`}
            >
              Manage Products
            </NavLink>
          </Button>
          <Button
            sx={{
              my: "5px",
              width: "100%",
              color: "darkgreen",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <AddShoppingCartIcon />
            <NavLink
              style={{
                textDecoration: "none",
                fontWeight: "900",
                color: "green",
                fontSize: "16px",
                marginLeft: "10px",
              }}
              to={`${url}/addProduct`}
            >
              Add A Product
            </NavLink>
          </Button>
          <Button
            sx={{
              my: "5px",
              width: "100%",
              color: "darkgreen",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <ManageAccountsIcon />
            <NavLink
              style={{
                textDecoration: "none",
                fontWeight: "900",
                color: "green",
                fontSize: "16px",
                marginLeft: "10px",
              }}
              to={`${url}/makeAdmin`}
            >
              Make Admin
            </NavLink>
          </Button>
        </Box>
      )}
      {!admin && (
        <Box>
          <Button
            sx={{
              my: "5px",
              width: "100%",
              color: "darkgreen",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <ViewListIcon />
            <NavLink
              style={{
                textDecoration: "none",
                fontWeight: "900",
                color: "green",
                fontSize: "16px",
                marginLeft: "10px",
              }}
              to="/dashboard/myOrders"
            >
              My Order
            </NavLink>
          </Button>
          <Button
            sx={{
              my: "5px",
              width: "100%",
              color: "darkgreen",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <PostAddIcon />
            <NavLink
              style={{
                color: "green",
                fontSize: "16px",
                fontWeight: "900",
                marginLeft: "10px",
                textDecoration: "none",
              }}
              to={`${url}/addReview`}
            >
              Add Review
            </NavLink>
          </Button>
          <Button
            sx={{
              my: "5px",
              width: "100%",
              color: "darkgreen",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <PaymentIcon />
            <NavLink
              style={{
                textDecoration: "none",
                fontWeight: "900",
                color: "green",
                fontSize: "16px",
                marginLeft: "10px",
              }}
              to={`${url}/payment`}
            >
              Payment
            </NavLink>
          </Button>
        </Box>
      )}
      <Button
        onClick={logout}
        sx={{
          my: "5px",
          width: "100%",
          color: "darkgreen",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <LoginIcon />
        <NavLink
          style={{
            textDecoration: "none",
            fontWeight: "900",
            color: "green",
            fontSize: "16px",
            marginLeft: "10px",
          }}
          to="/home"
        >
          Logout
        </NavLink>
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            bgcolor: "#2E7D32",
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 5, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Header></Header>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Switch>
            <Route exact path={path}>
              <Orders></Orders>
            </Route>
            <Route exact path={`${path}/myOrders`}>
              <Orders></Orders>
            </Route>
            <Route exact path={`${path}/manageOrders`}>
              <ManageOrders></ManageOrders>
            </Route>
            <Route path={`${path}/manageProduct`}>
              <ManageProduct></ManageProduct>
            </Route>
            <Route path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/addReview`}>
              <AddReview></AddReview>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
          </Switch>
        </Box>
      </Box>
    </>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
