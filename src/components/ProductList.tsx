import { useEffect, useState } from "react";
import instance from "~/apis";
import { getAllProducts } from "~/apis/product";
import { TProduct } from "~/interfaces/Product";
import MainLogo from "./MainLogo";
import Banner from "./Banner";
import { NavLink } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    // Cach 1:
    // fetch('http://localhost:3000/products').then(res => res.json()).then(data => {setProducts(data)})

    // Cach 2:
    // (async () => {
    //   const data = await getAllProducts();
    //   setProducts(data);
    // })();

    // Cach 3:
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
  return (
    <div>
      <Banner />
      {/*Icon Blocks*/}
      <div className="container">
        <div className="icon-blocks">
          <div className="col-md-4">
            <p>
              <i className="fa fa-group" />
              Cửa hàng cá nhân
            </p>
          </div>
          <div className="col-md-4">
            <p>
              <i className="fa fa-bell" />
              Thông báo qua email
            </p>
          </div>
          <div className="col-md-4">
            <p>
              <i className="fa fa-globe" />
              Giao hàng tận nơi
            </p>
          </div>
        </div>
      </div>
      {/*end Icon Blocks*/}
      {/*articles*/}
      <div className="container">
        <div className="row articles">
          {products.map((product: TProduct) => (
            <div className="col-md-3 col-sm-6">
              <NavLink to={`/shop/${product.id}`}>
                <img src={product.image} alt="img" />
                <div className="text">
                  <p>
                    {product.title} <br />$ {product.price}
                  </p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      {/*end-articles*/}
      {/* partners box */}
      <div className="container">
        <div
          id="carousel-example-generic"
          className="carousel slide"
          data-ride="carousel"
        >
          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <MainLogo />
          </div>
        </div>
      </div>
      {/*end-partners box */}
      {/*articles*/}
      {/* <div className="container">
        <NavLink className="text-decoration-none" to="/">
          <div className="row articles">
            {products.map((product: TProduct) => (
              <div className="col-md-3 col-sm-6">
                <img src={product.image} alt="img" />
                <div className="text">
                  <p>
                    {product.title} <br />$ {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </NavLink>
      </div> */}
      {/*end-articles*/}
    </div>
  );
};

export default ProductList;
