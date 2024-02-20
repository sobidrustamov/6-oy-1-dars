import React from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="d-flex flex-column text-center">
      <div>
        <header className="p-3 bg-primary fs-2 text-uppercase">header</header>
        <main className="p-4 bg-light">
          <Outlet />
        </main>
      </div>
      <footer className="p-3 bg-dark text-white fs-3">footer</footer>
    </div>
  );
};
