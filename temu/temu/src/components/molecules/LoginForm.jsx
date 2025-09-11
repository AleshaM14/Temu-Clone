import InputField from "../atoms/InputField";
import FormBtn from "../atoms/FormBtn"; // ✅ Correct import
import { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Login</h2>
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <FormBtn text="Login" type="submit" /> {/* ✅ Use FormBtn */}
    </form>
  );
};

export default LoginForm;
