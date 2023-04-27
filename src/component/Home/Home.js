import React, { Fragment, useEffect, useState } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { Alert, AlertTitle } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [alertProps, setAlertProps] = useState({});

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      setAlertProps({ severity: "error", title: "Error", message: error });
      setShowAlert(true);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="SCE" />

          <div className="banner">
            <p>Welcome to SCE</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          {showAlert && (
            <Alert
              onClose={handleCloseAlert}
              severity={alertProps.severity}
              sx={{ mt: 2 }}
            >
              <AlertTitle>{alertProps.title}</AlertTitle>
              {alertProps.message}
            </Alert>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
