import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "~/apis";
// import { getAllProducts } from "~/apis/product";
import { TProduct } from "~/interfaces/Product";

type Props = {};

const ProductDetail = (props: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<TProduct | null>(null);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        console.log(data);

        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);
  return (
    <div>
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-md-10 produti">
              <h4>products</h4>
            </div>
            <div className="col-md-2 cart">
              <h4>
                <a href="#">chart (2 items)</a>
              </h4>
              <ul>
                <li>
                  <a href="#">home /</a>
                </li>
                <li>
                  <a href="#">products</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container content">
        <div className="row">
          <div className="col-md-9">
            <div className="white-bg">
              {/* Single Product */}
              <div className="single-product cold-md-12">
                <div className="col-md-6">
                  <img className="pl-5" width={300} src={product?.image} />
                </div>
                {/* <div className="flexslider col-md-6">
                  <ul className="slides">
                    {product?.product_slide &&
                      product.product_slide.map((item, index) => (
                        <li key={index} data-thumb={item.img}>
                          <img src={item.img} alt="" />
                        </li>
                      ))}
                  </ul>
                </div> */}
                <div className="product-details col-md-6">
                  <h1>{product?.title}</h1>
                  <p className="price">$ {product?.discountedPrice}</p>
                  <span>$ {product?.price}</span>
                  <p>{product?.description}</p>
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
                  <a className="text-decoration-none" href="#">
                    Add to Cart
                  </a>
                  <hr />
                  <div className="availability">
                    <p>Availability:</p>
                    <span>in stock</span>
                  </div>
                  <div className="reviews">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star-o" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star-o" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Product */}
              </div>
              {/* đánh giá */}
              {/* <div className='col-md-12 tabs'>
            <div className='bs-example'>
              <div className='tabbable'>
                <ul className='nav nav-tabs'>
                  <li className='active'>
                    <a data-toggle='tab' href='#tab1' data-loading-text='Loading...'>
                      Section 1
                    </a>
                  </li>
                  <li>
                    <a data-toggle='tab' href='#tab2' data-loading-text='Loading...'>
                      Section 2
                    </a>
                  </li>
                  <li>
                    <a data-toggle='tab' href='#tab3' data-loading-text='Loading...'>
                      Section 3
                    </a>
                  </li>
                </ul>
                <div className='tab-content'>
                  <div id='tab1' className='tab-pane active fade in'>
                    <p>
                      Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher
                      voluptate nisi qui. Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt
                      tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles
                      vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh
                      mi.
                    </p>
                  </div>
                  <div id='tab2' className='tab-pane fade'>
                    <p>
                      Vestibulum nec erat eu nulla rhoncus fringilla ut non neque. Vivamus nibh urna, ornare id
                      gravida ut, mollis a magna. Aliquam porttitor condimentum nisi, eu viverra ipsum porta ut. Nam
                      hendrerit bibendum turpis, sed molestie mi fermentum id. Aenean volutpat velit sem. Sed
                      consequat ante in rutrum convallis. Nunc facilisis leo at faucibus adipiscing. Duis auctor
                      dictum erat hendrerit dapibus.
                    </p>
                  </div>
                  <div id='tab3' className='tab-pane fade'>
                    <p>
                      WInteger convallis, nulla in sollicitudin placerat, ligula enim auctor lectus, in mollis diam
                      dolor at lorem. Sed bibendum nibh sit amet dictum feugiat. Vivamus arcu sem, cursus a feugiat
                      ut, iaculis at erat. Donec vehicula at ligula vitae venenatis. Sed nunc nulla, vehicula non
                      porttitor in, pharetra et dolor. Fusce nec velit velit. Pellentesque consectetur eros nec
                      interdum varius. Quisque at mi dolor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
            </div>
            {/*articles*/}
            <div className="row articles pt-5">
              {/* {products.map((product: TProduct) => (
                <div className="col-md-4">
                  <img src={product.image} alt="img" />
                  <div className="text">
                    <a className="text-decoration-none" href="#">
                      <span>{product.title}</span>
                      <p>$ {product.price}</p>
                    </a>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
          <div className="col-md-3 shop-sidebar">
            <div className="sidebar-widgets">
              <div className="shop-widget">
                <h4>SẢN PHẨM PHỔ BIẾN</h4>
                <ul className="popular-product">
                  {/* {products.map((product: TProduct) => (
                    <li>
                      <img alt="" src={product.image} />
                      <div>
                        <h6>
                          <a href="#">{product.title}</a>
                        </h6>
                        <span>$ {product.price}</span>
                      </div>
                    </li>
                  ))} */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
