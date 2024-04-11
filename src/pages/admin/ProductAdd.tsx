import { useForm } from "react-hook-form";
import { TProduct } from "~/interfaces/Product";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null, ""),
});

type Props = {
  onAdd: (product: TProduct) => void;
};

const ProductAdd = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>({
    resolver: joiResolver(schemaProduct),
  });
  const onSubmit = (data: TProduct) => {
    onAdd(data);
  };
  return (
    <div>
      <form className="cont text-center mt-5" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="pt-5">THÊM SẢN PHẨM</h2>
        <label htmlFor="">
          <span>TÊN SẢN PHẨM</span>
          <input
            type="text"
            {...register("title", {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
          />
          {errors.title && (
            <span className="text-danger">{errors.title.message}</span>
          )}
        </label>
        <br />
        <label htmlFor="">
          <span>GIÁ SẢN PHẨM</span>
          <input
            type="number"
            {...register("price", {
              required: true,
              min: 0,
            })}
          />
          {errors.price && (
            <span className="text-danger">{errors.price.message}</span>
          )}
        </label>
        <br />
        <label htmlFor="">
          <span>MÔ TẢ</span>
          <input
            type="text"
            {...register("description", {
              required: true,
            })}
          />
          {errors.description && (
            <span className="text-danger">{errors.description.message}</span>
          )}
        </label>
        <br />
        <button className="btn btn-primary mt-5">Add product</button>
      </form>
    </div>
  );
};

export default ProductAdd;
