import React, { useState } from "react";
import { database } from "./FirebaseConfig";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegisterAndLogin() {
    const [login, setLogin] = useState(false);

    const history = useNavigate();

    const handleSubmit = (e, type) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (type == "signup") {
            createUserWithEmailAndPassword(database, email, password)
                .then((data) => {
                    console.log(data, "authData");
                    history("/home");
                })
                .catch((err) => {
                    alert(err.code);
                    setLogin(true);
                });
        } else {
            signInWithEmailAndPassword(database, email, password)
                .then((data) => {
                    console.log(data, "authData");
                    history("/home");
                })
                .catch((err) => {
                    alert(err.code);
                });
        }
    };

    const handleReset = () => {
        history("/reset");
    }
    return (
        <div className="App">
            {/* Registration and login Screen */}
            {/* <div className="siglog"> */}
            <section>
            <div className="container pt-4">

                <div className="siglog">
                    <div
                        className={login == false ? "activeColor me-4 " : "pointer me-4"}
                        onClick={() => setLogin(false)}
                    >
                        SignUp
                    </div>
                    <div
                        className={login == true ? "activeColor" : "pointer"}
                        onClick={() => setLogin(true)}
                    >
                        SignIn
                    </div>
                    {/* </div> */}
                </div>
                <h1>{login ? "SignIn" : "SignUp"}</h1>
                <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
                    <input className="form-control" name="email" placeholder="Email" />
                    <br />
                    <input name="password"  className="form-control"  type="text" placeholder="Password" />
                    <br />
                    <p onClick={handleReset}>Forgot Password?</p>
                    <br />
                    <button type="submit" className="btn button-sub">{login ? "SignIn" : "SignUp"}</button>
                </form>
                </div>
            </section>
        </div>
    );
}
export default RegisterAndLogin;