import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import instance from "~/apis";
import { userType } from "~/interfaces/User";

const userSchema = Joi.object({
  email: Joi.string().required().email({ tlds: false }),
  password: Joi.string().required().min(6),
});

const Login = () => {
  const navi = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userType>({
    resolver: joiResolver(userSchema),
  });

  const onSubmit = async (user: userType) => {
    try {
      const { data } = await instance.post(`/login`, user);

      if (data.user) {
        if (data.user.role === "admin") {
          const isConfirm = confirm(
            "Chào admin, bạn có muốn sang trang Admin không?"
          );
          if (isConfirm) {
            navi("/admin");
          }
        } else {
          const isConfirm = confirm(
            "Chào bạn, bạn có muốn sang trang chủ không?"
          );
          if (isConfirm) {
            navi("/");
          }
        }
      }
    } catch (error) {
      console.error("Đăng nhập không thành công", error);
    }
  };
  return (
    <div>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <h2>ĐĂNG NHẬP</h2>
        <label htmlFor="">
          <span>E-MAIL</span>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </label>
        <br />
        <label htmlFor="">
          <span>MẬT KHẨU</span>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-danger">{errors.password.message}</span>
          )}
        </label>
        <button className="submit">Đăng Nhập</button>
      </form>
    </div>
  );
};

export default Login;
