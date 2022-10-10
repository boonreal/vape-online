
import "./productCategory.scss";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import prductImg from "../../assets/images/IQOSBLUEgiabanhcm0.jpg";
import asideProductImg from "../../assets/images/nga360x360100x100.jpg";
import asideImg from "../../assets/images/cuahang.jpg";

const productCategory = (props: any) => (
  <div className="container">
    <div className="productCategory__content">
      <div className="Breadcrumb">
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item> Cửa hàng</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="productCategory__layout">
        <div className="productCategory__aside">
          <aside className="productCategory__aside-block">
            <h3 className="productCategory__aside-title">SHOWROOM TẠI HCM</h3>
            <div className="productCategory__aside-inner">
              <ul>
                <li>Phạm Văn Bạch, P. 15, Q. Tân Bình, Tp. HCM</li>
              </ul>
            </div>
          </aside>
          <aside className="productCategory__aside-block">
            <img src={asideImg} className="productCategory__aside-img" alt="" />
          </aside>
          <aside className="productCategory__aside-block">
            <h3 className="productCategory__aside-title">DANH MỤC SẢN PHẨM</h3>
            <div className="productCategory__aside-inner">
              <ul className="productCategory__asideCategory">
                <li className="productCategory__asideCategory-item">
                  <Link to="/">Phụ kiện</Link>
                </li>
                <li className="productCategory__asideCategory-item">
                  <Link to="/">Sản phẩm</Link>
                </li>
                <li className="productCategory__asideCategory-item">
                  <Link to="/">Thuốc lá IQOS</Link>
                </li>
              </ul>
            </div>
          </aside>
          <aside className="productCategory__aside-block">
            <h3 className="productCategory__aside-title">SẢN PHẨM NỔI BẬT</h3>
            <div className="productCategory__aside-inner">
              <ul className="productCategory__aside-vertial-list">
                {props.products.map((product: any, index: number) => (
                  <li className="productCategory__aside-vertial-item">
                    <Link to={`/product/${product.prod_id}`}>
                      <img src={product.prod_thumbnail} alt="product-img" />
                      <div className="productCategory__aside-vertial-text">
                        <h3 className="verticalProduct-title">
                          {product.prod_title}
                        </h3>
                        <div className="verticalProduct-price">
                          <p>Giá:</p>
                          <p className="verticalProduct-price__text">
                            {product.prod_price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <aside className="productCategory__aside-block">
            <h3 className="productCategory__aside-title">CHIA SẺ FACEBOOK</h3>
            <div className="productCategory__aside-inner">
              <div>fanpage share</div>
            </div>
          </aside>
        </div>
        <div className="productCategory__main-content">
          <div className="products__list">
            {props.products.map((product: any, index: number) => (
              <Link
                to={`/product/${product.prod_id}`}
                className="product__item"
              >
                <img src={product.prod_thumbnail} alt="product-img" />
                <div className="product-text">
                  <div className="product-title">{product.prod_title}</div>
                  <p className="product-price">{product.prod_price}</p>
                </div>
              </Link>
            ))}
          </div>
          ;
        </div>
      </div>
    </div>
  </div>
);

export default productCategory;