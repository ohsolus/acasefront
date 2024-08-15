import { Outlet, ScrollRestoration } from "react-router-dom";

import { Footer } from "./footer";

export function BasePage({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        {children ?? <Outlet />}

        <Footer />
      </div>

      <ScrollRestoration />
    </>
  );
}
