import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TProduct } from "~/interfaces/Product";

type Props = { products: TProduct[]; onDel: (id: number) => void };

const Dashboard = ({ products, onDel }: Props) => {
  // console.log(products);
  return (
    <div>
      <div className="container">
        <div className="text-light font-weight-bold mt-3">
          <h2>ADMIN</h2>
        </div>
        <a className="btn btn-primary mb-3" href="/admin/add">
          Add new product
        </a>
        <table className="table table-bordered table-striped cont text-center">
          <thead className="thead-primary">
            <tr>
              <th scope="col" className="font-weight-bold">
                #
              </th>
              <th scope="col" className="font-weight-bold">
                Tên SP
              </th>
              <th scope="col" className="font-weight-bold">
                Giá SP
              </th>
              <th scope="col" className="font-weight-bold">
                Mô tả SP
              </th>
              <th scope="col" className="font-weight-bold">
                Thao Tác
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                {/* <td className="col-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />
                </td> */}
                <td>
                  <Link
                    to={`/admin/edit/${item.id}`}
                    className="btn btn-warning w-100"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => onDel(Number(item.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
