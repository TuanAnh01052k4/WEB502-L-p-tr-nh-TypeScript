import { TProduct } from "~/interfaces/Product";
import { Link } from "react-router-dom";
import Banner from "~/components/Banner";
import MainLogo from "~/components/MainLogo";

type Props = {
  products: TProduct[];
};
const Home = ({ products }: Props) => {
  const limitedProducts = products.slice(0, 4);
  return (
    <>
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
        <Link className="custom_btnXT" to="/">
          MILKA
        </Link>
        <div className="row articles my-3">
          {products.map((product: TProduct) => (
            <div className="col-md-3 col-sm-6">
              <Link to={`/shop/${product.id}`}>
                <img src={product.image} alt="img" />
                <div className="text">
                  <p>
                    {product.title} <br />$ {product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <Link className="custom_btnXT" to="/">
          CHUPA CHUPS
        </Link>
        <div className="row articles my-3">
          {limitedProducts.map((product: TProduct) => (
            <div className="col-md-3 col-sm-6">
              <Link to={`/shop/${product.id}`}>
                <img src={product.image} alt="img" />
                <div className="text">
                  <p>
                    {product.title} <br />$ {product.price}
                  </p>
                </div>
              </Link>
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
      <div className="container">
        <Link className="custom_btnXT" to="/">
          SUGAR
        </Link>
        <div className="row articles my-3">
          {limitedProducts.map((product: TProduct) => (
            <div className="col-md-3 col-sm-6">
              <Link to={`/shop/${product.id}`}>
                <img src={product.image} alt="img" />
                <div className="text">
                  <p>
                    {product.title} <br />$ {product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <Link className="custom_btnXT" to="/">
          CANDY.CO
        </Link>
        <div className="row articles my-3">
          {limitedProducts.map((product: TProduct) => (
            <div className="col-md-3 col-sm-6">
              <Link to={`/shop/${product.id}`}>
                <img src={product.image} alt="img" />
                <div className="text">
                  <p>
                    {product.title} <br />$ {product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
