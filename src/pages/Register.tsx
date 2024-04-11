import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import instance from "~/apis";
import { userType } from "~/interfaces/User";

const userSchema = Joi.object({
  maidenName: Joi.string().required().min(5),
  email: Joi.string().required().email({ tlds: false }),
  password: Joi.string().required().min(6),
});

const Register = () => {
  const navi = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userType>({
    resolver: joiResolver(userSchema),
  });

  const onSubmit = (user: userType) => {
    (async () => {
      const { data } = await instance.post(`/register`, user);
      if (data.user) {
        const isConfirm = confirm(
          "Đăng ký thành công, bạn có muốn chuyển sang đăng nhập không?"
        );
        if (isConfirm) {
          location.reload();
        }
      }
    })();
  };
  return (
    <div>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <h2>TẠO TÀI KHOẢN</h2>
        <label htmlFor="">
          <span>TÊN TÀI KHOẢN</span>
          <input
            type="text"
            {...register("maidenName", { required: true, minLength: 5 })}
          />
          {errors.maidenName && (
            <span className="text-danger">{errors.maidenName.message}</span>
          )}
        </label>
        <br />
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
            {...register("password", { required: true, min: 5 })}
          />
          {errors.password && (
            <span className="text-danger">{errors.password.message}</span>
          )}
        </label>
        <button className="submit">Đăng Ký</button>
      </form>
    </div>
  );
};

export default Register;
