import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

import "preline/preline";
import Sidebar from "./Sidebar";
function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full">
        <Header title="Dashboard" />
        <div className="bg-main-dark" style={{ height: "calc(100vh - 4rem)" }}>
          {children}</div>
      </div>
    </div>
  );
}

export default Layout;
