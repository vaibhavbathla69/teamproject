import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { add } from "../auth/helper";

const Add = () => {
  const [values, setValues] = useState({
    name: "",
    category: "",
    image:"",
    error: "",
    success: false,
  });

  const { name, category,image, success,error } = values;

  const handleChange = (name) =>
    (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    add({ name, category,image})
      .then((data) => {
        console.log("DATA", data);
        if (data.name === name) {
          setValues({
            ...values,
            name: "",
            category: "",
            image:"",
            error: "",
            success: true,
          });
        } else {
          setValues({
            ...values,
            error: true,
            success: false,
          });
        }
      })
      .catch((e) => console.log(e));
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account created successfully. Please <Link
              to="/signin"
            >
              login now.
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            Check all fields again
          </div>
        </div>
      </div>
    );
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input
                className="form-control"
                value={name}
                onChange={handleChange("name")}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="text-light">category</label>
              <input
                className="form-control"
                value={category}
                onChange={handleChange("category")}
                type="text"
              />
            </div>
            {/* <div className="form-group">
              <label className="text-light">Gender</label>
              <input
                className="form-control"
                value={Gender}
                onChange={handleChange("Gender")}
                type="Gender"
              />
              </div> */}
            <div className="form-group">
              <label className="text-light">image</label>
              <input
                className="form-control"
                value={image}
                onChange={handleChange("image")}
                type="link"
              />
            </div>
            <button
              onClick={onSubmit}
              className="btn btn-success btn-block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Sign Up Page" description="A signup for LCO user">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      <p className="text-white text-center">
        {JSON.stringify(values)}
      </p>
    </Base>
  );
};

export default Add;
