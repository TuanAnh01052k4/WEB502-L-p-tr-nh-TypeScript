import React from "react";
import logo from "../assets/images/footer-logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      {/*prize*/}
      <div className="prize">
        <div className="container">
          <h1>
            "Chiến thắng giải thưởng đặc biệt trên trang Facebook của chúng
            tôi."
          </h1>
        </div>
      </div>
      {/*end-prize*/}
      <div className="full-footer">
        <div className="container-full">
          <div className="container info">
            <div className="row">
              <div className="col-md-4 addres">
                <img src={logo} alt="logo" />
                <h6>Cửa hàng Delicio, LLC</h6>
                <p>Đường Trịnh Văn Bô, Nam Từ Liêm, Hà Nội</p>
                <p>Điện Thoại: 0123 456 789 / 0123 456 788</p>
              </div>
              <div className="col-md-2 account">
                <h4>Tài khoản</h4>
                <p>
                  <a href="#">Giỏ hàng</a>
                </p>
                <p>
                  <a href="#">Thanh Toán</a>
                </p>
                <p>
                  <a href="#">Tài Khoản Của Tôi</a>
                </p>
              </div>
              <div className="col-md-2 assistance">
                <h4>THÔNG TIN</h4>
                <p>
                  <a href="#">Hỗ Trợ Khách Hàng</a>
                </p>
                <p>
                  <a href="#">Thông Tin Giao Hàng</a>
                </p>
                <p>
                  <a href="#">Vận Chuyển Quốc Tế</a>
                </p>
                <p></p>
              </div>
              <div className="col-md-4 about">
                <h4>Giới thiệu</h4>
                <p>
                  Chào mừng bạn đến với trang web bán sô cô la - điểm đến lý
                  tưởng cho những người yêu thích hương vị ngọt ngào và thơm
                  ngon của sô cô la. Với một sự kết hợp tinh tế của thiết kế đẹp
                  mắt và trải nghiệm mua sắm dễ dàng, chúng tôi mang đến cho bạn
                  một lựa chọn đa dạng các loại sô cô la từ khắp nơi trên thế
                  giới.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row bottom-strip">
            <div className="col-md-6 rights">
              <p>Website bán sô cô la by anhntph34247-2024</p>
            </div>
            <div className="col-md-6 social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-asterisk" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
