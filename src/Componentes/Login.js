import axios from "axios";
import React, { useState } from "react";
import { Link,  useNavigate} from "react-router-dom";

export const Login = () => {
    const [inputs, setInputs] = useState({email: "", password: "" });
    const [mensaje, setMensaje] = useState();
    const [loading, setLoading] = useState(false);
  
    const navigate = useNavigate();
    

    const { email, password } = inputs;
  
    const HandleChange = (e) => {
               setInputs({ ...inputs, [e.target.name]: e.target.value });
               
    };
  
    const onSubmit = async (e) => {
    e.preventDefault();
       if (email !== "" && password !== "") {
   
          const user = {
          email,
          password,
                };
                setLoading(true);
       await axios.post("http://localhost:9000/login", user)
        .then((res) => {
            const { data } = res;
            setMensaje(data.mensaje);
            setTimeout(() => {
               setMensaje("");
               localStorage.setItem("token", data?.usuario.token);
              navigate("/listar");
            }, 1500);
          })
          .catch((error) => {
            alert("hola");
            console.error(error);
            setMensaje("Correo u contraseña incorrecta");
            setTimeout(() => {
              setMensaje("");
            }, 1500);
          });
        setInputs({ email: "", password: "" });
        setLoading(false);
      }
    };
  

  return (
    <div className="container">
<Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>
       {/*  <!-- Outer Row --> */}
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                       {/*  <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form onSubmit={(e) => onSubmit(e)} className="user">
                                        <div className="form-group">
                                            <input onChange={(e) => HandleChange(e)} type="email"
                value={email} className="form-control form-control-user" 
                                                id="email" name="email" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..."/>
                                        </div>
                                        <div className="form-group">
                                            <input onChange={(e) => HandleChange(e)} type="password" 
                value={password} name="password" className="form-control form-control-user"
                                                id="password" placeholder="Password"/>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                <label className="custom-control-label" htmlFor="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-user btn-block">
                                             {loading ? "Cargando..." : "Login"}
                                         </button>
                                        <hr></hr>
                                        <a href="index.html" className="btn btn-google btn-user btn-block">
                                            <i className="fab fa-google fa-fw"></i> Login with Google
                                        </a>
                                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                            <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a>

                                    </form>
                                    {mensaje && <div>{mensaje}</div>}
                                    <hr></hr>
                                    <div className="text-center">
                                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div className="text-center">
                                        <Link to="/register" className="small" href="register.html">Create an Account!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
           </div>
  )
}
