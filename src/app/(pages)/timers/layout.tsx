import React from "react";
import TimersHeader from "./components/TimersHeader";

const Setting = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative">
      <TimersHeader />
      {children}
    </div>
  );
};

export default Setting;
