import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });

      alert("Signup Successful!");
      window.location.href = "/login";

    } catch (err) {
      alert("Signup Failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Signup</h2>

      <input placeholder="Name"
        onChange={(e) => setName(e.target.value)} /><br />

      <input placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} /><br />

      <input placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)} /><br />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}