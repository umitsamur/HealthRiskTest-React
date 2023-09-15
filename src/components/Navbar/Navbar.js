import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import LockOpenIcon from '@mui/icons-material/LockOpen';

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#008CBA",
  position: "static",
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  textAlign: "center",
});


const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  boxShadow: 'none'
}
const linkStyle2 = {
  color: 'white',
  textDecoration: 'none',
  boxShadow: 'none'
}

const Navbar = ({isLoggedIn, handleLogout}) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar>
        <Toolbar>
          {isMobile ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : ( 
            <Box sx={{ display: "flex", alignItems: "center"}}>
               <Box sx={{ flexGrow: 1 }}>
                <StyledTypography variant="h6" component="div">
                  
                </StyledTypography>
              </Box>
              <Box sx={{ display: "flex",alignItems: "center" }}>
                <Button color="inherit"> <Link style={linkStyle} to={"/"}> Risk Form </Link> </Button>
                <Button color="inherit"> <Link style={linkStyle} to={"/hearthtest"}> Kalp Testi </Link></Button>
                <Button color="inherit"> <Link style={linkStyle} to={"/real_age"}> Gerçek Yaş </Link></Button>
                <Button color="inherit"> <Link style={linkStyle} to={"/forums"}> Forum </Link></Button>
                {/*<Button color="inherit"> <Link style={linkStyle} to={"/forumpost"}> ForumPost </Link></Button>*/}
                {
                  !isLoggedIn 
                  ?<>
                  <Button sx={{marginLeft:"auto"}} color="inherit"> <Link style={linkStyle} to={"/auth/login"}> Login </Link></Button>
                   <Button sx={{marginLeft:"auto"}} color="inherit"> <Link style={linkStyle} to={"/auth/register"}> Register </Link></Button>
                   </>
                  :
                  <IconButton style={linkStyle} onClick={handleLogout}> <Link style={linkStyle} to={"/auth/login"}> <LockOpenIcon></LockOpenIcon> </Link> </IconButton>
          }
                
              </Box>
              
              
            </Box>
          )}
        </Toolbar>
      </StyledAppBar>
      <Drawer PaperProps={{sx:{backgroundColor:"#008CBA"}}} anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          <ListItem>
            <Link style={linkStyle2} to="/"> <ListItemText primary="Risk Form" onClick={toggleDrawer(false)}/> </Link>
          </ListItem>
          <ListItem>
            <Link style={linkStyle2} to="/hearthtest"> <ListItemText primary="Kalp Testi" onClick={toggleDrawer(false)} /> </Link>
          </ListItem>
          <ListItem>
            <Link style={linkStyle2} to="/real_age"> <ListItemText primary="Gerçek Yaş" onClick={toggleDrawer(false)} /> </Link>
          </ListItem>
          <ListItem>
            <Link style={linkStyle2} to="/forums"> <ListItemText primary="Forum" onClick={toggleDrawer(false)} /> </Link>
          </ListItem>
          <ListItem>
            <Link style={linkStyle2} to="/login"> <ListItemText primary="Login" onClick={toggleDrawer(false)} /> </Link>
          </ListItem>
          <ListItem>
            <Link style={linkStyle2} to="/register"> <ListItemText primary="Register" onClick={toggleDrawer(false)} /> </Link>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;