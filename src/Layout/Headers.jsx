import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import Userpageheader from "./Userpageheader";

export default function Headers() {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const location = useLocation();

  useEffect(() => {
    const updateId = () => {
      setUserId(localStorage.getItem("userId"));
    };

    // Call updateId function when the component mounts
    updateId();

    // Add event listener for storage changes
    window.addEventListener("storage", updateId);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("storage", updateId);
    };
  }, []);

  useEffect(() => {
    // Update id state when the location changes
    setUserId(localStorage.getItem("userId"));
    
  }, [location]);

  return <div>{userId ? <Userpageheader /> : <Header />}</div>;
}

// // am using usehistory which works same as usenavigation for rendering the pushing to the next page like routing to a different page, and this is due to the react dom version am using the v5

// import React, { useEffect, useState } from "react";  
// import Header from "./Header";  
// import { useLocation } from "react-router-dom";  
// import UserPageHeader from "./Userpageheader";  

// export default function Headers() {
//   const [userId, setUserId] = useState(localStorage.getItem("userId"));  
//   const location = useLocation();

//   useEffect(() => {
//     const updateId = () => {
//       setUserId(localStorage.getItem("userId"));
//     };

//     updateId();  // Initial call to update userId from localStorage
//     window.addEventListener("storage", updateId);

//     return () => {
//       window.removeEventListener("storage", updateId);
//     };
//   }, []);

//   useEffect(() => {
//     // Update userId when location changes
//     setUserId(localStorage.getItem("userId"));
//   }, [location]);

//   // Check if we are on the sign-in or sign-up pages
//   const isAuthPage = location.pathname === "/Signin" || location.pathname === "/Signup";

//   // If on sign-in or sign-up pages, return null (no header)
//   if (isAuthPage) {
//     return null;
//   }

//   // Render appropriate header based on userId
//   return <div>{userId ? <UserPageHeader /> : <Header />}</div>;
// }
