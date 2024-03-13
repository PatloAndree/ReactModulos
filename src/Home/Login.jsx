import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validarLogin from "../Auth/login_api";

function Login({ onLogin }  ) {
  const [email, setEmail] = useState("");
  const [contrasena, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await validarLogin(email, contrasena);
    if (result.success) {
      onLogin();
      navigate("/Escritorio");
      console.log("entrando");
    } else {
      setError(result.error);
    }
  };

  return (
    <section className="vh-50 pt-2" >
    {/* <section className="" style={{ backgroundColor: "#" }}> */}
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-75">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        {/* <i className="fas fa-cubes fa-2x" style={{color: '#ff6219'}}></i> */}
                        <span className="h1 fw-bold mb-0">Bienvenido</span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Inicia sesión
                      </h5>

                      <div className="form-outline mb-4">
                        <label className="form-label">Correo</label>
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Contraseña</label>
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          value={contrasena}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      {error && (
                        <div classNameName="alert alert-danger">{error}</div>
                      )}
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Ingresar
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        ¿Olvide mi contraseña?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: " #393f81" }}>
                       ¿Aún no tienes una cuenta?{" "}
                        <a href="#!" style={{ color: "#393f81" }}>
                          Registrate aquí
                        </a>
                      </p>
                    
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
