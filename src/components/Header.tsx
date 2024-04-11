import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    // <ul>
    //   <li>
    //     <NavLink to="#" className="nav-link">
    //       Home
    //     </NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/shop" className="nav-link">
    //       Shop
    //     </NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/login" className="nav-link">
    //       Login
    //     </NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/register" className="nav-link">
    //       Register
    //     </NavLink>
    //   </li>
    // </ul>

    <>
      <header className="p-5 bg-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="navbar-header">
              <NavLink className="navbar-brand" to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </div>
            <ul className="nav nav-brown col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li className="">
                <NavLink to="/" className="custom_li2">
                  Trang Chủ
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="custom_li2">
                  Cửa Hàng
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="custom_li2">
                  Giỏ Hàng
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="custom_li2">
                  Giới Thiệu
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink
                  to="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle custom_li2"
                >
                  Danh Mục
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="#" className="custom_li2">
                      Milka
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="custom_li2">
                      Chupa Chups
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="custom_li2">
                      Sugar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="custom_li2">
                      Candy.Co
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="#" className="custom_li2">
                  Liên Hệ
                </NavLink>
              </li>
            </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Tìm Kiếm..."
                aria-label="Search"
              />
            </form>
            <div className="icon-blocks-header">
              <ul>
                <li>
                  <NavLink to="/cart">
                    <i className="fa fa-shopping-cart"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/sign">
                    <i className="fa fa-user"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
