import { useState } from "react";
import { loginValidations } from "./validation";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState();
  const handleSubmit = () => {
    const validation = loginValidations(formData);
    setError(validation);
    console.log(formData);
    setFormData({
      username: "",
      password: "",
    });
  };
  const handleOnchange = (e) => {
    const { value, name } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleOnchange}
        placeholder="Enter your username"
      />
      <br></br>
      {error?.username && !formData.username && <span>{error.username}</span>}
      <br></br>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleOnchange}
        placeholder="Enter your password"
      />
      <br></br>
      {error?.password && !formData.password && <span>{error.password}</span>}
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Login;
