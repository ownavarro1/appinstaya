import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const User = () => {
    const [name, setName] = useState();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  
  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:9000/user", {
          headers: {
            token: token,
          },
        })
        .then(({ data }) => setName(data.nombre))
        .catch((error) => console.error(error));
    }
  }, [token]);
  return (
    <div>
          <h3>{name ? `¡Felicitaciones ${name}!` : "¿Que estas haciendo? 🕵️‍♂️"}</h3>
      <h2>
        {name ? "Te pudiste logear correctamente🎉" : "Te estamos viendo..."}
      </h2>
      <div>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/")}>Register</button>
      </div>
    </div>
  )
}
