"use client";

import React from "react";
import TopMenu from "./includes/MainHeader";

export default function MainLayout({ children }) {
  return (
    <>
      <div id="MainLayout" className="min-w-[1050px] max-w-[1300px] max-auto">
        <div>
          <TopMenu />
        </div>
      </div>
    </>
  );
}
