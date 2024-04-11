import { useEffect, useState } from "react";
import instance from "~/apis";
import { getAllProducts } from "~/apis/product";
import { TProduct } from "~/interfaces/Product";

type Props = {};

const Shop = (props: Props) => {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await instance.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const limitProducts = products.slice(0, 10);

  return (
    <div>
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-md-10 produti">
              <h4>CỬA HÀNG</h4>
            </div>
            <div className="col-md-2 cart">
              <h4>
                <a href="#">giỏ hàng (*)</a>
              </h4>
              <ul>
                <li>
                  <a href="#">Trang Chủ /</a>
                </li>
                <li>
                  <a href="#">Cửa Hàng</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* shop page */}
      <div className="container">
        <div className="row content">
          <div className="col-md-9 shop-section">
            {/* <div className='row'>
              <div className='col-md-12 latest'>
                <h4 className='pull-left'>MỚI NHẤT</h4>
                <ul className='pagination-list pull-right'>
                  <li>
                    <a className='active' href='#'>
                      1
                    </a>
                  </li>
                  <li>
                    <a href='#'>2</a>
                  </li>
                  <li>
                    <a href='#'>3</a>
                  </li>
                  <li>
                    <a href='#'>4</a>
                  </li>
                  <li>
                    <a href='#'>5</a>
                  </li>
                </ul>
              </div>
            </div> */}
            {/*articles*/}
            <div className="row articles">
              {products.map((product: TProduct) => (
                <div className="col-md-3 col-sm-6">
                  <img src={product.image} alt="img" />
                  <div className="text">
                    <a className="text-decoration-none" href="#">
                      <span>{product.title}</span>
                      <p>$ {product.price}</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*end-articles*/}
          <div className="col-md-3 shop-sidebar">
            <div className="sidebar-widgets">
              {/* <div className='shop-widget'>
                <h4>CHỌN GIÁ</h4>
                <div className='price-range'>
                  {/* div to become a slider /*
                  <div className='noUiSlider'></div>
                  <input type='text' id='start-val' />
                  <input type='text' id='end-val' />
                </div>
              </div> */}
              <div className="shop-widget">
                <h4>SẢN PHẨM PHỔ BIẾN</h4>
                <ul className="popular-product">
                  {limitProducts.map((product: TProduct) => (
                    <li>
                      <img alt="" src={product.image} />
                      <div>
                        <h6>
                          <a href="#">{product.title}</a>
                        </h6>
                        <span>$ {product.price}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
