import "./ProductDetail.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Tabs } from "antd";
import prductImg from "../../assets/images/IQOSBLUEgiabanhcm0.jpg";
import asideProductImg from "../../assets/images/nga360x360100x100.jpg";
import asideImg from "../../assets/images/cuahang.jpg";
import HDSD from "../../assets/images/su-dung-copy.jpg";

function ProductDetail(props:any) {
  console.log("props", props);
  
  return (
    <div className="container">
      <div className="ProductDetail" key={props.product.prod_id}>
        <div className="ProductDetail__content">
          <div className="ProductDetail__wrapper">
            <div className="ProductDetail__pductImages">
              <div className="ProductDetail__mainImage">
                <img src={props.product.prod_thumbnail} alt="" />
              </div>
              <div className="ProductDetail__galery">
                <div className="ProductDetail__image">
                  <img src={props.product.prod_thumbnail} alt="" />
                </div>
                <div className="ProductDetail__image">
                  <img src={props.product.prod_thumbnail} alt="" />
                </div>
                <div className="ProductDetail__image">
                  <img src={props.product.prod_thumbnail} alt="" />
                </div>
                <div className="ProductDetail__image">
                  <img src={props.product.prod_thumbnail} alt="" />
                </div>
              </div>
            </div>
            <div className="ProductDetail__textZone">
              <div className="ProductDetail__breadcrumb">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link to="/">Trang chủ</Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Thuốc lá IQOS</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <h1 className="ProductDetail__title">{props.product.prod_name}</h1>
              <div className="ProductDetail__priceGroup">
                <p>Giá :</p>
                <h2 className="ProductDetail__price">{props.product.prod_price}</h2>
              </div>
              <div className="ProductDetail__shortDescription">
                {props.prod_short_description}
              </div>
              <div className="ProductDetail__hotline">
                <a href="tel:0972.939.830">Hotline: 0972.939.830</a>
              </div>
              <div className="ProductDetail__buyNow">
                <Link to="#">MUA NGAY</Link>
              </div>
              <div className="ProductDetail__galery">
                <div className="ProductDetail__image"></div>
              </div>
            </div>
          </div>

          <div className="ProductDetail__description">
            <Tabs defaultActiveKey="1" className="ProductDetail__tabs">
              <Tabs.TabPane
                tab="Mô Tả"
                key="1"
                className="ProductDetail__panel description"
              >
                {props.product.prod_description}
              </Tabs.TabPane>
              <Tabs.TabPane
                tab="Hướng dẫn sử dụng"
                key="2"
                className="ProductDetail__panel hdsd"
              >
                <img src={HDSD} alt="" />
              </Tabs.TabPane>
            </Tabs>
          </div>
          <div className="ProductDetail__samewProduct">
            <h1 className="products-title-section">SẢN PHẨM TƯƠNG TỰ</h1>
            <div className="products__list">
              <Link to="product/:productId" className="product__item">
                <img src={prductImg} alt="" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </Link>
              <Link to="product/:productId" className="product__item">
                <img src={prductImg} alt="product-img" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </Link>
              <Link to="product/:productId" className="product__item">
                <img src={prductImg} alt="product-img" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </Link>
              <Link to="product/:productId" className="product__item">
                <img src={prductImg} alt="product-img" />
                <div className="product-text">
                  <div className="product-title">IQOS 2.4 Limited Blue</div>
                  <p className="product-price">5.000.000 VNĐ</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="ProductDetail__aside">
          <aside className="ProductDetail__aside-block">
            <h3 className="ProductDetail__aside-title">SHOWROOM TẠI HCM</h3>
            <div className="ProductDetail__aside-inner">
              <ul>
                <li>Phạm Văn Bạch, P. 15, Q. Tân Bình, Tp. HCM</li>
              </ul>
            </div>
          </aside>
          <aside className="ProductDetail__aside-block">
            <img src={asideImg} className="ProductDetail__aside-img" alt="" />
          </aside>
          <aside className="ProductDetail__aside-block">
            <h3 className="ProductDetail__aside-title">DANH MỤC SẢN PHẨM</h3>
            <div className="ProductDetail__aside-inner">
              <ul className="ProductDetail__asideCategory">
                <li className="ProductDetail__asideCategory-item">
                  <Link to="/">Phụ kiện</Link>
                </li>
                <li className="ProductDetail__asideCategory-item">
                  <Link to="/">Sản phẩm</Link>
                </li>
                <li className="ProductDetail__asideCategory-item">
                  <Link to="/">Thuốc lá IQOS</Link>
                </li>
              </ul>
            </div>
          </aside>
          <aside className="ProductDetail__aside-block">
            <h3 className="ProductDetail__aside-title">SẢN PHẨM NỔI BẬT</h3>
            <div className="ProductDetail__aside-inner">
              <ul className="ProductDetail__aside-vertial-list">
                <li className="ProductDetail__aside-vertial-item">
                  <img src={asideProductImg} alt="" />
                  <div className="ProductDetail__aside-vertial-text">
                    <h3 className="verticalProduct-title">
                      Thuốc Heets Âu cho IQOS
                    </h3>
                    <div className="verticalProduct-price">
                      <p>Giá:</p>
                      <p className="verticalProduct-price__text">Liên hệ</p>
                    </div>
                  </div>
                </li>
                <li className="ProductDetail__aside-vertial-item">
                  <img src={asideProductImg} alt="" />
                  <div className="ProductDetail__aside-vertial-text">
                    <h3 className="verticalProduct-title">
                      Thuốc Heets Âu cho IQOS
                    </h3>
                    <div className="verticalProduct-price">
                      <p>Giá:</p>
                      <p className="verticalProduct-price__text">Liên hệ</p>
                    </div>
                  </div>
                </li>
                <li className="ProductDetail__aside-vertial-item">
                  <img src={asideProductImg} alt="" />
                  <div className="ProductDetail__aside-vertial-text">
                    <h3 className="verticalProduct-title">
                      Thuốc Heets Âu cho IQOS
                    </h3>
                    <div className="verticalProduct-price">
                      <p>Giá:</p>
                      <p className="verticalProduct-price__text">Liên hệ</p>
                    </div>
                  </div>
                </li>
                <li className="ProductDetail__aside-vertial-item">
                  <img src={asideProductImg} alt="" />
                  <div className="ProductDetail__aside-vertial-text">
                    <h3 className="verticalProduct-title">
                      Thuốc Heets Âu cho IQOS
                    </h3>
                    <div className="verticalProduct-price">
                      <p>Giá:</p>
                      <p className="verticalProduct-price__text">Liên hệ</p>
                    </div>
                  </div>
                </li>
                <li className="ProductDetail__aside-vertial-item">
                  <img src={asideProductImg} alt="" />
                  <div className="ProductDetail__aside-vertial-text">
                    <h3 className="verticalProduct-title">
                      Thuốc Heets Âu cho IQOS
                    </h3>
                    <div className="verticalProduct-price">
                      <p>Giá:</p>
                      <p className="verticalProduct-price__text">Liên hệ</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
          <aside className="ProductDetail__aside-block">
            <h3 className="ProductDetail__aside-title">CHIA SẺ FACEBOOK</h3>
            <div className="ProductDetail__aside-inner">
              <div>fanpage share</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;