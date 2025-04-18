import React from "react";
import axios from "axios";

const Register = () => {
  const adi = async(e) => {
    e.preventDefault()
    const user = {
      name: e.target.name.value,
      age: e.target.age.value,
    };
    await axios.post("http://localhost:3000/users", user);
    alert("Data Successfully Save");
  };

  return (
    <div style={{ border: "2px solid green",padding:'20px' }}>
      <h1 style={{ color: "red" }}>Create users</h1>

      <form onSubmit={adi}>
        <label>
          NAME:<input type="text" name="name" />
        </label>
        <label>
          AGE:<input type="text" name="age" />
        </label>
        <button type="submit">SAVE DATA</button>
      </form>
    </div>
  );
};

export default Register;