import {
    createBrowserRouter,
  } from "react-router-dom";
import Landingpage from "../Landing/Landingpage";
import GalleryScreen from "../User/GalleryScreen";
import PostDetails from "../User/PostDetails";
import Wrapper from "../Layout/Wrapper";
import ProfileDetails from "../User/ProfileDetails";
import ToDo from "../User/ToDo";
  
const router = createBrowserRouter([
    {
        path: "/",
        element: (<Landingpage />),
    },
    {
        path: "/",
        element: (<Wrapper />),
        children : [
            {
                path : '/user/ProfileDetails',
                element : <ProfileDetails />
            },
            {
                path: "/user/PostDetails",
                element: (<PostDetails />),
            },
            {
                path: "/user/GalleryScreen",
                element: (<GalleryScreen />),
            },
            {
                path: "/user/ToDo",
                element: (<ToDo />),
            },
        ]
    },
    
]);

  export default router