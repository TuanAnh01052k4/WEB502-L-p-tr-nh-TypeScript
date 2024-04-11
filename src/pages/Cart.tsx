import React from "react";
import { useEffect, useState } from "react";
import instance from "~/apis";
import { getAllProducts } from "~/apis/product";
import { TProduct } from "~/interfaces/Product";

type Props = {};

const Cart = (props: Props) => {
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
              <h4>THANH TOÁN</h4>
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
      {/* shop-page */}
      <div className="container checking-area">
        <div className="row">
          <div className="col-md-9 cart-area">
            <div className="sixteen columns cart-section oflow">
              {/* Cart */}
              <table className="table cart-table responsive-table">
                <tbody>
                  <tr>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                  {/* Item #1 */}
                  <tr>
                    <td>
                      <img src="images/product1-small.jpg" alt="" />
                    </td>
                    <td className="cart-title">
                      <a href="#">Converse All Star Trainers</a>
                    </td>
                    <td>$79.00</td>
                    <td>
                      <form action="#">
                        <div className="qtyminus"></div>
                        <input
                          type="text"
                          name="quantity"
                          defaultValue={1}
                          className="qty"
                        />
                        <div className="qtyplus"></div>
                      </form>
                    </td>
                    <td className="cart-total">$79.00</td>
                    <td>
                      <a href="#" className="cart-remove" />
                    </td>
                  </tr>
                  {/* Item #2 */}
                  <tr>
                    <td>
                      <img src="images/product2-small.jpg" alt="" />
                    </td>
                    <td className="cart-title">
                      <a href="#">Wool Two-Piece Suit</a>
                    </td>
                    <td>$99.00</td>
                    <td>
                      <form action="#">
                        <div className="qtyminus"></div>
                        <input
                          type="text"
                          name="quantity"
                          defaultValue={1}
                          className="qty"
                        />
                        <div className="qtyplus"></div>
                      </form>
                    </td>
                    <td className="cart-total">$99.00</td>
                    <td>
                      <a href="#" className="cart-remove" />
                    </td>
                  </tr>
                  {/* Item #3 */}
                  <tr>
                    <td>
                      <img src="images/product3-small.jpg" alt="" />
                    </td>
                    <td className="cart-title">
                      <a href="#">Wool Two-Piece Suit</a>
                    </td>
                    <td>$99.00</td>
                    <td>
                      <form action="#">
                        <div className="qtyminus"></div>
                        <input
                          type="text"
                          name="quantity"
                          defaultValue={1}
                          className="qty"
                        />
                        <div className="qtyplus"></div>
                      </form>
                    </td>
                    <td className="cart-total">$99.00</td>
                    <td>
                      <a href="#" className="cart-remove" />
                    </td>
                  </tr>
                  {/* Item #4 */}
                  <tr>
                    <td>
                      <img src="images/product4-small.jpg" alt="" />
                    </td>
                    <td className="cart-title">
                      <a href="#">Wool Two-Piece Suit</a>
                    </td>
                    <td>$99.00</td>
                    <td>
                      <form action="#">
                        <div className="qtyminus"></div>
                        <input
                          type="text"
                          name="quantity"
                          defaultValue={1}
                          className="qty"
                        />
                        <div className="qtyplus"></div>
                      </form>
                    </td>
                    <td className="cart-total">$99.00</td>
                    <td>
                      <a href="#" className="cart-remove" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="taxat">
              <form action="#" method="get" className="apply-coupon">
                <input
                  className="search-field"
                  type="text"
                  placeholder="Coupon Code"
                  defaultValue=""
                />
                <a href="#" className="coupon-btn checkout-btn">
                  Apply Coupon
                </a>
              </form>
              <div className="cart-buttons">
                <a href="#">Proceed to Checkout</a>
                <a href="#">Update Cart</a>
              </div>
              <div className="col-md-6 taxes nopadding">
                <ul>
                  <li>
                    <a href="#">shipping &amp; taxes</a>
                  </li>
                </ul>
                <p>Enter your destination to get a shipping estimate.</p>
                <div>
                  <form className="form-horizontal" role="form">
                    <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="your name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="your e-mail"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="post code"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* Cart Totals */}
              <div className="col-md-6 eight columns cart-totals">
                <table className="table cart-table test">
                  <tbody>
                    <tr>
                      <th>Cart Subtotal</th>
                      <td>
                        <strong>$178.00</strong>
                      </td>
                    </tr>
                    <tr>
                      <th>Shipping and Handling</th>
                      <td>Free Shipping</td>
                    </tr>
                    <tr>
                      <th>Order Total</th>
                      <td>
                        <strong>$178.00</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <a href="#" className="calculate-shipping">
                  Checkout
                </a>
              </div>
            </div>
            {/* Start */}
            {/* end */}
          </div>
          {/* Sidebar */}
          <div className="col-md-3 shop-sidebar">
            <div className="sidebar-widgets">
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

export default Cart;
