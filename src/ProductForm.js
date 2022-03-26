import React from "react";

const ProductForm = ({ nameValue, onChange, onSubmit, isUpdate = false }) => {
  return (
    <div>
      <input
        value={nameValue}
        type="text"
        onChange={onChange}
        placeholder="Product name"
        name="text"
      />

      <button
        disabled={!nameValue}
        style={{ margin: "20px" }}
        onClick={onSubmit}
      >
        {!isUpdate ? "Add" : "Update"}
      </button>
    </div>
  );
};

export default ProductForm;
