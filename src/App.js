// import { Space } from "antd";
// import "./App.css";
// import AppFooter from "./Components/AppFooter"; // Adjusted import path
// import AppHeader from "./Components/AppHeader"; // Adjusted import path
// import PageContent from "./Components/PageContent"; // Adjusted import path
// import SideMenu from "./Components/SideMenu"; // Adjusted import path

// function App() {
//   return (
//     <div className="App">
//       <AppHeader />
//       <div className="SideMenuAndPageContent">
//         <SideMenu />
//         <PageContent />
//       </div>
//       <AppFooter />
//     </div>
//   );
// }

// export default App;


import React from "react";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu />
        <PageContent />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
