import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { foodActions, getFoodActions } from "../redux/actions/food.action";
import { addCategoryAction } from "../redux/actions/category.actions";
const DashBoard = () => {
  // state change
  const dispatch = useDispatch();
  const categoryReducer = useSelector((state) => state.category);
  const [modal, setModal] = useState(false);
  const [foodModel, setFoodModel] = useState(false);
  const [error, setError] = useState("");

  // lifecycle method let get the category dynamically
  const categories = categoryReducer.categories;

  const handleModal = (tf) => {
    setModal(tf);
    setError("");
  };

  // model for food
  const handleFoodModel = (tf) => {
    setFoodModel(tf);
    // setErrMsg("");
  };

  const resetForm = () => {
    setCategory("");

    setError("");
  };
  //  for category handle=======
  const onSubmitCategory = (e) => {
    e.preventDefault();
    console.log(category);
    if (category === "") {
      setError("Please enter category name!");
    } else {
      dispatch(addCategoryAction(category))
        .then((res) => {
          console.log("----res category--");
          console.log("----> " + res);
          if (res.status === 201) {
            handleModal(false);
            resetForm();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const resetFoodForm = () => {
    setName("");
    setDescription("");
    setPrice(0);
    setQuantity(0);
    setCategory("");
    setErrMsg("");
  };

  const onSubmitFood = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      description === "" ||
      price === "" ||
      quantity === "" ||
      category === ""
    ) {
      setErrMsg("Please field required fields");
    } else {
      const food = {
        name,
        description,
        price,
        quantity,
        category,
      };
      console.log("food", food);
      dispatch(foodActions(food))
        .then((res) => {
          console.log("----> " + res);
          if (res.status === 201) {
            handleFoodModel(false);
            resetFoodForm();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
   
  ////////tokent action
  const token = localStorage.getItem("token");
  // console.log("\n\n---------> token", token);
  if (!token) {
    return <Redirect to="/signin" />;
  }

  const showHeader = () => {
    return (
      <div className="bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fa fa-home"> DashBoard</i>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const showActionButton = () => {
    return (
      <div className="bg-light my-2">
        <div className="container add-action">
          <div className="row pb-3">
            <div className="col-md-4  my-1">
              <button
                className="btn btn-outline-info btn-block"
                onClick={() => handleModal(true)}
              >
                <i className="fa fa-plus"> Add Category</i>
              </button>
            </div>
            <div className="col-md-4 my-1">
              <button
                className="btn btn-outline-warning btn-block"
                onClick={() => handleFoodModel(true)}
              >
                <i className="fa fa-plus"> Add Food</i>
              </button>
            </div>
            <div className="col-md-4  my-1">
              <button className="btn btn-outline-success btn-block">
                <i className="fa fa-money-check-alt"> View Orders</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const showCategoryModel = () => {
    return (
      <div
        className={`modal ${modal ? "show" : ""}`}
        style={{ display: modal ? "block" : "none" }}
        id="addCategoryModal"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Add Category</h5>
              <button className="close" onClick={() => handleModal(false)}>
                <span>
                  <i className="fa fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body my-2">
              <form onSubmit={onSubmitCategory}>
                <label className="text-secondary">Category</label>
                <input
                  type="text"
                  name="category"
                  value={category}
                  onChange={(e) => {
                    if (e.target.value) {
                      setCategory(e.target.value);
                    }
                  }}
                  className="form-control"
                />
                <div className="error-message">
                  <span>{error} </span>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-info">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /// food
  const showFoodModel = () => {
    return (
      <div
        className={`modal ${foodModel ? "show" : ""}`}
        style={{ display: foodModel ? "block" : "none" }}
        id="#addFoodModal"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-warning text-white">
              <h5 className="modal-title">Add Food</h5>
              <button className="close" onClick={() => handleFoodModel(false)}>
                <span>
                  <i className="fa fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body my-2">
              <form onSubmit={onSubmitFood}>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" />
                  <label className="custom-file-label">Choose File</label>
                </div>
                <div className="form-group">
                  <label className="text-secondary">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                </div>
                <label className="text-secondary">Description</label>
                <textarea
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  row="3"
                ></textarea>

                <div className="form-group">
                  <label className="text-secondary">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="form-control"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="text-secondary">Category</label>
                    <select
                      className="custom-select mr-sm-2"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Choose One..</option>
                      {categories.map((c) => {
                        return (
                          <option key={c._id} value={c._id}>
                            {c.category}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="form-group col-md-6">
                    <label className="text-secondry">Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      className="form-control"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="error-message">
                  <span>{errMsg} </span>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-warning text-white">
                    Add Food
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section>
      {showHeader()}
      {showActionButton()}
      {showCategoryModel()}
      {showFoodModel()}
    </section>
  );
};

export default DashBoard;
