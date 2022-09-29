import React from 'react';
// @ts-ignore
import { Link, Outlet } from 'umi';

export default function Layout() {
  return (
    <div className="relative">
      <Outlet />
    </div>
  );
}