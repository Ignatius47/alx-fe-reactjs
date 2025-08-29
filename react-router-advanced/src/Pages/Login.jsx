import { useNavigate } from "react-router-dom";
import { fakeAuth } from "../auth";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    fakeAuth.login(() => {
      navigate("/profile");
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}