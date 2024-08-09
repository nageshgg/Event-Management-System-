import "@styles/globals.css";

import HomeNavigation from "@components/HomeNavigation";
import InnerNavigation from "@components/InnerNavigation";

export default function RootLayout({ children }) {
  return (
    <div className={"h-screen bg-light-grey"}>
      <HomeNavigation />
      <InnerNavigation />
      {children}
    </div>
  );
}
