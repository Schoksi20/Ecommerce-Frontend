import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Navigate as Redirect } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading === false && (
        <Routes>
          <Route
            {...rest}
            element={
              isAuthenticated === true ? (
                isAdmin === true && user.role !== "admin" ? (
                  <Redirect to="/login" />
                ) : (
                  <Component {...rest} />
                )
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Routes>
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
