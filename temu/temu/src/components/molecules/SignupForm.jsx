import InputField from "../atoms/InputField";
import FormBtn from "../atoms/FormBtn"; // ✅ Correct import
import { useState } from "react";
import "./SignupForm.css";

const SignupForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullname: "",
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
      <h2 className="form-title">Create Account</h2>
      <InputField
        label="Full Name"
        type="text"
        name="fullname"
        value={formData.fullname}
        onChange={handleChange}
      />
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
      <FormBtn text="Sign Up" type="submit" /> {/* ✅ Use FormBtn */}
    </form>
  );
};

export default SignupForm;
