import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import UserPageHeader from "./UserPageHeader";

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

  return <div>{userId ? <UserPageHeader /> : <Header />}</div>;
}
