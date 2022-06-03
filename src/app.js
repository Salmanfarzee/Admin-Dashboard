import React from "react";
import Login from "./Components/login";

import Dashboard from "./Components/dashboard";
import Profiles from "./Components/profiles";
import Meetings from "./Components/meetings";
import Vendors from "./Components/vendors";
import { AppContextProvider } from "./AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Components/users";
import Jobdescription from "./Components/jobdescription";
import Templates from "./Components/templates";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<Login />}></Route>

          <Route path="/" element={<Dashboard />}>
            <Route path="profiles" element={<Profiles />} />
            <Route path="meetings" element={<Meetings />} />
            <Route path="vendors" element={<Vendors />} />
            <Route path="templates" element={<Templates />} />
            <Route path="jobdescription" element={<Jobdescription />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
