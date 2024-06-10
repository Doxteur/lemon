import React from "react";

function Sidebar() {
  return (
    <div className="h-screen w-20 bg-main-dark grow-0 shrink-0 border-r-2 border-main-light-dark">
      <a href="#" className="w-full ">
        <img
          src="/src/assets/Images/logo.png"
          alt="Logo"
          className="m-auto my-4"
        />
      </a>
      <ul className="pt-10">
        <li className="py-2">
          <a href="/" className="block p-4 active-sidebar">
            <img
              src="/src/assets/Images/dashboardicon.svg"
              alt="Dashboard"
              className="m-auto"
            />
          </a>
        </li>
        <li className="py-2 border-r-4 border-main-dark hover:border-r-4 hover:border-main-purple">
          <a href="users" className="block p-4">
            <img
              src="/src/assets/Images/User_circle.svg"
              alt="Dashboard"
              className="m-auto"
            />
          </a>
        </li>
        <li className="py-2 border-r-4 border-main-dark hover:border-r-4 hover:border-main-purple">
          <a href="#" className="block p-4">
            <img
              src="/src/assets/Images/box.png"
              alt="Dashboard"
              className="m-auto"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
