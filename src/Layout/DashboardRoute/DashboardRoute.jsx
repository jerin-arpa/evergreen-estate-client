import { useContext } from "react";
import { FaAlgolia, FaHome, FaUsers } from "react-icons/fa";
import { MdEmail, MdOutlineMenu, MdRealEstateAgent, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
// import UseAdmin from "../../hooks/UseAdmin";


const DashboardRoute = () => {

    const isAdmin = true;
    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="flex">
                <div className="w-72 min-h-screen bg-[#03a9fc] pt-20 text-white">
                    <div className="pl-6 mb-16 font-extrabold">
                        <h2 className="text-3xl">Evergreen </h2>
                        <p className="text-lg tracking-[1em]"><span >Estate</span></p>
                    </div>


                    <div className="mb-10">
                        <div className="flex justify-center">
                            <img className="rounded-full h-16 w-16" src={user.photoURL} alt="" />
                        </div>
                        <h2 className="text-2xl text-center">{user.displayName}</h2>
                        <p className="text-center  mb-3">{user.email}</p>

                        <div className="flex justify-center">
                            <hr className="w-1/2" />
                        </div>
                    </div>


                    <ul className="menu">
                        {
                            isAdmin ? <>
                                <li className="text-xl">
                                    <NavLink to="/dashboard/adminProfile">
                                        <FaHome></FaHome> Admin Profile</NavLink>
                                </li>
                                <li className="text-xl">
                                    <NavLink to="/dashboard/manageProperties">
                                        <MdRealEstateAgent></MdRealEstateAgent> Manage Properties</NavLink>
                                </li>
                                <li className="text-xl">
                                    <NavLink to="/dashboard/manageUsers">
                                        <FaUsers></FaUsers> Manage Users</NavLink>
                                </li>
                                <li className="text-xl">
                                    <NavLink to="/dashboard/manageReviews">
                                        <MdReviews></MdReviews>
                                        Manage Reviews</NavLink>
                                </li>
                            </> : <>
                                <li className="text-xl">
                                    <NavLink to="/dashboard/userProfile">
                                        <FaHome></FaHome> User Profile</NavLink>
                                </li>
                                <li className="text-xl">
                                    <NavLink to="/dashboard/wishlist">
                                        <MdRealEstateAgent></MdRealEstateAgent> Wishlist</NavLink>
                                </li>
                                <li className="text-xl">
                                    <NavLink to="/dashboard/propertyBought">
                                        <FaUsers></FaUsers> Property Bought</NavLink>
                                </li>
                                <li className="text-xl">
                                    <NavLink to="/dashboard/myReviews">
                                        <MdReviews></MdReviews>
                                        My Reviews</NavLink>
                                </li>
                            </>
                        }


                        <div className="divider"></div>


                        {/* Shared NavLink */}
                        <li className="text-xl">
                            <NavLink to="/">
                                <FaHome></FaHome>Home</NavLink>
                        </li>
                        <li className="text-xl">
                            <NavLink to="/ourMenu">
                                <MdOutlineMenu></MdOutlineMenu>All Properties</NavLink>
                        </li>
                        <li className="text-xl">
                            <NavLink to="/ourShop/salad">
                                <MdEmail></MdEmail>
                                Contact</NavLink>
                        </li>
                        <li className="text-xl">
                            <NavLink to="/contact"><FaAlgolia></FaAlgolia>  About
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="flex-1 bg-slate-100 h-[200px]">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardRoute;



// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import { Link } from 'react-router-dom';
// import { FaHome, FaUser, FaUsers } from 'react-icons/fa';
// import { MdReviews, MdRealEstateAgent } from 'react-icons/md';
// import { GrContactInfo } from 'react-icons/gr';

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//     }),
//     overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: `calc(${theme.spacing(7)} + 1px)`,
//     [theme.breakpoints.up('sm')]: {
//         width: `calc(${theme.spacing(8)} + 1px)`,
//     },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
//     backgroundColor: '#03a9fc',
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         width: drawerWidth,
//         flexShrink: 0,
//         whiteSpace: 'nowrap',
//         boxSizing: 'border-box',
//         ...(open && {
//             ...openedMixin(theme),
//             '& .MuiDrawer-paper': openedMixin(theme),
//         }),
//         ...(!open && {
//             ...closedMixin(theme),
//             '& .MuiDrawer-paper': closedMixin(theme),
//         }),
//     }),
// );


// const iconMap = {
//     'Admin Profile': <FaUser></FaUser>,
//     'Manage Properties': <MdRealEstateAgent></MdRealEstateAgent>,
//     'Manage Users': <FaUsers></FaUsers>,
//     'Manage Reviews': <MdReviews></MdReviews>,
// };


// const iconMap2 = {
//     'Home': <FaHome></FaHome>,
//     'All Properties': <MdRealEstateAgent></MdRealEstateAgent>,
//     'Contact': <GrContactInfo />,
// };


// export default function DashboardRoute() {
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);

//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <AppBar position="fixed" open={open}>
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         sx={{
//                             marginRight: 5,
//                             ...(open && { display: 'none' }),
//                         }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" noWrap component="div">
//                         Evergreen Estate
//                     </Typography>
//                 </Toolbar>
//             </AppBar>

//             <Drawer variant="permanent" open={open}>
//                 <DrawerHeader>
//                     <IconButton onClick={handleDrawerClose}>
//                         {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//                     </IconButton>
//                 </DrawerHeader>
//                 <Divider />
//                 <List>
//                     {['Admin Profile', 'Manage Properties', 'Manage Users', 'Manage Reviews'].map((text) => (
//                         <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//                             <ListItemButton
//                                 sx={{
//                                     minHeight: 48,
//                                     justifyContent: open ? 'initial' : 'center',
//                                     px: 2.5,
//                                 }}
//                             >
//                                 <ListItemIcon
//                                     sx={{
//                                         minWidth: 0,
//                                         mr: open ? 3 : 'auto',
//                                         justifyContent: 'center',
//                                     }}
//                                 >
//                                     {iconMap[text]}
//                                 </ListItemIcon>
//                                 <ListItemText primary={
//                                     <Link to={text === 'Admin Profile' ? '/adminProfile' : `/${text.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                                         {text}
//                                     </Link>
//                                 } sx={{ opacity: open ? 1 : 0 }} />
//                             </ListItemButton>
//                         </ListItem>
//                     ))}
//                 </List>

//                 <Divider />

//                 <List>
//                     {['Home', 'All Properties', 'Contact'].map((text) => (
//                         <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//                             <ListItemButton
//                                 sx={{
//                                     minHeight: 48,
//                                     justifyContent: open ? 'initial' : 'center',
//                                     px: 2.5,
//                                 }}
//                             >
//                                 <ListItemIcon
//                                     sx={{
//                                         minWidth: 0,
//                                         mr: open ? 3 : 'auto',
//                                         justifyContent: 'center',
//                                     }}
//                                 >
//                                     {iconMap2[text]}
//                                 </ListItemIcon>
//                                 <ListItemText primary={
//                                     <Link to={text === 'Home' ? '/' : `/${text.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                                         {text}
//                                     </Link>
//                                 } sx={{ opacity: open ? 1 : 0 }} />
//                             </ListItemButton>
//                         </ListItem>
//                     ))}
//                 </List>
//             </Drawer>
//             <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//                 <DrawerHeader />
//                 <Typography paragraph>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//                     tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//                     enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//                     imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//                     Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//                     Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//                     adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//                     nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//                     leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//                     feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//                     consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//                     sapien faucibus et molestie ac.
//                 </Typography>
//                 <Typography paragraph>
//                     Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//                     eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//                     neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//                     tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//                     sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//                     tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//                     gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//                     et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//                     tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//                     eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//                     posuere sollicitudin aliquam ultrices sagittis orci a.
//                 </Typography>
//             </Box>
//         </Box>
//     );
// }