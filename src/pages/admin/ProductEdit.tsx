import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import instance from "~/apis";
import { TProduct } from "~/interfaces/Product";

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(0),
  description: Joi.string().required().min(6),
});

type Props = {
  onEdit: (product: TProduct) => void;
};
const ProductEdit = ({ onEdit }: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<TProduct | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>({
    resolver: joiResolver(schemaProduct),
  });

  useEffect(() => {
    (async () => {
      const { data } = await instance.get(`/products/${id}  `);
      setProduct(data);
    })();
  }, []);

  const onSubmit = (data: TProduct) => {
    onEdit({ ...data, id });
  };

  return (
    <div>
      <form className="cont text-center mt-5" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="pt-5">SỬA SẢN PHẨM</h2>
        <label htmlFor="">
          <span>TÊN SẢN PHẨM</span>
          <input
            type="text"
            {...register("title", {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
            defaultValue={product?.title}
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
            defaultValue={product?.price}
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
            defaultValue={product?.description}
          />
          {errors.description && (
            <span className="text-danger">{errors.description.message}</span>
          )}
        </label>
        <br />
        <button className="btn btn-primary mt-5">SỬA</button>
      </form>
    </div>
  );
};

export default ProductEdit;
