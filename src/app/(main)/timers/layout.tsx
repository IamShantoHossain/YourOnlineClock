import React from "react";

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      {/* <TimersHeader /> */}
      {children}
    </div>
  );
};

export default Layout;
