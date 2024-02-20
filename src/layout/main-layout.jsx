import React from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height:"100vh", justifyContent:"space-between"}}>
      <div>
        <header>header</header>
        <main>
          <Outlet />
        </main>
      </div>
      <footer>footer</footer>
    </div>
  );
};
