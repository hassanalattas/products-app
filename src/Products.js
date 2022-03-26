import React, { useState } from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";

// @hassanalattas_me
const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [productName, setProductName] = useState("");
  const [updatedProduct, setUpdatedProduct] = useState({});

  // handel the value from the Input
  const onChangeName = ({ currentTarget: { value } }) => {
    setProductName(value); // e.currentTarget.value
  };

  // on user click the add button
  const onAddProduct = () => {
    setProductsList([
      ...productsList, // get the previous values
      {
        // to set the new one.
        id: Date.now(), // to generate unique ID
        name: productName,
      },
    ]);
    setProductName(""); // to clear the value of the text input
  };

  const onDeleteProduct = (productId) => {
    // Product { id,  name }
    // find the product that I want to delete it
    const product = productsList.find(({ id }) => id === productId);
    if (product) {
      // get list of products without the product that I want to delete it .
      const products = productsList.filter(({ id }) => id !== productId);
      // set the values
      setProductsList(products);
    }
  };

  // step: 7
  const onUpdateProductClicked = (productId) => {
    // find the product that I want to update it
    const product = productsList.find(({ id }) => id === productId);
    if (product) {
      // set the that I want to update it to access the previous value
      setUpdatedProduct(product);
      // set the product name value to show it on the text input as a previous value
      setProductName(product.name);
    }
  };

  const onUpdateProduct = () => {
    //  find the product that I want to update it
    const product = productsList.find(({ id }) => id === updatedProduct.id);
    if (product) {
      //  get updated product
      const updatedProduct = { id: product.id, name: productName };

      // find the index for the product that I want to update it .
      const productIndex = productsList.findIndex(
        ({ id }) => id === updatedProduct.id
      );

      const products = productsList;
      // set the updated product to the index of the list
      products[productIndex] = updatedProduct;
      // set the values
      setProductsList(products);

      // reset the values
      setUpdatedProduct({});
      setProductName("");
    }
  };

  return (
    <div>
      {productsList.map((product) => {
        return (
          <Product
            key={product.id}
            product={{
              product: product,
              onDeleteProduct: onDeleteProduct,
              onUpdateProductClicked: onUpdateProductClicked,
              productName: productName, // input value
              onChangeName: onChangeName,
              onUpdateProduct: onUpdateProduct,
              updatedProduct: updatedProduct,
            }}
          />
        );
      })}

      {!(Object.keys(updatedProduct).length > 0) && (
        // to check the updated product is not empty
        <ProductForm
          nameValue={productName}
          onChange={onChangeName}
          onSubmit={onAddProduct}
        />
      )}
    </div>
  );
};

export default Products;
