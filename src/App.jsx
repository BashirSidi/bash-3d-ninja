import { styled } from '@mui/material/styles';
import logo from './assets/cerebital_icon.png'
import {
  Toolbar,
  IconButton,
  Divider,
  List,
  Container,
  Typography,
  Select,
  MenuItem,
  Box,
  Badge,
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiDrawer from '@mui/material/Drawer';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { PlasticToy } from './components/PlasticToy';
// import HatObj from './components/HatObj';
// import GLBViewer from './components/GLBViewer';
// import { DAEViewer } from './components/DAEViewer';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: '45px',
        [theme.breakpoints.up('sm')]: {
          width: '45px',
        },
      }),
    },
  }),
);

export default function App () {

  return (
      <Box sx={{ display: 'flex' }}>
        <AppBar position="absolute" elevation={0}>
          <Toolbar
          sx={{
              
              display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
              pr: '24px',
              backgroundColor: '#FFEADD',
              boxShadow: 'none',
              color: '#f4313f',
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
            >
              <img src={logo} alt="logo" height={50} />
          </Typography>
          <Box
            sx={{
            }}
          >
            <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    IconComponent={() => (
                      <ExpandMoreIcon />
                    )}
                    sx={{
                      background: "#F2F2F2",
                      height: {xs: "42px", md: "50px"},
                      width: "400px",
                      fontWeight: 400,
                      fontSize: "16px",
                      fontFamily: "Montserrat",
                      lineHeight: "24px",
                      borderRadius: "8px",
                      padding: {xs: "8px 16px 8px 10px", md: "8px 24px 8px 24px"},
                      boxShadow: "none",
                      "& .MuiMenu-list": {
                        paddingTop: 0,
                        paddingBottom: 0,
                      },
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          border: 0,
                        },
                      "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          border: 0,
                        },
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          "& .MuiMenu-list" : {
                            paddingTop: 0,
                            paddingBottom: 0,
                          },
                          bgcolor: '#ffffff',
                          filter: "drop-shadow(4px 4px 16px rgba(0, 0, 0, 0.1))",
                          borderRadius: "0px 0px 16px 16px;",
                          marginTop: "6px",
                          '& .MuiMenuItem-root': {
                            padding: 2,
                          },
                          '& .Mui-selected': {
                            borderRadius: "4px",
                            background: "transparent",
                            borderLeft: "4px solid #f4313f",
                            borderRight: "4px solid #f4313f",
                          },
                        },
                      },
                    }}
                    // value={noteType}
                    // onChange={handleNoteTypeChange}
                    displayEmpty={true}
                    renderValue={value => value?.length ? Array.isArray(value) ? value.join(', ') : value : <Typography sx={{
                      fontWeight: 0,
                        fontSize: "16px",
                        fontFamily: "Montserrat",
                        lineHeight: "24px",
                        color: "#B2B2B2",
                    }}>Select file type:</Typography>}
                  >
                    <MenuItem value="gltf">gltf</MenuItem>
                    <MenuItem value="gltf">glb</MenuItem>
                  </Select>
          </Box>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="red">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent">
          <Divider />
          <List component="nav" sx={{mt: '55px'}}>
          <WidgetsIcon
            sx={{
              color: '#f4313f',
              width: '43px',
              border: '1px solid #f4313f',
            }}
          />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box>
            {/* <PlasticToy /> */}
            {/* <HatObj /> */}
            {/* <GLBViewer /> */}
            {/* <DAEViewer /> */}
            </Box>
          </Container>
        </Box>
      </Box>
  );
}