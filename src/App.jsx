// import { useState } from "react";
// import "./App.css";
// import ListUserComponent from "./components/ListUserComponent";
// import HeaderComponent from "./components/HeaderComponent";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import UserComponent from "./components/UserComponent";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <HeaderComponent />
//         <Routes>
//           {/* //http://localhost:3000 */}
//           <Route path="/" element={<ListUserComponent />}></Route>
//           {/* //http://localhost:3000/users */}
//           <Route path="/users" element={<ListUserComponent />}></Route>
//           <Route path="/add-user" element={<UserComponent />}></Route>
//           <Route path="/edit-user/:id" element={<UserComponent />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ListUserComponent from "./components/ListUserComponent";
import HeaderComponent from "./components/HeaderComponent";
import UserComponent from "./components/UserComponent";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<ListUserComponent />} />
          <Route path="/users" element={<ListUserComponent />} />
          <Route path="/add-user" element={<UserComponent />} />
          <Route path="/edit-user/:id" element={<UserComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
