import React, { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AppContext } from "../AppContext";

export const PrivateRoute = ({ children, redirectTo }) => {
  const { auth } = useContext(AppContext);
  let isAuthenticated = false;
  if (auth && auth.token) {
    isAuthenticated = true;
  }
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
  // return (
  //   <Route
  //     {...rest}
  //     // render={(props) =>
  //     //   isAuthenticated ? (
  //     //     <React.Fragment>
  //     //       <Element {...props} />
  //     //     </React.Fragment>
  //     //   ) : (
  //     //     <Navigate to="/auth/login" />
  //     //   )
  //     // }
  //   />
  // );
};
