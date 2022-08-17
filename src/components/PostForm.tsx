import React, { useState, useContext } from "react";

import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
// import { useNavigate } from "react-router-dom";
import { useForm } from "../utils/hooks";

function PostForm(props) {
  // let navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    lastname: "",
    firstname: "",
    role: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_APP_USER, {
    update(_, { data: { registerAppUser: userData } }) {
      // this.props.history.push("/");
      // navigate("/");
    },
    // onError(err) {
    //   setErrors(
    //     err && err.graphQLErrors[0]
    //       ? err.graphQLErrors[0].extensions.errors
    //       : {}
    //   );
    // },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  return (
    <div className="card">
      <h3>Create New User</h3>
      <form onSubmit={onSubmit} className={loading ? "loading" : ""}>
        <div className="row">
          <label htmlFor="Username" className="form_label">
            Username
          </label>
          <div className="inputs">
            <input
              // label="Username"
              placeholder="Username.."
              name="username"
              value={values["username"]}
              // error={errors.username ? true : false}
              onChange={onChange}
              className="form_control"
            />
          </div>
        </div>
        <div className="row">
          <label htmlFor="Email" className="form_label">
            Email
          </label>
          <div className="inputs">
            <input
              //  label="Email"
              placeholder="Email.."
              name="email"
              value={values["email"]}
              // error={errors.email ? true : false}
              onChange={onChange}
              className="form_control"
            />
          </div>
        </div>
        <div className="row">
          <label htmlFor="Password" className="form_label">
            Password
          </label>
          <div className="inputs">
            <input
              //  label="Email"
              placeholder="Password.."
              name="password"
              type="password"
              value={values["password"]}
              // error={errors.password ? true : false}
              onChange={onChange}
              className="form_control"
            />
          </div>
        </div>
        <div className="row">
          <label htmlFor="confirmPassword" className="form_label">
            confirmPassword
          </label>
          <div className="inputs">
            <input
              placeholder="Confirm the password.."
              name="confirmPassword"
              type="password"
              value={values["confirmPassword"]}
              // error={errors.confirmPassword ? true : false}
              onChange={onChange}
              className="form_control"
            />
          </div>
        </div>
        <div className="row">
          <label htmlFor="firstname" className="form_label">
            firstname
          </label>
          <div className="inputs">
            <input
             placeholder="firstname.."
              name="firstname"
              type="firstname"
              value={values["firstname"]}
              // error={errors.firstname ? true : false}
              onChange={onChange}
              className="form_control"
            />
          </div>
        </div>
        <div className="row">
          <label htmlFor="lastname" className="form_label">
            lastname
          </label>
          <div className="inputs">
            <input
             placeholder="lastname.."
              name="lastname"
              type="lastname"
              value={values["lastname"]}
              // error={errors.lastname ? true : false}
              onChange={onChange}
              className="form_control"
            />
          </div>
        </div>
        <div className="row">
          <label htmlFor="role" className="form_label">
            role
          </label>
          <div className="inputs">
            <input
             placeholder="Creator or User"
              name="role"
              type="role"
              value={values["username"]}
              // error={errors.role ? true : false}
              onChange={onChange}
              className="form_control"
            />
          </div>
        </div>
      </form>
      <button type="submit">Create New User</button>
      {/* {Object.keys(errors || {}).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
}

const REGISTER_APP_USER = gql`
  mutation registerAppUser(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
    $firstname: String!
    $lastname: String!
    $role: String!
  ) {
    registerAppUser(
      appUserInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
        firstname: $firstname
        lastname: $lastname
        role: $role
      }
    ) {
      id
      email
      username
      createdAt
    }
  }
`;

export default PostForm;
