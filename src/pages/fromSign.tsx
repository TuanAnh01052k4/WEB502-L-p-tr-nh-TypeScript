import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Sign: React.FC = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  useEffect(() => {
    const handleClick = () => {
      const cont = document.querySelector(".cont");
      if (cont) {
        cont.classList.toggle("s--signup");
        setIsLoginForm(!isLoginForm);
      }
    };

    const btn = document.querySelector(".img__btn");
    if (btn) {
      btn.addEventListener("click", handleClick);
    }

    return () => {
      if (btn) {
        btn.removeEventListener("click", handleClick);
      }
    };
  }, [isLoginForm]);

  return (
    <>
      <div className={`cont mt-5 ${isLoginForm ? "" : "s--signup"}`}>
        <div className="form sign-in">
          <Login />
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h3>Bạn chưa có tài khoản? Hãy đăng ký!</h3>
              <h3></h3>
            </div>
            <div className="img__text m--in">
              <h3>Nếu bạn đã có tài khoản, chỉ cần đăng nhập.</h3>
              <h3></h3>
            </div>
            <div className="img__btn">
              <span className="m--up">ĐĂNG KÝ</span>
              <span className="m--in">ĐĂNG NHẬP</span>
            </div>
          </div>
          <div className="form sign-up">
            <Register />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
