/* import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/auth";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null);

  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      setError("Passwords do not match");
      return;
    }
    try {
      const { name, email, password } = formData;
      const userData = {
        name,
        email,
        password
      };
      const response = await registerUser(userData);
      setUser(response.data.user);
      setFormData(initialState);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={onChange}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="E-mail"
          onChange={onChange}
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={onChange}
          required
        />
        <input
          type="password"
          name="password2"
          value={formData.password2}
          placeholder="Confirm password"
          onChange={onChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
      <p>Already have an account?</p>
      <Link to="/login">Log in!</Link>
    </div>
  );
};

export default Register;

*/