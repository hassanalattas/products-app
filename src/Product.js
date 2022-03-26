import React from "react";
import ProductForm from "./ProductForm";

const Product = ({
  product: {
    product,
    onDeleteProduct,
    onUpdateProductClicked,
    productName,
    onChangeName,
    onUpdateProduct,
    updatedProduct,
  },
}) => {
  const handelDelete = () => {
    onDeleteProduct(product.id);
  };

  const handelUpdate = () => {
    onUpdateProductClicked(product.id);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <button style={{ margin: "20px" }} onClick={handelDelete}>
        Delete
      </button>
      {updatedProduct.id !== product.id && (
        <button style={{ margin: "20px" }} onClick={handelUpdate}>
          Update
        </button>
      )}

      {updatedProduct.id === product.id && (
        <ProductForm
          nameValue={productName}
          onChange={onChangeName}
          isUpdate={true}
          onSubmit={onUpdateProduct}
        />
      )}
    </div>
  );
};

export default Product;
