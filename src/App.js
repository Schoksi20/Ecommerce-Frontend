import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword";
import OrderSuccess from "./component/Cart/OrderSuccess";
import ResetPassword from "./component/User/ResetPassword";
import MyOrders from "./component/Order/MyOrders";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import UsersList from "./component/Admin/UsersList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import NewProduct from "./component/Admin/NewProduct";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReview";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/me/update" element={<UpdateProfile />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/password/update" element={<UpdatePassword />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/confirm" element={<ConfirmOrder />} />
        <Route
          path="/process/payment"
          element={
            <Elements
              stripe={loadStripe(
                "pk_test_51MtQJ7SDW1T3cVwoEAiGd0RbK8K4RBHnOnfg1ncbaYcj0NOGMxb4sRWyfQ4R9ETO19ljyBu9ZJha6gCcpSgnK18r00hW3D9HhC"
              )}
            >
              <Payment />
            </Elements>
          }
        />
        <Route path="/login/shipping" element={<Shipping />} />
        <Route path="/success" element={<OrderSuccess />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/product" element={<NewProduct />} />
        <Route path="/admin/product/:id" element={<UpdateProduct />} />
        <Route path="/admin/orders" element={<OrderList />} />
        <Route path="/admin/order/:id" element={<ProcessOrder />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/user/:id" element={<UpdateUser />} />
        <Route path="/admin/reviews" element={<ProductReviews />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
