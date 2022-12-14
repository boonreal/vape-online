import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "containers/home/Home";
import Contact from "containers/contact/Contact";
import ProductDetail from "containers/products/ProductDetail";
import ProductCategory from "containers/products/ProductCategory";
import PostList from "containers/post/PostList";
import PostDetail from "containers/post/PostDetails";
import Login from "containers/login/Login"
import {StoreProvider} from "store/";
import Register from "containers/register/Register";
import FogotPass from './containers/forgotPass/fogotPass';
import DashBoard from "containers/dashboard/DashBoard";
import PostDashBoard from "containers/dashboard/pages/postList/PostList";
import ProfileDashBoard from "containers/dashboard/pages/profile/Profile";
import SettingDashBoard from "containers/dashboard/pages/setting/Setting";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />

            <Route path="product-category/:productCategoryId" element={<ProductCategory />} />
            <Route path="product/:productId" element={<ProductDetail />} />

            <Route path="post-category/:postCategoryId" element={<PostList />}/>
            <Route path="post/:postId" element={<PostDetail />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot" element={<FogotPass/>} />

            <Route path="admin/dashboard" element={<DashBoard/>} />
            <Route path="/admin/dashboard/profile" element={<ProfileDashBoard/>} />
            <Route path="/admin/dashboard/posts" element={<PostDashBoard/>} />
            <Route path="/admin/dashboard/setting" element={<SettingDashBoard/>} />
          </Route>
        </Routes>
      </StoreProvider>
    </div>
  );
}

export default App;
